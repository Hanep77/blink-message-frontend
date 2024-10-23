"use client"

import "./globals.css";
import Aside from "./aside";
import { usePathname, redirect } from "next/navigation";
import { useEffect } from "react";


const disabledAside = ["/login", "/register"]

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname == '/') {
      redirect('/chat');
    }
  }, [])

  return (
    <html lang="en">
      <body className={`bg-zinc-800 text-zinc-300 flex`}>
        {!disabledAside.includes(pathname) && <Aside />}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
