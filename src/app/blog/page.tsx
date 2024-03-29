import { getPosts } from "../(api)/blog";
import Link from "next/link";
import { AUTHORS } from "../constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col py-10 gap-2 w-full dark:divide-gray-700 divide-slate-300 divide-y h-full">
      <div className="text-4xl font-bold dark:text-neutral-400 text-neutral-500">
        All Posts
      </div>
      {posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post, index) => {
          return (
            <div key={index} className="w-full pt-4 text-left hover:rounded-sm">
              <div className="text-2xl font-semibold dark:text-slate-200">
                {post.title}
              </div>
              <div className="text-sm dark:text-slate-400 text-neutral-500">
                <Link
                  href={AUTHORS[post.author].url}
                  className="dark:text-teal-500 text-teal-600 hover:underline"
                >
                  {AUTHORS[post.author].name}
                </Link>
                <span> • </span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-us", {
                    day: "numeric",
                    year: "numeric",
                    month: "long",
                  })}{" "}
                </span>
                <div className="dark:text-slate-500">{post.time} min read</div>
              </div>
              <div className="mt-2 mb-4 dark:text-slate-400 text-slate-600 text-sm">
                {post.summary}
              </div>
              <div className="mb-4 flex text-sm gap-2 flex-wrap">
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 dark:bg-slate-800 bg-slate-300 dark:text-slate-200 rounded text-sm font-medium border dark:border-slate-200 border-slate-800"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <Link
                href={"/blog/" + post.slug}
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                Read on {"->"}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
