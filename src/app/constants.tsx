export const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

export const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
export const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
export const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
