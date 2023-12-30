import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import imageSize from "rehype-img-size";
import { mdxComponents } from "./mdx-components";

export function PostBody({ children }: { children: string }) {
  return (
    <div className="prose prose-red dark:prose-invert">
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkToc, remarkMath],
            rehypePlugins: [
              //@ts-ignore
              [imageSize, { dir: "src/app/(blogPosts)" }],
              rehypeSlug,
              rehypeAutolinkHeadings,
              rehypeKatex,
            ],
          },
        }}
        components={mdxComponents}
      />
    </div>
  );
}
