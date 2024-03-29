"use client";

type IWrapSvg = {
  name: keyof typeof IconMap;
} & React.SVGAttributes<SVGAElement>;

import A from "@/app/(assets)/a.svg";
import Codeforces from "@/app/(assets)/codeforces.svg";
import Sadface from "@/app/(assets)/sadface.svg";
import X from "@/app/(assets)/x.svg";

export const IconMap = {
  A,
  Codeforces,
  Sadface,
  X,
};

export function WrapSvg(props: IWrapSvg) {
  const { name, ...rest } = props;
  const Icon = IconMap[name];

  const defaultStyle = {
    className: "text-gray-900 dark:text-gray-100 fill-current",
  };

  return <Icon {...{ ...defaultStyle, ...rest }} />;
}
