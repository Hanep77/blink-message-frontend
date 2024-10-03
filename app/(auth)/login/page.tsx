"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }

    try {
      let response = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      let data = await response.json()
      if (data.statusCode == 200) {
        router.push("/chat");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      }
    }
  }

  return (
    <form onSubmit={submit}>
      <h2 className="text-xl font-medium text-center mb-3">Login</h2>
      {errorMessage && (
        <div className="mb-3 h-8 bg-red-300 bg-opacity-80 text-red-800 flex justify-center items-center rounded">
          <p>{errorMessage}</p>
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input type="email"
          name="email"
          placeholder="email@example.com"
          id="email"
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
        <button type="submit" className="w-full h-8 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded">Login</button>
      </div>
      {/* <p>Do not have account yet? <a href="/register" className="text-blue-400">register</a></p> */}
      <p>Do not have account yet? <Link href="/register" className="text-blue-400">register</Link></p>
    </form>
  )
}
