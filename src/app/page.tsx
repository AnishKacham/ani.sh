import ResumeButton from "./(components)/resume-button";
import { Suspense } from "react";
import MiniSpotify from "./(components)/mini-spotify";
import WorkHistory from "./(components)/work-history";
import Projects from "./(components)/(projects)";
import Introduction from "./(components)/introduction";

export default function Home() {
  return (
    <main className=" flex w-full h-full flex-col items-start">
      <Introduction />
      {/* @ts-expect-error Async Server Component */}
      <WorkHistory />
      <Projects />
    </main>
  );
}
