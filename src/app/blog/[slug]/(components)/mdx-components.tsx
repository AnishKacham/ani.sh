import { Code } from "bright";
import { MDXComponents } from "mdx/types";
import ghLight from "@/app/(assets)/github-light-flav.json";
import onedarkPro from "@/app/(assets)/onedark-pro-flav.json";

Code.theme = {
  dark: onedarkPro,
  light: ghLight,
  lightSelector: "html.light",
};

export const mdxComponents: MDXComponents = {
  pre: Code,
  Ic: ({ children }) => {
    return (
      <span className="inline text-sm bg-gray-700 rounded font-mono text-white px-1">
        {children}
      </span>
    );
  },
};
