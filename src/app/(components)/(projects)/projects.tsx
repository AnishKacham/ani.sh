import Link from "next/link";
import ProjectCard from "./project-card";
import { PROJECTS } from "@/app/constants";

export default function Projects() {
  return (
    <div className="w-full flex flex-col">
      <div className="md:grid flex flex-col grid-cols-[max-content_1fr] items-center gap-8">
        <div className="text-3xl font-extrabold w-fit dark:text-slate-200">
          {"Some things that I've built"}
        </div>
        <div className="justify-self-stretch border-t dark:border-gray-700 border-gray-200 w-full"></div>
      </div>
      <Link
        href="/archive"
        className="w-full text-center text-sm pt-2 pb-4 text-red-400 hover:underline"
      >
        view the archvie
      </Link>
      <div className="flex flex-col sm:grid mt-5 grid-cols-2 gap-3">
        {PROJECTS.map((project, index) => {
          return <ProjectCard key={index} {...{ ...project, index }} />;
        })}
      </div>
    </div>
  );
}
