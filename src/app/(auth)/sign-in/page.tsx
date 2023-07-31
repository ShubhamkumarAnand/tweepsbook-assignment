"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-6 rounded-xl bg-gray-700 gap-5 text-black">
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="p-3 rounded-xl"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="p-3 rounded-xl"
        />
        <button className="rounded p-2 bg-slate-600" onClick={handleSignUp}>
          Sign up
        </button>
        <button className="rounded p-2 bg-gray-500 " onClick={handleSignIn}>
          Sign in
        </button>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
}
