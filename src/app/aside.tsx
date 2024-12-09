"use client";


import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState,  } from "react";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Modal from "../components/modal";
import ChatIcon from "@mui/icons-material/Chat";
import Image from "next/image";
import ChatList from "./chat/list";

type RootProps = {
  setChatSession: Dispatch<SetStateAction<string|null>>
}

export default function Aside({setChatSession}: RootProps) {
  const router = useRouter();
  const { clearValue } = useContext(AuthContext);


  const [profileOpen, setProfileOpen] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className={modalOpen ? 'block': 'hidden'}>
        <Modal type={"Logout Modal"} dialogText={"Apakah anda akan mengakhiri sesi ?"} confirmText={"Tetap Logout"} setModalConfirm={setModalConfirm} setModalOpen={setModalOpen} />
        {(() => {
          if(modalConfirm){
            return clearValue();
          }
        })()}
      </div>
     <aside className="w-[400px] overflow-hidden border-e border-zinc-700 relative">
        <div className="flex flex-row h-[100vh]">
          <div className="w-[70px] bg-zinc-800 border-e border-zinc-700 rounded">
            <div className="flex flex-col h-full relative p-2">
              <Link
                href={"/"}
                className={clsx("flex p-2 rounded-lg", {
                  "bg-gray-500": pathname === "/",
                })}
              >
                <ChatIcon className="m-auto text-3xl" />
              </Link>
              <div
                className={`absolute left-12 bottom-16 bg-zinc-500 drop-shadow-lg rounded-lg h-auto w-48 py-3 px-2 ${
                  profileOpen ? "block" : "hidden"
                } grid gap-1`}
              >
                <button
                  className="border-2 border-zinc-600 w-full text-blue-200 font-semibold  rounded-lg p-1 hover:bg-zinc-400 hover:text-white hover:border-zinc-400 transition-all"
                  onClick={() => {
                    setProfileOpen(false);
                    router.push("/user-info");
                  }}
                >
                  User Info
                </button>
                <button
                  className="border-2 border-red-600 w-full text-red-600 font-semibold rounded-lg p-1 hover:bg-red-600 hover:text-white transition-all"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setProfileOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
              <div
                className="absolute bottom-3 p-2 left-0"
                onClick={() => {
                  setProfileOpen(!profileOpen);
                }}
              >
                <Image
                  src="/profileImage/test.jpg"
                  width={200}
                  height={200}
                  alt="Client Profile Image"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-semibold my-2 ms-2 italic underline">
              Blink Message
            </h1>
            <ChatList setChatSession={setChatSession}/>
          </div>
        </div>
      </aside>
    </>
  );
}
