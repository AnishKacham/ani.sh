"use client";

import { useState } from "react";
import { IExperienceItem } from "../(api)/experience";
import clsx from "clsx";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

export function ExperienceToggle({
  workExperiences,
}: {
  workExperiences: IExperienceItem[];
}) {
  const [tabIndex, changeTab] = useState(0);

  function handleCompanyButtonClick(exp: IExperienceItem, index: number) {
    changeTab(index);
  }

  console.log(workExperiences);

  const companyButtons = workExperiences
    .sort(
      (a, b) =>
        new Date(b?.startdate ?? 0).getTime() -
        new Date(a?.startdate ?? 0).getTime(),
    )
    .map((exp, index) => {
      return (
        <button
          onClick={() => {
            handleCompanyButtonClick(exp, index);
          }}
          key={index}
          className={clsx(
            "text-sm p-3 md:border-l md:border-b-0 border-b hover:text-red-400 hover:dark:bg-gray-700 hover:bg-slate-300 text-left dark:hover:bg-gray-700 hover:bg-slate-300",
            tabIndex == index
              ? "border-red-400 text-red-400"
              : "dark:border-gray-700 border-neutral-300 text-slate-400",
          )}
        >
          {exp.company}
        </button>
      );
    });

  return (
    <>
      <div className="flex-col hidden md:flex prose dark:prose-invert">
        <div className="not-prose flex flex-col">
          <div className="text-xl font-semibold">
            {workExperiences[tabIndex].title}
            <span className="text-red-400"> @ </span>
            <Link
              target="_blank"
              href={workExperiences[tabIndex].url}
              className="text-red-400 hover:underline underline-offset-4"
            >
              {" "}
              {workExperiences[tabIndex].company}
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-sm">
              {new Date(workExperiences[tabIndex].startdate).toLocaleDateString(
                "en-us",
                { year: "numeric", month: "short" },
              )}{" "}
              -{" "}
              {workExperiences[tabIndex].enddate == null
                ? "Present"
                : new Date(
                    workExperiences[tabIndex].enddate,
                  ).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                  })}
            </div>
          </div>
        </div>
        <MDXRemote {...workExperiences[tabIndex].serializedContent} />
      </div>
      <div className="flex md:flex-col flex-row">{companyButtons}</div>
      <div className="prose md:hidden flex flex-col dark:prose-invert">
        <MDXRemote {...workExperiences[tabIndex].serializedContent} />
      </div>
    </>
  );
}
