import Link from "next/link";
import { ProjectIcons } from "./project-icons";
import { IProject } from "@/app/types";
import clsx from "clsx";

export type IProjectCard = IProject & {
  index: number;
};

export default function ProjectCard(props: IProjectCard) {
  const bgImage = {
    backgroundImage: `url(${props.cover_image})`,
  };

  return (
    <Link
      href={props.link ? props.link : props.github}
      target="_blank"
      className="flex h-full w-full flex flex-col border-slate-300 dark:border-gray-700 border dark:text-white"
      style={bgImage}
      suppressHydrationWarning
    >
      <div className="bg-slate-50/60 dark:bg-slate-900/70">
        <div className="p-4 pr-0">
          <div className="flex flex-row justify-between items-center my-2">
            <ProjectIcons {...props} />
            <span
              className={clsx(
                `${props.context.color}`,
                "px-4 text-sm font-bold text-gray-950 rounded-l-full"
              )}
            >
              {props.context.topic}
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="font-semibold text-xl mb-2">{props.title}</div>
          </div>
          <div className="mb-5 pr-4">{props.description}</div>
          <div className="flex gap-2 mt-auto mb-2 text-sm flex-wrap pr-4">
            {props.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="px-2.5 py-0.5 dark:bg-slate-800 bg-slate-300 rounded text-sm font-medium border dark:border-slate-200 border-slate-800"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
