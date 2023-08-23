
import { fetchLatestPlayed, fetchRecentlyPlayedTrack, getNowPlaying } from "../api/spotify"
import Image from 'next/image'
import Spotify from "@/app/assets/spotify.png"

function renderEqualizer(count: number, active: boolean) {
    const bars: React.ReactNode[] = [];
    for (let i = 0; i < count; i++) {
      const barStyle = {
        animationDelay: `${Math.floor(Math.random() * 10) * 100}ms`,
      };
      bars.push(
        <div
          key={i}
          style={barStyle}
          className={`bg-spotify  w-[2px] ${
            active ? `animate-equalizer h-4` : `animate-none h-1`
          }`}
        ></div>
      );
    }
    return bars;
  }

export default async function MiniSpotify(){

    const spotifyData = await fetchLatestPlayed();

    return(
        <div className="rounded-md button border border-2 p-1">
            <Image
            src={spotifyData.album.images[0].url}
            width={spotifyData.album.images[0].width}
            height={spotifyData.album.images[0].height}
            alt="album-image"
            className="inline-block h-10 w-10"
            />
            <div className="inline-block align-top">
            <Image
            src={Spotify}
            alt="spotify"
            width={15}
            height={15}
            className="ml-2 inline-block"
            />
            <text className="mx-2 text-s">{spotifyData.name}</text>
            <div className="mx-2 flex flex-row gap-1">
                {renderEqualizer(16,true)}
            </div>
            </div>
        </div>
    )
}