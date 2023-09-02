import { PostBody } from "@/app/blog/[slug]/(components)/post-body";
import { getPost } from "@/app/(api)/blog";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return <PostBody>{post?.content}</PostBody>;
}
