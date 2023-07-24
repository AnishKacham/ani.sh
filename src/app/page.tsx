import IconLink from "./components/icon-link";
import ProfilePicture from "./components/profile-picture";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default async function Home() {
  return (
    <main className=" flex w-full h-fit flex-col items-start px-10">
      <ProfilePicture />
      <div className="w-fit h-fit mt-10 text-5xl font-sans font-extrabold dark:text-slate-400 text-slate-600">
        <text>Hi, I am </text>
        <text className="text-red-400">Anish</text>
      </div>
      <div className="w-fit h-fit dark:text-slate-400 text-xl font-semibold text-slate-600 mt-2">
        <p>CS Undergrad from BITS Hyderabad,</p>
        <p>Full Stack Developer | SDE-1 @ NCR Corp.</p>
      </div>
      <div className="mt-5 dark:text-slate-400 text-slate-600">
        Love watching and building software come to life from mere abstracts and
        ideas. <br />
        Solving architectural problems is a thrill and
      </div>
      <div className="mt-5 flex-row gap-2">
        <IconLink Icon={LinkedInIcon} href="https://www.linkedin.com/in/anish-kumar-kacham-78b390193/"/>
        <IconLink Icon={GitHubIcon} href="https://github.com/AnishKacham"/>
        <IconLink Icon={TwitterIcon} href="https://twitter.com/anishKach"/>
      </div>
    </main>
  );
}
