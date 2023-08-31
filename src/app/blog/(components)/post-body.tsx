import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";
import { mdxComponents } from "./mdx-components";

export function PostBody({ children }: { children: string }) {
  return (
    <div className="prose dark:prose-invert prose-red px-10 py-10 w-full">
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkToc],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        }}
        components={mdxComponents}
      />
    </div>
  );
}
