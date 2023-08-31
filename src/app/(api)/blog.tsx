import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

interface IPost{
  content: string,
  slug: string,
  title?: string,
  summary?: string,
  tags?: string[],
  published?: boolean,
  date?: string,
  time?: number,
}

// TODO: Add caching to prevent unnecessary network waterfall
export async function getPosts() : Promise<IPost[]> {
  const blogPosts = await fs.readdir("src/app/(blogposts)/");

  return Promise.all(
    blogPosts.map(async (blogpost) => {
      const filesInBlogPost = await fs.readdir(
        `src/app/(blogposts)/${blogpost}`,
      );
      const mdxFile = filesInBlogPost.filter(
        (file) => path.extname(file) == ".mdx",
      )[0];

      const postContent = await fs.readFile(
        `src/app/(blogposts)/${blogpost}/${mdxFile}`,
      );
      const { data, content } = matter(postContent);
      const fileSlug = path.parse(mdxFile).name;
      if (data.published === false)
        return { ...data, content: "It's under works!", slug: fileSlug };
      return { ...data, content, slug: fileSlug };
    }),
  );
}

async function sleep(ms: number){
  return new Promise(resolve => setTimeout(resolve,ms));
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
