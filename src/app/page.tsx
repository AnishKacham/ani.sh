import ResumeButton from "./(components)/resume-button";
import { Suspense } from "react";
import MiniSpotify from "./(components)/mini-spotify";
import WorkHistory from "./(components)/work-history";
import Projects from "./(components)/(projects)/projects";
import Introduction from "./(components)/introduction";
import WorkHistoryV2 from "./(components)/work-history-v2";

export default function Home() {
  return (
    <main className=" flex w-full h-full flex-col items-start gap-20">
      <Introduction />
      {/* @ts-expect-error Async Server Component */}
      <WorkHistoryV2 />
      <Projects />
    </main>
  );
}
