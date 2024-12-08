"use client"

import { useEffect } from "react";
import Aside from "../aside";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("AuthToken");
      if (!token) {
        window.location.href = "/login"
      }
    }
  });

  return (
    <div className="flex">
      <Aside />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  )
}
