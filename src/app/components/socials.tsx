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
        <IconLink
          target="_blank"
          Icon={TwitterIcon}
          href="https://twitter.com/anishKach"
        />
        <a href="https://codeforces.com/profile/noGoodHandles" target="_blank">
          <WrapSvg name="Codeforces" className="h-[24px] py-[1px]" />
        </a>
      </div>
    </>
  );
};

export default Socials;
