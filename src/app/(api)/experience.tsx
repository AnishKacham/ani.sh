import fs from "fs/promises";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { cache } from "react";

export interface IExperienceItem {
  serializedContent: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  company: string;
  url: string;
  duration: string;
  title: string;
  startdate: Date;
  enddate: Date;
  logolight: string;
  logodark: string;
}

export const getExperienceItems = cache(
  async (): Promise<IExperienceItem[]> => {
    const experiencesFolderPath = path.resolve(
      process.cwd(),
      "src/app/(experience)/",
    );
    const experiences = await fs.readdir(experiencesFolderPath);
    // @ts-ignore
    return Promise.all(
      experiences.map(async (exp) => {
        const experienceItem = await fs.readFile(
          `${experiencesFolderPath}/${exp}`,
        );
        const { data, content } = matter(experienceItem);
        const serializedContent = await serialize(content);
        return { ...data, serializedContent };
      }),
    );
  },
);
