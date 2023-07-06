import DuolingoCard from "../components/duolingo-card";
import SpotifyCard from "../components/spotify-card";


export default function About() {
  return (
    <div className="flex flex-col sm:justify-between sm:w-full gap-1 sm:flex-row items-center">
      {/* @ts-expect-error Async Server Component */}
      <DuolingoCard />
      {/* @ts-expect-error Async Server Component */}
      <SpotifyCard />
    </div>
  );
}
