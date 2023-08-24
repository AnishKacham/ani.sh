import { fetchLatestPlayed } from "../api/spotify";
import Image from "next/image";
import Spotify from "@/app/assets/spotify.png";
import clsx from "clsx";

function renderEqualizer(count: number = 20, active: boolean = true) {
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
      ></div>,
    );
  }
  return bars;
}

export default async function MiniSpotify() {
  const spotifyData = await fetchLatestPlayed();

  return (
    /*
      TODO: Figure out how to use this
      https://github.com/davidkrantz/Colorfy/blob/master/spotify_background_color.py
      to pick the perfect background color for the currently playing songs album image.
    */
    <a
      href={spotifyData.album.external_urls.spotify}
      target="_blank"
      className={clsx(
        "flex flex-row w-36 rounded-md button gap-1 dark:bg-slate-700 bg-slate-300",
      )}
    >
      <Image
        src={spotifyData.album.images[0].url}
        width={spotifyData.album.images[0].width}
        height={spotifyData.album.images[0].height}
        alt="album-image"
        className="h-10 w-10 rounded-l-md"
      />
      <div className="h-full w-full">
        <div className="flex flex-row gap-1">
          <Image
            src={Spotify}
            alt="spotify"
            width={14}
            height={14}
            className="self-center"
          />
          <div className="overflow-hidden w-20">
            <div
              className={clsx(
                "text-sm whitespace-nowrap text-left w-fit",
                spotifyData.name.length > 10 ? "animate-marquee-mini" : "",
              )}
            >
              {spotifyData.name}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1">{renderEqualizer(16)}</div>
      </div>
    </a>
  );
}
