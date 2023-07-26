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
  inverted = false,
  iconProps = {},
  children,
  ...props
}: IIconLinkProps) {
  const defaultIconProps = {
    className: inverted
      ? `bg-red-500 dark:bg-red-400 text-slate-50 dark:text-slate-950`
      : `text-gray-900 dark:text-gray-100`,
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
