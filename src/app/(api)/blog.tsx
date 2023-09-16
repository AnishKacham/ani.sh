import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { PromiseSleep } from "./utils";
import { cache } from "react";

interface IPost {
  content: string;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  published: boolean;
  date: Date;
  time: number;
}

// TODO: Add caching to prevent unnecessary network waterfall
export const getPosts = cache(async (): Promise<IPost[]> => {
  // await PromiseSleep(5000);
  const blogPostsFolderPath = path.resolve(
    process.cwd(),
    "src/app/(blogPosts)/",
  );
  const blogPosts = await fs.readdir(blogPostsFolderPath);
  // @ts-ignore
  return Promise.all(
    blogPosts.map(async (blogpost) => {
      const filesInBlogPost = await fs.readdir(
        `${blogPostsFolderPath}/${blogpost}`,
      );
      const mdxFile = filesInBlogPost.filter(
        (file) => path.extname(file) == ".mdx",
      )[0];

      const postContent = await fs.readFile(
        `${blogPostsFolderPath}/${blogpost}/${mdxFile}`,
      );
      const { data, content } = matter(postContent);
      // const fileSlug = path.parse(mdxFile).name;
      if (data.published === false)
        return { ...data, content: "It's under works!", slug: blogpost };
      return { ...data, content, slug: blogpost };
    }),
  );
});

export async function getPost(slug: string) {
  // await PromiseSleep(5000);
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
