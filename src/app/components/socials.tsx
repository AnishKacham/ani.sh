"use client";
import IconLink from "./icon-link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import CodeforcesIcon from "@/app/assets/codeforces.svg";
import { WrapSvg } from "./svg-wrap";

const Socials = () => {
  return (
    <>
      <div className="mt-5 flex flex-row gap-4">
        <IconLink
          Icon={LinkedInIcon}
          href="https://www.linkedin.com/in/anish-kumar-kacham-78b390193/"
        />
        <IconLink Icon={GitHubIcon} href="https://github.com/AnishKacham" />
        <IconLink Icon={TwitterIcon} href="https://twitter.com/anishKach" />
        <WrapSvg name="Codeforces" />
      </div>
    </>
  );
};

export default Socials;
