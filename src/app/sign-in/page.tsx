"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "sign-in page",
  description: "This is sign-in page of the application"
}

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

  const handleLogin = async () => {
    const res = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/movies`,
      }
    })
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };



  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className='relative mb-10 flex justify-center'>
        <button onClick={() => handleLogin()} className='flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-700 bg-white border rounded-lg'>
          <Image src="/img/brand/Google.svg" alt='Login with google' className='w-6' width={24} height={24} />
          Login with Google
        </button>
      </div>
      <div className="flex flex-col py-6 px-10 rounded-xl bg-gray-700 gap-5 text-black">
        <label className="text-sm">Email</label>
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="py-2 px-6 mt-0 rounded outline-none text-lg"
        />
        <label className="text-sm">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="py-2 px-6 rounded outline-none text-lg"
        />
        <button className="rounded p-2 bg-blue-600" onClick={handleSignUp}>
          Sign up
        </button>
        <button className="rounded p-2 bg-blue-500 " onClick={handleSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}
