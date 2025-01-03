"use client"

import { useEffect } from "react";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("AuthToken");
      if (token) {
        window.location.href = "/chat"
      }
    }
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 p-4 rounded bg-zinc-700">
        {children}
      </div>
    </div>
  )
}
