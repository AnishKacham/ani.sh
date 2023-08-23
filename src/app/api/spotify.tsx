import querystring from "querystring";
import {
  NOW_PLAYING_ENDPOINT,
  RECENTLY_PLAYED_ENDPOINT,
  TOKEN_ENDPOINT,
  basic,
  refresh_token,
} from "../constants";

interface IGetAccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface ITrackItem{
  album: {
    images: {
      url: string,
      width: number,
      height: number,
    }[],
  },
  artists: {
    name: string,
  }[],
  name: string,
  uri: string,
}

const getAccessToken = async (): Promise<IGetAccessToken> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    // Not entirely sure that this request is it shows cache hit in the log
    // Hence setting a revalidate to 1 hour because a generated accessToken expires in an hour
    // as mentioned here: https://developer.spotify.com/documentation/web-api/concepts/access-token
    next: {
      revalidate: 0,
    },
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export async function getNowPlaying() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      next: {
        revalidate: 0,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (response.status === 204 || response.status > 400) {
      const profileData = await fetchProfile(access_token);
      console.log(profileData);
      return {
        is_playing: false,
        isIdle: true,
        item: {
          name: "No track being played ://",
          album: {
            images: [{ url: profileData.images[0].url }],
            artists: [],
          },
          external_urls: {
            spotify: "/",
          },
        },
      };
    }
    return response.json();
  } catch (error) {
    console.error("FAILED TO FETCH CURRENTLY PLAYING SONG, ERROR: ", error);
  }
}

export async function fetchRecentlyPlayedTrack(){
  try{
    const { access_token } = await getAccessToken();

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT + '?limit=1',{
      method: "GET",
      headers: {Authorization: `Bearer ${access_token}`}
    });
    const res = await response.json();
    return res.items;
  } catch (error){
    console.error('FAILED TO FETCH RECENTLY PLAYED TRACKS, ERROR: ',error);
  }
  
}

export async function fetchLatestPlayed(): Promise<ITrackItem> {
  try{
    const { access_token } = await getAccessToken();
    
    const currentlyPlaying = await fetch(NOW_PLAYING_ENDPOINT,{
      next: {
        revalidate: 0,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if(currentlyPlaying.status === 204 || currentlyPlaying.status > 400){
      const recentlyPlayedTrack = await fetch(RECENTLY_PLAYED_ENDPOINT+'?limit=1',{
        next: {
          revalidate: 0,
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const recentlyPlayedTrackItem = await recentlyPlayedTrack.json();
      return recentlyPlayedTrackItem.items[0].track;
    }
    else{
      const currentlyPlayingTrackItem = await currentlyPlaying.json();
      return currentlyPlayingTrackItem.item;
    }
  } catch (error){
    console.error('FAILED TO FETCH THE LATEST PLAYED / CURRENTLY PLAYING TRACK, ERROR: ',error);
    throw new Error("FAILED TO FETCH LATEST PLAYED SONG / CURRENTLY PLAYING SONG");
  }
  
}

async function fetchProfile(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}
