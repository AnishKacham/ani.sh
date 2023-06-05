import DuolingoCard from "./components/duolingo-card";
import SpotifyCard from "./components/spotify-card";

export default async function Home() {

  return (
    <main className="flex w-full h-fit flex-col items-center bg-slate-50 dark:bg-gray-950">
      {/* @ts-expect-error Async Server Component */}
      <DuolingoCard/>
      {/* @ts-expect-error Async Server Component */}
      <SpotifyCard/>
    </main>
  )
}
