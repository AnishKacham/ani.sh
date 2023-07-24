"use client";
import IconLink from "./components/icon-link";
import ProfilePicture from "./components/profile-picture";
import Socials from "./components/socials";


export default function Home() {
  return (
    <main className=" flex w-full h-fit flex-col items-start px-10">
      <ProfilePicture />
      <div className="w-fit h-fit mt-10 text-5xl font-sans font-extrabold dark:text-slate-400 text-slate-600">
        <text>Hi, I am </text>
        <text className="dark:text-red-400 text-red-500">Anish</text>
      </div>
      <div className="w-fit h-fit dark:text-slate-400 text-xl font-semibold text-slate-600 mt-2">
        <p>CS Undergrad from BITS Hyderabad,</p>
        <p>Full Stack Developer | SDE-1 @ NCR Corp.</p>
      </div>
      <div className="mt-5 dark:text-slate-400 text-slate-700">
        Love watching and building software come to life from mere abstracts and
        ideas. <br />
        Solving architectural problems is a thrill and
      </div>
      <Socials/>
      <div className="h-[3000px]"></div>
    </main>
  );
}
