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
      className="w-36 flex flex-row gap-2 p-2 rounded-md button dark:bg-slate-700 bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-600 content-center flex-wrap"
    >
      <IconLink
        target="_blank"
        iconProps={{
          fontSize: "medium",
          className: "dark:text-white text-slate-200",
        }}
        Icon={WorkHistoryIcon}
      >
        <span className="ml-2 dark:text-white text-sm text-slate-50 font-semibold hover:underline hover:underline-offset-4">
          Resume / CV
        </span>
      </IconLink>
    </button>
  );
}
