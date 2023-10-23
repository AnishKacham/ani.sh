"use client";

import { useState } from "react";
import { IExperienceItem } from "../(api)/experience";
import clsx from "clsx";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useTheme } from "next-themes";

export function ExperienceToggle({
  workExperiences,
}: {
  workExperiences: IExperienceItem[];
}) {
  const [tabIndex, changeTab] = useState(0);
  const { resolvedTheme } = useTheme();

  function handleCompanyButtonClick(exp: IExperienceItem, index: number) {
    changeTab(index);
  }

  // console.log(workExperiences);

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
            "text-sm p-3 md:border-l md:border-b-0 border-b dark:hover:text-slate-400 hover:dark:bg-gray-700 hover:bg-slate-300 text-left dark:hover:bg-gray-700 hover:bg-slate-300",
            tabIndex == index
              ? "dark:border-slate-200 border-red-400 dark:text-slate-400"
              : "dark:border-gray-700 border-neutral-300 dark:text-slate-500",
          )}
        >
          <span> {exp.company} </span>
          <span className="italic "> {exp.duration} </span>
        </button>
      );
    });

  return (
    <>
      <div className="flex-col hidden md:flex prose dark:prose-invert">
        <div className="not-prose flex flex-col">
          <div className="text-xl font-semibold dark:text-slate-400 flex flex-row items-center gap-2">
            {workExperiences[tabIndex].title}
            <span className="dark:text-slate-200 text-center"> @ </span>
            {workExperiences[tabIndex].logolight && resolvedTheme == "light" ? (
              <Link target="_blank" href={workExperiences[tabIndex].url}>
                {" "}
                <img
                  src={workExperiences[tabIndex].logolight}
                  height={28}
                  width={100}
                  alt="company-logo"
                />
              </Link>
            ) : workExperiences[tabIndex].logodark &&
              resolvedTheme == "dark" ? (
              <Link target="_blank" href={workExperiences[tabIndex].url}>
                {" "}
                <img
                  src={workExperiences[tabIndex].logodark}
                  height={28}
                  width={100}
                  alt="company-logo"
                />
              </Link>
            ) : (
              <Link
                target="_blank"
                href={workExperiences[tabIndex].url}
                className="dark:text-slate-200 text-red-400 hover:underline underline-offset-4"
              >
                {workExperiences[tabIndex].company}
              </Link>
            )}
          </div>
          <div className="flex flex-row items-center">
            <div className="text-sm text-slate-600 font-semibold">
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
