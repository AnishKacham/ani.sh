"use client";

import { IExperienceItem } from "../(api)/experience";
import { MDXRemote } from "next-mdx-remote";

export default function TimeLine({
  workExperiences,
}: {
  workExperiences: IExperienceItem[];
}) {
  return (
    <>
      <ul className="">
        {workExperiences
          .sort(
            (a, b) =>
              new Date(b?.startdate ?? 0).getTime() -
              new Date(a?.startdate ?? 0).getTime()
          )
          .map((exp, index) => {
            return (
              <li
                key={index}
                className="relative flex gap-6 items-baseline pb-6 before:absolute before:left-[5px] before:top-[18px] before:h-full before:w-[2px] before:dark:bg-gray-700 before:bg-gray-200
              last:before:hidden"
              >
                <div className="">
                  <div className="w-[12px] h-[12px] rounded-full dark:bg-gray-700 bg-gray-200" />
                </div>
                <div className="md:w-40 md:shrink-0">
                  <p className="text-lg font-semibold text-red-400">
                    {exp.company}
                  </p>
                  <p>{exp.title}</p>
                  <p className="text-sm prose dark:prose-invert">
                    {new Date(exp.startdate).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "short",
                    })}{" "}
                    -{" "}
                    {exp.enddate == null
                      ? "Present"
                      : new Date(exp.enddate).toLocaleDateString("en-us", {
                          year: "numeric",
                          month: "short",
                        })}
                    {exp.duration == "" ? (
                      <></>
                    ) : (
                      <span className="italic"> ({exp.duration})</span>
                    )}
                  </p>
                  <div className="prose flex flex-col dark:prose-invert block md:hidden">
                    <MDXRemote {...exp.serializedContent} />
                  </div>
                </div>
                <div>
                  <div className="prose flex flex-col dark:prose-invert hidden md:block">
                    <MDXRemote {...exp.serializedContent} />
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
