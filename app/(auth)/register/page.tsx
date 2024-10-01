export default function Register() {
  return (
    <form>
      <h2 className="text-xl font-medium text-center mb-3">Register</h2>
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input type="text"
          name="email"
          placeholder="Your Name"
          id="name"
          className="border border-zinc-600 focus:border-zinc-300 bg-zinc-700 w-full rounded h-8 px-2 outline-none" />
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input type="email"
          name="email"
          placeholder="email@example.com"
          id="password"
          className="border border-zinc-600 focus:border-zinc-300 bg-zinc-700 w-full rounded h-8 px-2 outline-none" />
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input type="password"
          name="password"
          placeholder="password"
          id="password"
          className="border border-zinc-600 focus:border-zinc-300 bg-zinc-700 w-full rounded h-8 px-2 outline-none" />
      </div>
      <div className="mb-3">
        <button type="submit" className="w-full h-8 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded">Register</button>
      </div>
      <p>Aleady have account? <a href="/login" className="text-blue-400">login</a></p>
    </form>
  )
}

