import Link from "next/link";
import { ProjectIcons } from "./project-icons";
import { EMOJIS } from "@/app/constants";
import { IProject } from "@/app/types";

export type IProjectCard = IProject & {
  index: number;
};

export default function ProjectCard(props: IProjectCard) {
  return (
    <Link
      href={props.link ? props.link : props.github}
      target="_blank"
      className="flex h-full w-full flex flex-col dark:bg-gray-800 bg-slate-200 dark:hover:bg-gray-700 hover:bg-slate-300 border-slate-300 dark:border-gray-700 border rounded-md p-4"
      suppressHydrationWarning
    >
      <div className="flex flex-row justify-between items-center my-2">
        <span className="text-3xl">{EMOJIS[props.index % EMOJIS.length]}</span>
        <ProjectIcons {...props} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="dark:text-slate-200 font-semibold text-xl mb-2">
          {props.title}
        </div>
      </div>
      <div className="dark:text-slate-400 mb-5">{props.description}</div>
      <div className="flex gap-2 mt-auto mb-2 text-sm flex-wrap">
        {props.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="px-2.5 py-0.5 dark:bg-slate-800 bg-slate-300 dark:text-slate-200 rounded text-sm font-medium border dark:border-slate-200 border-slate-800"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </Link>
  );
}
