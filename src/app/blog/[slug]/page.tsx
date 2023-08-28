import { PostBody } from "@/app/blog/(components)/post-body";
import { getPost } from "@/app/(api)/blog";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  console.log("[SLUG] : ", params.slug);
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return <PostBody>{post?.content}</PostBody>;
}
