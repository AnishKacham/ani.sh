import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { mdxComponents } from "./mdx-components";
import Head from "next/head";

export function PostBody({ children }: { children: string }) {
  return (
    <div className="prose prose-red dark:prose-invert">
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkToc, remarkMath],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings,rehypeKatex],
          },
        }}
        components={mdxComponents}
      />
    </div>
  );
}
