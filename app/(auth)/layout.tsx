export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 p-4 rounded bg-zinc-700">
        {children}
      </div>
    </div>
  )
}
