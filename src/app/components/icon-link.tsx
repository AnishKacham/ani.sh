"use client";

type IIconLinkProps = PropsWithChildren<
  {
    Icon: React.ElementType;
    inverted?: boolean;
    iconProps?: SvgIconProps;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

import { SvgIconProps } from "@mui/material";
import { PropsWithChildren } from "react";

function IconLink({
  Icon,
  href,
  inverted = false,
  iconProps = {},
  children,
  ...props
}: IIconLinkProps) {
  const defaultIconProps = {
    className: inverted
      ? `bg-red-500 dark:bg-red-400 text-slate-50 dark:text-slate-950`
      : `dark:text-slate-400 text-slate-600`,
  };
  return (
    <div>
      <a {...props}>
        {Icon && (
          <Icon fontSize="medium" {...{ ...defaultIconProps, ...iconProps }} />
        )}
        {children}
      </a>
    </div>
  );
}

export default IconLink;
