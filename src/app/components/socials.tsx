"use client";
import IconLink from "./icon-link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { WrapSvg } from "./svg-wrap";

const Socials = () => {
  return (
    <>
      <div className="mt-5 flex flex-row gap-4 items-end">
        <IconLink
          target="_blank"
          Icon={LinkedInIcon}
          href="https://www.linkedin.com/in/anish-kumar-kacham-78b390193/"
        />
        <IconLink
          target="_blank"
          Icon={GitHubIcon}
          href="https://github.com/AnishKacham"
        />
        <a href="https://twitter.com/anishKach" target="_blank">
          <WrapSvg name="X" className="w-[18px] mb-0.5" />
        </a>
        <a href="https://codeforces.com/profile/noGoodHandles" target="_blank">
          <WrapSvg name="Codeforces" className="h-[24px]" />
        </a>
      </div>
    </>
  );
};

export default Socials;
