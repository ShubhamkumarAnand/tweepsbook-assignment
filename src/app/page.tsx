/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex rounded-3xl border-[0.3px] border-gray-500 py-4 px-6">
        <img
          src="/logo.png"
          alt="logo"
          className="cursor-pointer w-auto h-auto"
        />
        <div className="flex gap-10 text-lg cursor-pointer">
          <p>products</p>
          <p>duo</p>
          <p>build</p>
          <p>docs</p>
        </div>
        <button className="fixed bottom-0 left-0 flex h-48 px-5 shadow-xl rounded-3xl py-2 font-bold text-black border-t-2 border-white w-full items-end justify-center bg-gradient-to-t from-white via-white bg-[#54C0A0] lg:static lg:h-auto lg:w-auto lg:bg-none scale-110">
          Log-In
        </button>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#54C0A0] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex-col justify-center items-center w-full">
          <p className="flex text-green-500 uppercase text-sm font-medium mx-auto">
            JET PROTOCOL
          </p>
          <h1 className="text-6xl tracking-wide">the next generation of</h1>
          <h1 className="italic text-6xl tracking-tight font-serif">
            defi governance
          </h1>
          <div className="flex-col justify-center items-center mt-5 mb-10 gap-3">
            <p className="text-gray-400">
              experience open source, transparent and efficient borrowing
            </p>
            <p className="text-gray-400">and lending on solana.</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button className="fixed bottom-0 left-0 flex h-48 px-5 shadow-xl rounded-3xl py-2 font-bold text-black border-t-2 border-white w-full items-end justify-center bg-gradient-to-t from-white via-white bg-[#54C0A0] lg:static lg:h-auto lg:w-auto lg:bg-none scale-110 cursor-pointer">
              Log-In
            </button>
            <button className="fixed bottom-0 left-0 flex h-48 px-5 shadow-xl rounded-3xl py-2 font-bold text-white border-t-2 border-white w-full items-end justify-center bg-gradient-to-t from-white via-white bg-black lg:static lg:h-auto lg:w-auto lg:bg-none scale-110 cursor-pointer">
              how it works
            </button>
          </div>
        </div>
      </div>

      <div className="mb-32 text-center lg:text-left flex justify-center lg:mb-0 items-center gap-6 scale-110 h-48">
        <svg
          width="150"
          height="48"
          viewBox="0 0 150 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="48" fill="url(#paint0_linear_1_352)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_352"
              x1="0"
              y1="24"
              x2="75"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>

        <img
          src="/img/image 1.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 2.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 3.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 4.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 5.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 6.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 7.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 8.png"
          alt="company logo"
          className="w-auto h-auto"
        />
        <img
          src="/img/image 9.png"
          alt="company logo"
          className="w-auto h-auto"
        />

        <svg
          width="150"
          height="48"
          viewBox="0 0 150 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="48" fill="url(#paint0_linear_1_353)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_353"
              x1="75"
              y1="24"
              x2="150"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </main>
  );
}
