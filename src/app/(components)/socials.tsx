"use client";
import IconLink from "./icon-link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { WrapSvg } from "./svg-wrap";

const Socials = () => {
  return (
    <>
      <div className="flex flex-row gap-4 items-end w-full justify-center flex-wrap">
        <IconLink
          target="_blank"
          Icon={EmailIcon}
          href="mailto:anish.k.kacham@gmail.com"
        />
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
        <a
          href="https://x.com/anishKach?t=lqwNg4n15mY_sIriBO6g2g&s=09"
          target="_blank"
        >
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
