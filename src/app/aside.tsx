"use client";

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";
import ChatIcon from '@mui/icons-material/Chat';
import clsx from 'clsx';

export default function Aside() {
  type ChatSession = {
    id: number,
    name: string,
    lastChat: string,
    time: string
  }

  const data: Array<ChatSession> = [
    {
      id: 1,
      name: "Rusdi",
      lastChat: "y",
      time: "10:15"
    },
    {
      id: 2,
      name: "si imut",
      lastChat: "halo",
      time: "09:01"
    },
    {
      id: 3,
      name: "Fuad",
      lastChat: "oke",
      time: "07:33"
    },
    {
      id: 3,
      name: "Fuad",
      lastChat: "oke",
      time: "07:33"
    },
    {
      id: 3,
      name: "Fuad",
      lastChat: "oke",
      time: "07:33"
    },
    {
      id: 3,
      name: "Fuad",
      lastChat: "oke",
      time: "07:33"
    },
  ]

  const pathname = usePathname();

  return (
    <aside className="w-[400px] overflow-hidden border-e border-zinc-700">
      <div className="flex flex-row h-[100vh]">
        <div className="w-[70px] bg-gray-700 rounded">
          <div className="flex flex-col h-full relative p-2">
            <Link href={'/'} className={clsx("flex p-2 rounded-lg",{'bg-gray-500' : pathname === '/'})}>
              <ChatIcon className="m-auto text-3xl"/>
            </Link>
            <div className="absolute bottom-3 p-2 left-0">
              <Image src='/profileImage/test.jpg' width={200} height={200} alt="Client Profile Image" className="rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-semibold mb-2 ms-2 italic underline">Blink Message</h1>
          <div className="overflow-auto">
            {data.map((item, key) => (
              <Link href={"/chat"} className="flex items-center justify-between border-b border-zinc-700 hover:bg-zinc-700 px-2" key={key}>
                <div className="flex gap-2 py-2">
                  <div className="w-12 h-12 rounded-full bg-zinc-600 flex justify-center items-center text-2xl font-semibold">
                    {item.name[0]}
                  </div>
                  <div>
                    <div>
                      <h2 className="text-lg font-medium text-zinc-200">{item.name}</h2>
                      <p className="text-zinc-400">{item.lastChat}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">{item.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </aside>
  )
}
