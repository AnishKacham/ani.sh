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

async function fetchProfile(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}
