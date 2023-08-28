import { Code } from "bright";
import { MDXComponents } from "mdx/types";
Code.lineNumbers = true;
export const mdxComponents: MDXComponents = {
  pre: Code,
};
