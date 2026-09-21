"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Castle,
  CircleHelp,
  Compass,
  Crown,
  Film,
  Flame,
  Gem,
  Map,
  Music,
  Newspaper,
  Search,
  Ship,
  Swords,
  Trophy,
  Users,
} from "lucide-react";

const exploreItems = [
  {
    title: "Characters",
    description:
      "Explore pirates, Marines, emperors, swordsmen and legendary characters.",
    href: "/characters",
    icon: Users,
    emoji: "👒",
  },
  {
    title: "Devil Fruits",
    description:
      "Discover mysterious Devil Fruits, their types, users and abilities.",
    href: "/devil-fruits",
    icon: Gem,
    emoji: "🍈",
  },
  {
    title: "Bounties",
    description:
      "Explore famous wanted posters and major pirate bounty records.",
    href: "/bounties",
    icon: Trophy,
    emoji: "💰",
  },
  {
    title: "Crews",
    description:
      "Discover famous pirate crews, commanders, captains and members.",
    href: "/crews",
    icon: Ship,
    emoji: "🏴‍☠️",
  },
  {
    title: "Grand Line Map",
    description:
      "Explore important islands, seas and locations across the One Piece world.",
    href: "/map",
    icon: Map,
    emoji: "🗺️",
  },
  {
    title: "News",
    description:
      "Browse One Piece themed news, updates, events and featured stories.",
    href: "/news",
    icon: Newspaper,
    emoji: "📰",
  },
  {
    title: "Episodes & Arcs",
    description:
      "Explore episodes, major story arcs and memorable adventures.",
    href: "/episodes",
    icon: Film,
    emoji: "🎬",
  },
  {
    title: "Music Hub",
    description:
      "Explore a fan-made music hub inspired by the sounds of the Grand Line.",
    href: "/music",
    icon: Music,
    emoji: "🎵",
  },
  {
    title: "One Piece Quiz",
    description:
      "Test your One Piece knowledge with an interactive quiz.",
    href: "/quiz",
    icon: CircleHelp,
    emoji: "🧠",
  },
  {
    title: "Character Compare",
    description:
      "Compare characters side by side using stats and abilities.",
    href: "/compare",
    icon: Swords,
    emoji: "⚔️",
  },
  {
    title: "Global Search",
    description:
      "Search characters, Devil Fruits, crews, news, episodes and more.",
    href: "/search",
    icon: Search,
    emoji: "🔎",
  },
  {
    title: "Favorites",
    description:
      "Access the items you have saved while exploring One Piece Hub.",
    href: "/favorites",
    icon: Crown,
    emoji: "❤️",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f5c451]/50 bg-black text-xl">
              ☠
            </div>

            <div>
              <p className="text-sm font-black tracking-[0.2em]">
                ONE PIECE
              </p>

              <p className="text-[10px] font-bold tracking-[0.4em] text-[#f5c451]">
                HUB
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/40 transition hover:text-[#f5c451]"
          >
            <ArrowLeft size={17} />
            Home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-14 pt-16">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#f5c451]/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#f5c451]/30 bg-[#f5c451]/10">
            <Compass
              size={38}
              className="text-[#f5c451]"
            />
          </div>

          <p className="mt-7 text-xs font-black tracking-[0.45em] text-[#f5c451]">
            BEGIN YOUR JOURNEY
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-7xl">
            EXPLORE HUB
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Your gateway to the world of One Piece. Discover
            characters, Devil Fruits, pirate crews, islands,
            episodes, stories and more.
          </p>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-[#f5c451]">
              <Compass size={22} />
            </div>

            <h2 className="mt-5 text-lg font-black">
              Explore
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Navigate through the major sections of the One
              Piece Hub.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-[#f5c451]">
              <BookOpen size={22} />
            </div>

            <h2 className="mt-5 text-lg font-black">
              Discover
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Learn about characters, powers, crews, places and
              adventures.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-[#f5c451]">
              <Flame size={22} />
            </div>

            <h2 className="mt-5 text-lg font-black">
              Experience
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Take quizzes, compare characters and explore the
              Grand Line.
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORE GRID */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
              ONE PIECE DATABASE
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Choose Your Destination
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/35">
              Select any section below and continue your journey
              through One Piece Hub.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#f5c451]/40 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#f5c451]/10 blur-3xl transition group-hover:bg-[#f5c451]/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/10 text-[#f5c451]">
                        <Icon size={22} />
                      </div>

                      <span className="text-3xl transition duration-300 group-hover:scale-110">
                        {item.emoji}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 min-h-[60px] text-sm leading-6 text-white/35">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#f5c451]">
                      Explore
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#f5c451]/20 bg-[#f5c451]/[0.04] p-8 text-center sm:p-12">
          <div className="text-5xl">🏴‍☠️</div>

          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            The Grand Line Awaits
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/40">
            Choose your destination, discover something new and
            continue exploring the world of One Piece.
          </p>

          <Link
            href="/characters"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#f5c451] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105"
          >
            Start Exploring
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-black tracking-[0.2em]">
            ONE PIECE{" "}
            <span className="text-[#f5c451]">
              HUB
            </span>
          </p>

          <p className="mt-3 text-xs text-white/25">
            Fan-made project • Explore the Grand Line
          </p>

          <Link
            href="/"
            className="mt-6 inline-block text-xs font-bold text-white/40 transition hover:text-[#f5c451]"
          >
            ← Return to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}