"use client";
export interface INavBarProps {
  label: string;
  key: string;
}

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import Image from "next/image";
import proPic from "@/app/images/profile-pic.jpg";
import clsx from "clsx";

export default function Navbar({ navItems }: { navItems: INavBarProps[] }) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, setTheme, resolvedTheme } = useTheme();
  const route = usePathname();
  console.log("current route ---->\n", route);
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true));

  return (
    <div className="sticky top-0 flex w-full items-center px-10 py-4 h-[82px] justify-between supports-backdrop-blur:bg-white/95 backdrop-blur">
      {route !== "/" ? (
        <Link href={"/"}>
          <Image
            alt=""
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-400 dark:ring-gray-400 "
            src={proPic}
          />
        </Link>
      ) : (
        <div></div>
      )}
      <div className="hidden sm:flex flex gap-4 rounded-lg px-8 py-3 font-medium text-gray-900 dark:text-gray-100">
        {navItems.map((item) => {
          return (
            <Link
              href={`\/` + `${item.key}`}
              key={item.key}
              className={clsx(
                "flex align-center px-2 py-1 rounded",
                route === "/" + item.key
                  ? "text-red-400 bg-gray-200 dark:bg-gray-700"
                  : "hover:text-red-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div>
        <button
          onClick={toggleTheme}
          type="button"
          className="p-1 dark:bg-slate-50 bg-slate-600 flex items-center justify-center w-8 h-8 rounded-full border border-slate-600 dark:border-gray-100"
        >
          {mounted && resolvedTheme === "dark" ? (
            <LightModeIcon className="w-6 h-6 dark:text-slate-600 text-slate-300" />
          ) : (
            <DarkModeIcon className="w-6 h-6 dark:text-slate-600 text-slate-200" />
          )}
        </button>
      </div>
    </div>
  );
}
