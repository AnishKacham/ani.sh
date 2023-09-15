import ProfilePicture from "@/app/images/profile-pic-cropped.jpg";
import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="mt-16">
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
        <span>Hi, I am </span>
        <span className="dark:text-red-400 text-red-500">Anish</span>
      </div>
      <div className="w-fit h-fit text-xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
        <p>CS Undergrad from BITS Hyderabad,</p>
        <p>Full Stack Developer | SDE-1 @ NCR Corp.</p>
      </div>
      <div className="mt-5 text-gray-900 dark:text-gray-100">
        Building & designing meaningful software, solving architectural problems
        and writing quality code are few things that excite me. Currently
        writing logic for transactional systems in .NET and C++. Also quite
        familiar with MERN stack and NextJS with TailwindCSS
      </div>
    </>
  );
}
