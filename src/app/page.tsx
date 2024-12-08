"use client"

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("AuthToken");
      if (token) {
        window.location.href = "/chat"
      } else {
        window.location.href = "/login"
      }
    }
  });
  return (<></>);
}

