"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <>
      <div>ログイン中のユーザー</div>
      <p>{session?.user?.email}</p>
      <button onClick={() => signOut()}>サインアウトする</button>
    </>
  );
}
