/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter, } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex rounded-3xl border-[0.3px] border-gray-500 py-4 px-6" >
        <img
          src="img/logo.svg"
          alt="logo"
          className="cursor-pointer w-auto h-auto"
        />
        <div className="flex gap-10 text-lg cursor-pointer">
          <p>products</p>
          <p>duo</p>
          <p>build</p>
          <p>docs</p>
        </div>
        <button className="fixed bottom-0 left-0 flex h-48 px-5 shadow-xl rounded-3xl py-2 font-bold text-black border-t-2 border-white w-full items-end justify-center bg-gradient-to-t from-white via-white bg-[#54C0A0] lg:static lg:h-auto lg:w-auto lg:bg-none scale-110" onClick={() => router.push(`${location.origin}/sign-in`)}>
          Launch App
        </button>
      </div>
      <div className="flex place-items-center before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#54C0A0] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex-col justify-center items-center mx-auto mt-10">
          <p className="flex justify-center text-green-500 uppercase text-sm font-medium">
            JET PROTOCOL
          </p>
          <h1 className="flex justify-center text-6xl tracking-wide">the next generation of</h1>
          <h1 className="italic text-6xl tracking-tighter font-serif flex justify-center">
            defi governance
          </h1>
          <div className="flex flex-col justify-center text-2xl items-center mt-5 mb-10 gap-3 tracking-wide">
            <p className="text-gray-400">
              experience open source, transparent and efficient borrowing
            </p>
            <p className="text-gray-400">and lending on solana.</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button className=" cursor-pointer fixed bottom-0 left-0 flex h-48 px-5 shadow-xl rounded-3xl py-2 font-bold text-black border-t-2 border-white w-full items-end justify-center bg-gradient-to-t from-white via-white bg-[#54C0A0] lg:static lg:h-auto lg:w-auto lg:bg-none scale-110 mr-10">
              read docs
            </button>
            <button className="fixed bottom-0 left-0 flex h-48 px-5 shadow-xl rounded-3xl py-2 font-bold text-white border-t-2 border-white w-full items-end justify-center bg-gradient-to-t from-white via-white bg-black lg:static lg:h-auto lg:w-auto lg:bg-none scale-110 cursor-pointer">
              how it works
            </button>
          </div>
        </div>
      </div>

      <div className="mb-32 text-center lg:text-left flex justify-center lg:mb-0 items-center gap-6 h-48">
        <img
          src="/img/brand/leftside.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/CMS.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/kenetic.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/Paradigm.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/parafi.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/Reciprocal.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/sinoGlobal.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/solanaventures.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/stableNode.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/mgr.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/gsr.svg"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/brand/rightside.svg"
          alt="company log"
          className="w-auto h-auto"
        />
      </div>
    </main>
  );
}
