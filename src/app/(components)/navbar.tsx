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
import clsx from "clsx";

export default function Navbar({ navItems }: { navItems: INavBarProps[] }) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, setTheme, resolvedTheme } = useTheme();
  const route = usePathname();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true), []);
  // use 82 px height if using the sticky profile picture component in home page
  // and py-4 for the returning div
  return (
    <div className="z-50 sticky top-0 flex w-full py-2 h-fit supports-backdrop-blur:bg-white/95 backdrop-blur justify-center">
      <div className="flex max-w-[780px] w-full items-center justify-between">
        <Link
          href="/"
          className="flex flex-row align-center rounded underline decoration-4 decoration-red-400 underline-offset-4 text-3xl items-center dark:text-slate-200 pb-2"
        >
          a.
        </Link>

        <div className="flex flex-row items-center">
          <div className="hidden sm:flex flex gap-4 rounded-lg px-8 font-medium text-gray-900 dark:text-gray-100">
            {navItems.map((item) => {
              return (
                <Link
                  href={`\/` + `${item.key}`}
                  key={item.key}
                  className={clsx(
                    "flex align-center px-2 py-1 rounded",
                    route === "/" + item.key
                      ? "text-red-400 bg-gray-200 dark:bg-gray-700"
                      : "hover:text-red-400 hover:bg-gray-200 dark:hover:bg-gray-700",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
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
    </div>
  );
}
