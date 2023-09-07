import fs from "fs/promises";
import matter from "gray-matter";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";

export interface IExperienceItem{
    serializedContent: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>,
    company: string,
    url: string,
    duration: string,
    title: string,
    startdate: Date,
    enddate: Date,
}

export async function getExperienceItems(): Promise<IExperienceItem[]>{
    const experiences = await fs.readdir("src/app/(experience)/");
    // @ts-ignore
    return Promise.all(
        experiences.map(async (exp)=>{
            const experienceItem = await fs.readFile(`src/app/(experience)/${exp}`);
            const {data,content} = matter(experienceItem);
            const serializedContent = await serialize(content);
            return {...data,serializedContent};
        })
    )
}