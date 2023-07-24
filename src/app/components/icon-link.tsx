"use client";

type IIconLinkProps =  PropsWithChildren< {
  Icon: React.ElementType,
  href: string;
  inverted?: boolean;
  iconProps?: SvgIconProps;
  props?: LinkProps
}>

import Link, { LinkProps } from "next/link";
import { SvgIconProps } from "@mui/material";
import { PropsWithChildren } from "react";


function IconLink({
  Icon,
  href,
  inverted = false,
  iconProps,
  children,
  ...props
}: IIconLinkProps) {
  return <div>
    <Link href={href} {...props}>{Icon && <Icon fontSize="medium" {...iconProps} className={inverted
      ? `rounded-sm bg-red-400  dark:text-gray-950 text-slate-50`
      : `rounded-sm text-slate-600 dark:text-slate-400`}
    />}
    {children}
    </Link>
  </div>;
};

export default IconLink;