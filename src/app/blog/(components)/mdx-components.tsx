import { Code } from "bright";
import { MDXComponents } from "mdx/types";
import ghLight from '@/app/(assets)/github-light-flav.json';
import onedarkPro from "@/app/(assets)/onedark-pro-flav.json"

Code.theme = {
  dark: onedarkPro,
  light: ghLight,
  lightSelector: 'html.light',
}

export const mdxComponents: MDXComponents = {
  pre: Code,
};
