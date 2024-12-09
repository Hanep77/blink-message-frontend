"use client"

import Aside from "../aside";
import { useState } from "react";
import NoChatComponent from "./noChat";
import ChatPage from "./page";
// export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
export default function AuthLayout() {

  const [chatSession, setChatSesssion] = useState<string|null>(null);

  return (
    <div className="flex">
      <Aside setChatSession={setChatSesssion}/>
      <div className="flex-grow">
        {chatSession ? (<ChatPage chatSession={chatSession}/>) : (<NoChatComponent />) }
      </div>
    </div>
  )
}
