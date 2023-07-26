import Image from "next/image";
import { getNowPlaying } from "../api/spotify";
import SpotifyLogo from "@/app/images/spotify-logo.png";
import Link from "next/link";

export default async function spotifyCard() {
  const currentSong = await getNowPlaying();
  console.log("NOW PLAYING", currentSong);
  function renderEqualizerBars(count: number, active: boolean) {
    const bars: React.ReactNode[] = [];
    for (let i = 0; i < count; i++) {
      const barStyle = {
        animationDelay: `${Math.floor(Math.random() * 10) * 100}ms`,
      };
      bars.push(
        <div
          key={i}
          style={barStyle}
          className={`bg-spotify  rounded-full ${
            active ? `animate-equalizer w-1 h-8` : `animate-none w-1 h-1`
          }`}
        ></div>
      );
    }
    return bars;
  }

  return (
    <Link
      href={currentSong?.item?.external_urls?.spotify ?? "/"}
      className="dark:shadow-slate-200/30 border-gray-400 shadow-gray-800/30 hover:opacity-80 shadow-lg shadow-lg h-fit min-h-40 mt-10 rounded-lg self-start w-80 max-w-full border-2 dark:border-gray-400"
    >
      <div className="flex flex-row h-fit w-full gap-4 pt-4 pb-2 px-4">
        <div className="relative h-fit w-fit">
          <Image
            src={SpotifyLogo}
            alt="spotify-logo"
            height={28}
            width={128}
            style={{
              objectFit: "contain",
              zIndex: -1,
            }}
          />
        </div>
      </div>
      <>
        <div className="flex flex-row h-fit w-full gap-4 m-4">
          <Image
            src={currentSong.item.album.images[0].url}
            alt="Cover"
            width={80}
            height={80}
            className="shadow-sm border rounded-md shadow-slate-200"
          />
          <div className="flex flex-col justify-between w-fit">
            <div className="flex flex-col items-start h-[40px]">
              <div className="flex flex-row justify-start w-40 gap-6 overflow-x-hidden h-5">
                <div className="song-display text-sm whitespace-nowrap w-fit font-bold text-left @container">
                  <div className="@[8rem]:underline animate-marquee">
                    {currentSong.item.name}
                  </div>
                </div>
              </div>
              <p className="text-sm dark:text-gray-400 h-5 w-40 text-left truncate">
                {currentSong.item.album.artists
                  .map((artist: any) => artist.name)
                  .join(", ")}
              </p>
            </div>

            <div className="max-w-60 gap-1 h-8 items-center flex flex-row">
              {renderEqualizerBars(20, currentSong.is_playing)}
            </div>
          </div>
        </div>
      </>
      {/*  )} */}
    </Link>
  );
}
function fetchProfile() {
  throw new Error("Function not implemented.");
}
