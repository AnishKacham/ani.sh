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
  const navItemsWithHome = [
    ...navItems,
    {
      label: "home",
      key: "",
    },
  ];
  return (
    <div className="sm:hidden">
      <button
        onClick={handleToggle}
        className="fixed bottom-16 right-4 w-12 h-12 rounded-full dark:bg-red-400 bg-red-500"
      >
        <MenuIcon className="dark:text-gray-950 text-slate-50" />
      </button>
      {toggled ? (
        <div className="flex flex-col rounded-lg font-semibold fixed p-2 border-2 border-gray-400 text-slate-600 dark:text-gray-400 bg-slate-200 dark:bg-gray-900 w-24 h-fit bottom-32 right-4 gap-2">
          {navItemsWithHome.map((item) => {
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
