"use client";
import { EMOJIS, PROJECTS } from "@/app/constants";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import BlenderIcon from "@mui/icons-material/Blender";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { shuffleArray } from "./projects";

type IShuffleButton = {
  shufflehandler: () => void;
};

export default function ShuffleButtons(props: IShuffleButton) {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      <button
        className="p-2 dark:bg-gray-800 bg-slate-300 rounded-md w-fit border-slate-300 dark:border-gray-700 border-5 flex flex-row items-center text-sm"
        onClick={() => {
          shuffleArray(EMOJIS);
          props.shufflehandler();
        }}
      >
        <HourglassTopIcon />
      </button>
      <button
        className="p-2 dark:bg-gray-800 bg-slate-300 rounded-md w-fit border-slate-300 dark:border-gray-700 border-5 flex flex-row items-center text-sm"
        onClick={() => {
          shuffleArray(PROJECTS);
          props.shufflehandler();
        }}
      >
        <HourglassBottomIcon />
      </button>
      <button
        className="p-2 dark:bg-gray-800 bg-slate-300 rounded-md w-fit border-slate-300 dark:border-gray-700 border-5 flex flex-row items-center text-sm"
        onClick={() => {
          shuffleArray(EMOJIS);
          shuffleArray(PROJECTS);
          props.shufflehandler();
        }}
      >
        <ShuffleOnIcon />
      </button>
    </div>
  );
}
