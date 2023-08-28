"use client";
import { useState } from "react";
import { INavBarProps } from "./navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BurgerMenu({ navItems }: { navItems: INavBarProps[] }) {
  const [toggled, setToggled] = useState(false);
  const route = usePathname();
  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 w-10 h-10 rounded-full dark:bg-red-400 bg-red-500"
      >
        <MenuIcon className="dark:text-gray-950 text-slate-50" />
      </button>
      {toggled ? (
        <div className="rounded-lg fixed p-2 border-2 border-gray-400 text-slate-600 dark:text-gray-400 bg-slate-200 dark:bg-gray-900 w-24 h-fit bottom-16 right-4 text-sm font-medium shadow-lg shadow-gray-800/30 dark:shadow-slate-200/30">
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
      ) : (
        <></>
      )}
    </div>
  );
}
