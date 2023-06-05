import Image from "next/image";
import { getNowPlaying } from "../api/spotify";

export default async function spotifyCard() {
  const currentSong = await getNowPlaying();

  console.log("------------>SPOTIFY DATA\n", currentSong);

    function renderEqualizerBars(count:number){
        const bars : React.ReactNode[] = [];
        for(let i = 0; i< count; i++){
            const barStyle = {
                animationDelay : `${Math.floor(Math.random()*10)*100}ms`
            }
            bars.push(
                <div
                key={i}
                style={barStyle}
                className={`bg-[#1DB954] w-1 h-8 rounded-md animate-equalizer`}
                >
                </div>
            )
        }
        return bars;    
    }

  return (
    <button className="shadow-slate-200/30 hover:opacity-80 shadow-lg h-full min-h-40 mb-10 rounded-lg self-start w-80 max-w-full border-2 dark:border-gray-400">
        <div className="flex flex-row h-fit w-full gap-4 pt-4 pb-2 px-4">
            <div className="relative h-fit w-fit">
              <Image
                src="/spotify-logo.png"
                alt="spotify-logo"
                height={28}
                width={128}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
      {currentSong.isIdle && currentSong.isIdle ? (
        <>NOTHING PLAYING</>
      ) : (
        <>
          <div className="flex flex-row h-fit w-full gap-4 m-4">
            <Image
              src={currentSong.item.album.images[0].url}
              alt="Cover"
              width={80}
              height={80}
              className="shadow-sm border rounded-md shadow-slate-200"
            />
            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-start">
                <div className="flex flex-row justify-start w-40 gap-6 overflow-x-hidden">
                <div className="song-display text-sm whitespace-nowrap w-fit font-bold text-left @container">
                  <div className="@[8rem]:underline animate-marquee">{currentSong.item.name}</div>
                </div>
              </div>
              <text className="text-sm dark:text-gray-400">
                {currentSong.item.album.artists.map(
                  (artist: any) => artist.name
                ).join(', ')}
              </text>
                </div>
              
              <div className="max-w-60 gap-1 flex flex-row">
                {renderEqualizerBars(20)}               
              </div>
            </div>
          </div>
        </>
      )}
    </button>
  );
}
