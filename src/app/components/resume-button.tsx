"use client";
import IconLink from "./icon-link";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

export default function () {
  return (
    <button
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1ZuoquaYrOLihQmgd4GyvG5vvaYu51U9I/view?usp=sharing",
          "_blank",
        );
      }}
      className="w-36 flex flex-row gap-2 p-2 rounded-md button dark:bg-red-400 bg-red-500 content-center flex-wrap"
    >
      <IconLink
        target="_blank"
        iconProps={{
          fontSize: "medium",
          className: "dark:text-dark text-slate-50",
        }}
        Icon={WorkHistoryIcon}
      >
        <text className="ml-2 dark:text-dark text-sm text-slate-50 font-semibold hover:underline hover:underline-offset-4">
          Resume / CV
        </text>
      </IconLink>
    </button>
  );
}
