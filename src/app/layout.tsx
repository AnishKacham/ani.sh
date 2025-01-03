import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Navbar from "./(components)/navbar";
import BurgerMenu from "./(components)/burger-menu";
import Footer from "./(components)/footer";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Anish Kacham",
    template: "%s | Anish Kacham",
  },
  description:
    "Anish Kacham is a software engineer building meaningful software and experiences for the industry.",
  applicationName: "ani.sh",
  icons: {
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "black",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const props = {
    navItems: [
      {
        key: "",
        label: "home",
      },
      {
        key: "blog",
        label: "blog",
      },
    ],
  };
  return (
    <html suppressHydrationWarning={true} className="flex flex-col min-h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={clsx(
          inter.className,
          "bg-slate-50 dark:bg-gray-900 dark:text-slate-400 px-6 md:px-0 xl:px-0"
        )}
      >
        <Providers>
          <Navbar {...props} />
          <div className="w-full self-center flex h-[100%] flex-col items-center justify-start">
            <div className="max-w-[780px] w-full">{children}</div>
          </div>
          <BurgerMenu {...props} />
          <Footer {...props} />
        </Providers>
      </body>
    </html>
  );
}
