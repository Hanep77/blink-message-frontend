"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";

type ChatSessionId = {
  setChatSession: Dispatch<SetStateAction<string|null>>
}

type ChatSession = {
  id: string;
  name: string;
  lastChat: string;
  time: string;
};

export default function ChatList({setChatSession}: ChatSessionId) {
  const { token } = useContext(AuthContext);
  const [chats, setChatsData] = useState<Array<ChatSession>>([]);

  const fetchChats = async (): Promise<Array<ChatSession> | null | undefined> => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/chat-session",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      let data = await response.json();
      if (data.statusCode == 200) {
        return data.data;
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    const loadChats = async () => {
      const chatData = await fetchChats();
      if (chatData) {
        setChatsData(chatData);
      }
    };
    loadChats();
  }, []);

  return (
    <div className="overflow-auto">
      {chats.length > 0 ? (
        chats.map((item, key) => (
          <Link
            href={"/chat"}
            className="flex items-center justify-between border-b border-zinc-700 hover:bg-zinc-700 px-2"
            key={key}
            onClick={() => {setChatSession(item.id)}}
          >
            <div className="flex gap-2 py-2">
              <div className="w-12 h-12 rounded-full bg-zinc-600 flex justify-center items-center text-2xl font-semibold">
                {item.name[0]}
              </div>
              <div>
                <div>
                  <h2 className="text-lg font-medium text-zinc-200">
                    {item.name}
                  </h2>
                  <p className="text-zinc-400">{item.lastChat}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-zinc-400">{item.time}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex h-[80vh] flex-col justify-center items-center">
            <div className="text-lg">
                Tidak ada Riwayat Obrolan
            </div>
            <button className="bg-teal-700 text-white py-2 px-5 rounded-lg mt-4 hover:scale-[105%] transition-all duration-500">Add Conversation</button>
        </div>
      )}
    </div>
  );
}
