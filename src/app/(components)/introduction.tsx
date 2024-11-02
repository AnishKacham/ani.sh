import ProfilePicture from "@/app/images/profile-pic-cropped.jpg";
import Image from "next/image";
import Socials from "./socials";
import ResumeButton from "./resume-button";
import MiniSpotify from "./mini-spotify";
import { Suspense } from "react";

export default function Introduction() {
  return (
    <>
      <div className="flex flex-col sm:grid grid gap-5 mt-20 w-full">
        <div className="self-center flex flex-col">
          <Image
            src={ProfilePicture}
            width={228}
            alt="profile-picture"
            className="rounded-md self-center"
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="w-fit h-fit text-5xl font-sans font-extrabold text-gray-900 dark:text-slate-400 self-center text-center">
            <span className="dark:text-red-400 text-red-600">Anish Kacham</span>
          </div>
          <div className="w-fit h-fit text-3xl text-gray-900 dark:text-slate-400 mt-2 text-center font-semibold self-center">
            Software Engineer
          </div>
          <div className="prose dark:prose-invert mt-2 text-lg text-center w-4/5 self-center">
            Working on system software for super fast ATM transactions using
            C++. Learning about software engineering, computer architecture,
            operating systems, compilers and frameworks everyday.
          </div>
        </div>
        <Socials />
        <div className="flex flex-row gap-2 justify-center flex-wrap">
          <img className="h-[24px]" src="https://skillicons.dev/icons?i=cpp" />
          <img
            className="h-[24px]"
            src="https://skillicons.dev/icons?i=typescript"
          />
          <img className="h-[24px]" src="https://skillicons.dev/icons?i=rust" />
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
        <div className="flex justify-center gap-6 flex-wrap">
          <ResumeButton />
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
