const data = {
  name: "Rusdi",
  messages: [
    {
      id: 1,
      sender: "me",
      text: "p"
    },
    {
      id: 2,
      sender: "notme",
      text: "euy"
    },
    {
      id: 3,
      sender: "me",
      text: "lorem ipsum dolor sit amet euy"
    },
    {
      id: 1,
      sender: "me",
      text: "p"
    },
    {
      id: 2,
      sender: "notme",
      text: "euy"
    },
    {
      id: 3,
      sender: "me",
      text: "lorem ipsum dolor sit amet euy"
    },
    {
      id: 1,
      sender: "me",
      text: "p"
    },
    {
      id: 2,
      sender: "notme",
      text: "euy"
    },
    {
      id: 3,
      sender: "me",
      text: "lorem ipsum dolor sit amet euy"
    },
    {
      id: 1,
      sender: "me",
      text: "p"
    },
    {
      id: 2,
      sender: "notme",
      text: "euy"
    },
    {
      id: 3,
      sender: "me",
      text: "lorem ipsum dolor sit amet euy"
    },
    {
      id: 4,
      sender: "me",
      text: "lorem ipsum dolor sit amet euy lorem ipsum dolor sit amet euy"
    }
  ]
}

export default function Page() {
  return (
    <div className="h-screen overflow-scroll">
      <div className="h-16 fixed w-[calc(100vw-400px)] border-b border-zinc-700 bg-zinc-800 flex items-center px-4 gap-4">
        <div className="w-10">
          <div className="w-12 h-12 rounded-full bg-zinc-600 flex justify-center items-center text-2xl font-semibold">
            {data.name[0]}
          </div>
        </div>
        <h2 className="text-lg font-medium text-zinc-200">{data.name}</h2>
      </div>

      <div className="px-4 py-20">
        {data.messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender == "me" && "justify-end"} mb-1`}>
            <div className={`bg-zinc-700 py-2 px-4 ${message.sender == "me" ? "rounded-l-3xl rounded-tr-3xl" : "rounded-r-3xl rounded-tl-3xl"} max-w-96 text-wrap`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 w-[calc(100vw-400px)] py-2 flex items-center justify-center px-4 gap-4 bg-zinc-800">
        <form className="h-10 w-full flex justify-center gap-1">
          <input type="text"
            name="message"
            placeholder="type your message here..."
            className="h-full rounded flex-grow px-4 bg-zinc-700 outline-none focus:ring-1 ring-zinc-300" />
          <button type="submit" className="border border-zinc-300 px-4 rounded hover:bg-zinc-300 hover:text-zinc-800">send</button>
        </form>
      </div>
    </div>
  )
}
