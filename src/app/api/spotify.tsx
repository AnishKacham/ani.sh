import querystring from "querystring";
import {
  NOW_PLAYING_ENDPOINT,
  TOKEN_ENDPOINT,
  basic,
  refresh_token,
} from "../constants";
import { NextApiResponse } from "next";

interface IGetAccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface ISpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

const getAccessToken = async (): Promise<IGetAccessToken> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    // Not entirely sure that this request is it shows cache hit in the log
    // Hence setting a revalidate to 1 hour because a generated accessToken expires in an hour
    // as mentioned here: https://developer.spotify.com/documentation/web-api/concepts/access-token
    next: {
      revalidate: 3600,
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
    if(response.status === 204 || response.status > 400){
        return {is_playing: false, isIdle: true, item:{name:"He ain't playing no tracks ://"}}
    }
    return response.json();
  } catch (error) {
    // console.log("FAILED TO FETCH CURRENTLY PLAYING SONG, ERROR: ", error);
  }
}
