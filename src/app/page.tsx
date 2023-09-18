import ResumeButton from "./(components)/resume-button";
import Socials from "./(components)/socials";
import { Suspense } from "react";
import MiniSpotify from "./(components)/mini-spotify";
import WorkHistory from "./(components)/work-history";
import Projects from "./(components)/(projects)/projects";
import Introduction from "./(components)/introduction";

export default function Home() {
  return (
    <main className=" flex w-full h-full flex-col items-start">
      <Introduction />
      <Socials />
      <div className="relative flex-wrap flex mt-5 flex-row gap-2">
        <ResumeButton />
        <Suspense
          fallback={
            <button className="flex flex-row items-center w-36 rounded-md button gap-1 bg-slate-700 animate-pulse">
              <div className="w-[60px] h-[40px] rounded-l-sm bg-slate-600"></div>
              <div className="w-full flex flex-col gap-1.5 pr-1.5">
                <div className="bg-slate-600 w-full h-2.5 rounded-sm"></div>
                <div className="bg-slate-600 w-full h-2.5 rounded-sm"></div>
              </div>
            </button>
          }
        >
          {/* @ts-expect-error Async Server Component */}
          <MiniSpotify />
        </Suspense>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <WorkHistory />
      <Projects />
    </main>
  );
}
