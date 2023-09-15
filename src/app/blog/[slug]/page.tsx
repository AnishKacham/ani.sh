import { PostBody } from "@/app/blog/[slug]/(components)/post-body";
import { getPost } from "@/app/(api)/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return (
    <div className="flex flex-col py-10 w-full gap-4">
      <Link href="/blog" className="text-red-500 hover:text-red-400">
        {"<- "}Back to All posts
      </Link>
      <PostBody>{post?.content}</PostBody>
    </div>
  );
}
