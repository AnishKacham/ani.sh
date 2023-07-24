"use client";
interface INavBarProps {
  label: string;
  key: string;
}


import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Link from "next/link";
import Image from "next/image";
import proPic from "@/app/images/profile-pic.jpg";

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
    <div className="sticky top-0 flex w-full items-center px-10 py-4 justify-between drop-shadow-">
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
      <div className="hidden sm:flex flex gap-4 border-gray-400 rounded-lg text-slate-600 dark:text-gray-400 px-8 py-3 bg-slate-200 border-gray-300 dark:bg-gray-900 border-2 dark:border-gray-400 text-sm font-medium shadow-lg shadow-gray-800/30 dark:shadow-slate-200/30">
        {navItems.map((item) => {
          return (
            <Link
              href={`\/` + `${item.key}`}
              key={item.key}
              className={
                route === "/" + item.key
                  ? "flex text-red-400 align-center"
                  : "flex hover:text-red-400 align-center"
              }
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
            <LightModeIcon className="w-6 h-6 dark:text-slate-600 text-slate-300"/>
            ) : (
            <DarkModeIcon className="w-6 h-6 dark:text-slate-600 text-slate-200"/>
          )}
        </button>
      </div>
    </div>
  );
}
