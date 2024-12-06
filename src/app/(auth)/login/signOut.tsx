"use client";
import { signOut } from "@/src/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

export default function SignOutComponent() {
  const router = useRouter();
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button className="" onClick={() => {router.push('/login')}}>
        <LogoutIcon />
      </button>
    </form>
  );
}
