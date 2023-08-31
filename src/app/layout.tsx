import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Navbar from "./(components)/navbar";
import BurgerMenu from "./(components)/burger-menu";
import Footer from "./(components)/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const props = {
    navItems: [
      {
        key: "about",
        label: "about",
      },
      {
        key: "blog",
        label: "blog",
      },
    ],
  };
  return (
    <html suppressHydrationWarning={true} className="flex flex-col h-[100%]">
      <head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
                integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
                crossOrigin="anonymous"
            />
        </head>
      <body
        className={
          `${inter.className}` +
          " max-w-[960px] w-full self-center flex h-[100%] flex-col items-center justify-start px-2 bg-slate-50 dark:bg-slate-800"
        }
      >
        <Providers>
          <Navbar {...props} />
          {children}
          <BurgerMenu {...props} />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
