"use client";
interface INavBarProps {
    label: string,
    key: string,
}

import { useTheme } from "next-themes";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({navItems}:{navItems: INavBarProps[]}){

    const [mounted,setMounted] = useState<boolean>(false);
    const {systemTheme, setTheme, resolvedTheme} = useTheme();
    const route = usePathname();
    console.log('current route ---->\n',route);
    const toggleTheme = ()=>{
        setTheme(resolvedTheme === "dark" ? "light" : "dark")

    }

    useEffect(()=> setMounted(true))

    return (
        <div className="sticky top-2 flex w-full items-center m-2 justify-between border">
        {route!=='\/'?<Link href={"/"}>
            <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-400 dark:ring-gray-400 " src="/profile-pic.jpg"/>
        </Link>:<div></div>}
        <div className="hidden sm:flex flex gap-4 border-gray-400 rounded-lg text-slate-600 dark:text-gray-400 px-8 py-3 bg-slate-200 border-gray-300 dark:bg-gray-900 border-2 dark:border-gray-400 text-sm font-medium shadow-lg shadow-gray-800/30 dark:shadow-slate-200/30">
        {
            navItems.map((item)=>{
                return <Link href={`\/`+`${item.key}`} key={item.key} className={route === '\/'+item.key ? 'flex text-red-400 align-center':'flex hover:text-red-400 align-center'}>
                    {item.label}
                </Link>
            })
        }
        </div>
        <div>
        <button onClick={toggleTheme} type="button" className="p-1 dark:bg-slate-50 bg-slate-600 flex items-center justify-center w-8 h-8 rounded-full border border-slate-600 dark:border-gray-100">
        {
            mounted && resolvedTheme === "dark"
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="dark:text-slate-600 text-slate-300 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-200">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
          
        }
        </button>
        </div>
        </div>
    )
}