"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) router.push("/Top");
  else {
    return <LoginForm />;
  }
}
