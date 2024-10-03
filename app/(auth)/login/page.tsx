"use client";

import Link from "next/link"
import { useFormState } from "react-dom";
import { authenticate } from "@/auth";

export default function Login() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
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
        <button aria-disabled={isPending} className="w-full h-8 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded">Login</button>
      </div>
      <p>Do not have account yet? <Link href="/register" className="text-blue-400">register</Link></p>
    </form>
  )
}
