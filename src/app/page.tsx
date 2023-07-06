import Image from "next/image";

export default async function Home() {

  return (
    <main className=" flex w-full h-fit flex-row items-center justify-start">
      <div className="flex flex-col justify-start mt-16">
      <div className="sticky top-2 h-full">
        <Image
          width={64}
          height={64}
          src="/profile-pic-cropped.jpg"
          alt="landing-page-image"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col w-fit h-full mt-10">
        <div className="w-fit h-fit text-5xl font-sans font-extrabold dark:text-slate-400 text-slate-600">
          <text>Hi, I am </text>
          <text className="text-red-400">Anish</text>
        </div>
        <div className="w-fit h-fit dark:text-slate-400 text-xl font-semibold text-slate-600 mt-2">
          <p>CS Undergrad from BITS Hyderabad,</p>
          <p>Full Stack Developer | SDE-1 @ NCR Corp.</p>
        </div>
        <div className="mt-5 dark:text-slate-400 text-slate-600"></div>
      </div>
      <div className="h-[900px]">

      </div>
      </div>
    </main>
  );
}
