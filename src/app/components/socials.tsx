"use client";
import IconLink from "./icon-link"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const Socials = () => {
  return (
    <>
      <div className="mt-5 flex flex-row gap-4">
        <IconLink Icon={LinkedInIcon} href="https://www.linkedin.com/in/anish-kumar-kacham-78b390193/" />
        <IconLink Icon={GitHubIcon} href="https://github.com/AnishKacham" />
        <IconLink Icon={TwitterIcon} href="https://twitter.com/anishKach" />
      </div>
      <button onClick={()=>{window.open("https://drive.google.com/file/d/1ZuoquaYrOLihQmgd4GyvG5vvaYu51U9I/view?usp=sharing","_blank")}} className="dark:shadow-red-400 shadow-red-500 shadow-md mt-5 flex flex-row gap-2 p-2 rounded-md button border-2 dark:bg-red-400 bg-red-500 border-red-300">
        <IconLink target="_blank" iconProps={{ fontSize: "medium", className: "dark:text-gray-950 text-slate-50"}} Icon={WorkHistoryIcon}>
          <text className="ml-2 dark:text-gray-950 text-slate-50 font-semibold hover:underline hover:underline-offset-4">Resume / CV</text>
        </IconLink>
      </button>
    </>
  )
}

export default Socials;