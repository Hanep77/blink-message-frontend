import type { Metadata } from "next";
import "./globals.css";
import Aside from "./aside";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-zinc-800 text-zinc-300 flex`}>
        <Aside />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}