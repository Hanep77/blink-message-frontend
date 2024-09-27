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
  ]

  return (
    <aside className="w-4/12 h-screen border-e border-zinc-700 overflow-scroll p-4">
      <h1 className="text-2xl font-semibold mb-4">Chats</h1>
      <div className="flex flex-col gap-2">
        {data.map(item => (
          <div className="flex items-center justify-between border-b border-zinc-700">
            <div className="flex gap-2 pb-2">
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
          </div>
        ))}
      </div>
    </aside>
  )
}
