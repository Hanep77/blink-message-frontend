"use client"

import Aside from "../aside";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <Aside />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  )
}
