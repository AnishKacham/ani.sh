import ResumeButton from "./components/resume-button";
import Socials from "./components/socials";
import SpotifyCard from "./components/spotify-card";
import Image from "next/image";
import ProfilePicture from "@/app/images/profile-pic-cropped.jpg";
import { Suspense } from "react";
import MiniSpotify from "./components/mini-spotify";

export default function Home() {
  return (
    <main className=" flex w-full h-fit flex-col items-start px-10">
      <div className="mt-20">
        <Image
          priority
          src={ProfilePicture}
          width={80}
          height={80}
          alt="landing-page-image"
          className="rounded-full h-20 w-20"
        />
      </div>
      <div className="w-fit h-fit mt-10 text-5xl font-sans font-extrabold text-gray-900 dark:text-gray-100">
        <text>Hi, I am </text>
        <text className="dark:text-red-400 text-red-500">Anish</text>
      </div>
      <div className="w-fit h-fit text-xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
        <p>CS Undergrad from BITS Hyderabad,</p>
        <p>Full Stack Developer | SDE-1 @ NCR Corp.</p>
      </div>
      <div className="mt-5 text-gray-900 dark:text-gray-100">
        Love watching and building software come to life from mere abstracts and
        ideas. <br />
        Solving architectural problems is a thrill and
      </div>
      <Socials />
      <div className="relative flex-wrap flex mt-5 flex-row gap-2">
        <ResumeButton />
        <Suspense
          fallback={
            <button className="flex flex-row items-center w-36 rounded-md button gap-1 bg-slate-700 animate-pulse">
              <div className="w-[60px] h-[40px] rounded-l-md bg-slate-600"></div>
              <div className="w-full flex flex-col gap-1.5 pr-1">
                <div className="bg-slate-600 w-full h-2.5"></div>
                <div className="bg-slate-600 w-full h-2.5"></div>
              </div>
            </button>
          }
        >
          {/* @ts-expect-error Async Server Component */}
          <MiniSpotify />
        </Suspense>
      </div>
      <div className="h-[3000px]"></div>
    </main>
  );
}
