"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  Home,
  Search,
  Ship,
} from "lucide-react";

export default function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02070d] px-6 text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c451]/5 blur-[140px]" />

      {/* DECORATIVE CIRCLES */}
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full border border-[#f5c451]/5" />

      <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full border border-[#f5c451]/5" />

      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* LOGO */}
        <Link
          href="/"
          className="mx-auto mb-12 flex w-fit items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5c451]/40 bg-[#f5c451]/10">
            <Ship
              size={23}
              className="text-[#f5c451]"
            />
          </div>

          <div className="text-left">
            <p className="text-sm font-black tracking-[0.2em]">
              ONE PIECE
            </p>

            <p className="text-[10px] font-bold tracking-[0.4em] text-[#f5c451]">
              HUB
            </p>
          </div>
        </Link>

        {/* 404 */}
        <div className="relative">
          <p className="select-none text-[9rem] font-black leading-none text-[#f5c451]/10 sm:text-[13rem]">
            404
          </p>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#f5c451]/20 bg-black/50 backdrop-blur-xl sm:h-28 sm:w-28">
              <Compass
                size={48}
                className="text-[#f5c451]"
              />
            </div>
          </div>
        </div>

        {/* TITLE */}
        <p className="mt-4 text-xs font-black uppercase tracking-[0.4em] text-[#f5c451]">
          Lost at Sea
        </p>

        <h1 className="mt-4 text-4xl font-black sm:text-6xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          Looks like this route has disappeared somewhere beyond
          the Grand Line. The page you're looking for doesn't exist
          or may have been moved.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5c451] px-6 py-3.5 text-sm font-black text-black transition hover:bg-[#ffd86d]"
          >
            <Home size={17} />
            Back to Home
          </Link>

          <Link
            href="/explore"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-gray-300 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
          >
            <Compass size={17} />
            Explore Hub
          </Link>

          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-gray-300 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
          >
            <Search size={17} />
            Search
          </Link>
        </div>

        {/* BACK */}
        <button
          type="button"
          onClick={goBack}
          className="mt-8 inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#f5c451]"
        >
          <ArrowLeft size={15} />
          Go back
        </button>

        {/* FOOTER */}
        <p className="mt-16 text-xs text-gray-700">
          ONE PIECE HUB • Fan-made project
        </p>
      </div>
    </main>
  );
}