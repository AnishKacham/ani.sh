"use client";
import Link from "next/link";
import { INavBarProps } from "./navbar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Footer({ navItems }: { navItems: INavBarProps[] }) {
  const route = usePathname();
  const navItemsWithHome = [
    {
      label: "home",
      key: "",
    },
    ...navItems,
  ];
  return (
    <div className="flex flex-col items-center mt-auto">
      <div className="border-t dark:border-gray-700 border-slate-300 max-w-[780px] w-full mt-28 py-4 flex flex-col sm:flex-row items-center justify-between flex-wrap">
        <div className="flex flex-row flex-wrap">
          {navItemsWithHome.map((item) => {
            return (
              <Link
                href={`\/` + `${item.key}`}
                key={item.key}
                className={clsx(
                  "flex align-center px-2 py-1 rounded",
                  route === "/" + item.key
                    ? "text-red-400"
                    : "hover:text-red-400"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="px-2 py-1 text-center text-sm">
          {" "}
          © 2023 Anish Kacham
        </div>
      </div>

      <div className="h-fit w-full text-sm dark:text-slate-400 text-slate-600 text-center">
        made with ❤️ by anish
      </div>
    </div>
  );
}
