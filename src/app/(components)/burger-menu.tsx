"use client";
import { useState } from "react";
import { INavBarProps } from "./navbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function BurgerMenu({ navItems }: { navItems: INavBarProps[] }) {
  const [toggled, setToggled] = useState(false);
  const route = usePathname();
  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="sm:hidden">
      {toggled ? (
        <div className="flex flex-col rounded-lg font-semibold fixed p-2 border-2 border-gray-400 dark:text-gray-400 bg-slate-200 dark:bg-gray-900 w-36 h-36 bottom-16 z-0 right-4 gap-2">
          {navItems.map((item) => {
            return (
              <Link
                href={`\/` + `${item.key}`}
                key={item.key}
                className={
                  route === "/" + item.key
                    ? "flex text-red-400 align-center text-xl"
                    : "flex hover:text-red-400 align-center text-xl"
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
      <button
        onClick={handleToggle}
        className={clsx({
          "fixed bottom-16 right-4 w-12 h-12 rounded-full dark:bg-red-400 bg-red-500 z-1 dark:text-slate-800 text-slate-50":
            !toggled,
          "fixed bottom-16 right-4 w-12 h-12 dark:text-slate-400 z-1": toggled,
        })}
      >
        {toggled ? (
          <CloseIcon className="h-30 w-30" />
        ) : (
          <MenuIcon className="h-30 w-30 " />
        )}
      </button>
    </div>
  );
}
