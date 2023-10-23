import { PostBody } from "@/app/blog/[slug]/(components)/post-body";
import { getPost } from "@/app/(api)/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AUTHORS } from "@/app/constants";
import { Metadata } from "next";

type IBlogSlugProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  props: IBlogSlugProps,
): Promise<Metadata> {
  const post = await getPost(props.params.slug);
  if (!post)
    return {
      title: "Blog Post",
    };

  return {
    title: {
      absolute: `${post.title} | ${post.author}`,
    },
    description: post.summary,
  };
}

export default async function BlogPage(props: IBlogSlugProps) {
  const post = await getPost(props.params.slug);
  if (!post) return notFound();
  return (
    <div className="flex flex-col py-10 w-full gap-4">
      <Link href="/blog" className="text-red-500 hover:text-red-400">
        {"<- "}Back to All posts
      </Link>
      <div className="">
        <h1 className="text-4xl font-extrabold dark:text-white">
          {post.title}
        </h1>
        <div>
          <Link
            className="dark:text-teal-500 text-teal-600 hover:underline"
            href={AUTHORS[post.author].url}
          >
            {AUTHORS[post.author].name}
          </Link>
          <span> • </span>
          <span>
            {new Date(post.date).toLocaleDateString("en-us", {
              day: "numeric",
              year: "numeric",
              month: "long",
            })}
          </span>
        </div>
      </div>
      <PostBody>{post.content}</PostBody>
    </div>
  );
}
