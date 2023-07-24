"use client";

interface IIconLinkProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
},
  href: string;
}

import { SvgIconProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Link from "next/link";


const IconLink = ({
  Icon,
  href,
  ...props
}: IIconLinkProps) => {
  return <div><Link href={href} {...props}>{<Icon/>}</Link></div>;
};

export default IconLink;
