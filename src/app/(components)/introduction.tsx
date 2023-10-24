import ProfilePicture from "@/app/images/profile-pic-cropped.jpg";
import Image from "next/image";
import Socials from "./socials";
import ResumeButton from "./resume-button";
import MiniSpotify from "./mini-spotify";
import { Suspense } from "react";

export default function Introduction() {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[auto_1fr] gap-5 mt-20">
        <Image
          src={ProfilePicture}
          width={228}
          alt="profile-picture"
          className="rounded-md self-center"
          priority
        />
        <div className="flex flex-col">
          <div className="w-fit h-fit text-5xl font-sans font-extrabold text-gray-900 dark:text-slate-400 text-center self-center">
            <span>Hi, I am </span>
            <span className="dark:text-slate-200 text-red-500">Anish</span>
          </div>
          <div className="w-fit h-fit text-xl font-semibold text-gray-900 dark:text-slate-400 mt-2 text-center">
            CS Undergrad from BITS Hyderabad, Full Stack Developer | SDE-1 @ NCR
            Corp.
          </div>
          <div className="mt-5 text-gray-900 dark:text-slate-400 text-center">
            Building & designing meaningful software, solving architectural
            problems and writing quality code are few things that excite me.
            Currently writing logic for transactional systems in .NET and C++.
            Also quite familiar with MERN stack and NextJS with TailwindCSS
          </div>
        </div>
        <Socials />
        <div className="flex flex-row gap-2 justify-center flex-wrap">
          <img className="h-[24px]" src="https://skillicons.dev/icons?i=cpp" />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=typescript"
          />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=python"
          />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=nodejs"
          />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=nestjs"
          />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=react"
          />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=nextjs"
          />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=mongodb"
          />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=django"
          />
          <img className="h-[24px]" src="https://skillicons.dev/icons?i=git" />
        </div>
        <div className="flex justify-center">
          <ResumeButton />
        </div>
        <div className="flex justify-center">
          <Suspense
            fallback={
              <button className="flex flex-row items-center w-36 rounded-md button gap-1 bg-slate-700 animate-pulse">
                <div className="w-[60px] h-[40px] rounded-l-md bg-slate-600"></div>
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
      </div>
    </>
  );
}
