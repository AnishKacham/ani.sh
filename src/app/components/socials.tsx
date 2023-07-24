"use client";
import IconLink from "./icon-link"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Socials = () => {
  return (
    <>
      <div className="mt-5 flex flex-row gap-4">
        <IconLink Icon={LinkedInIcon} href="https://www.linkedin.com/in/anish-kumar-kacham-78b390193/" />
        <IconLink Icon={GitHubIcon} href="https://github.com/AnishKacham" />
        <IconLink Icon={TwitterIcon} href="https://twitter.com/anishKach" />
      </div>
      <div className="mt-5 flex flex-row gap-2">
        <IconLink inverted iconProps={{ fontSize: "medium" }} Icon={HistoryEduIcon} href="https://drive.google.com/file/d/1ZuoquaYrOLihQmgd4GyvG5vvaYu51U9I/view?usp=sharing">
          <text className="ml-2 dark:text-slate-400 text-slate-600 font-semibold hover:underline hover:underline-offset-4">Resume / CV</text>
        </IconLink>
      </div>
    </>
  )
}

export default Socials;