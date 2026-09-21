"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Crown,
  Film,
  Flame,
  Gem,
  Globe,
  Map,
  Music,
  Search,
  Shield,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from "lucide-react";

const sections = [
  {
    title: "Characters",
    description: "Explore pirates, Marines, Emperors and legendary characters.",
    icon: Users,
    emoji: "👒",
    href: "/characters",
  },
  {
    title: "Devil Fruits",
    description: "Discover Paramecia, Zoan, Mythical Zoan and Logia powers.",
    icon: Gem,
    emoji: "🍎",
    href: "/devil-fruits",
  },
  {
    title: "Bounties",
    description: "Explore famous wanted posters and legendary bounty records.",
    icon: Trophy,
    emoji: "💰",
    href: "/bounties",
  },
  {
    title: "Crews",
    description: "Explore legendary pirate crews and their commanders.",
    icon: Shield,
    emoji: "🏴‍☠️",
    href: "/crews",
  },
  {
    title: "World Map",
    description: "Travel across the Grand Line and discover important locations.",
    icon: Map,
    emoji: "🗺️",
    href: "/map",
  },
  {
    title: "Episodes",
    description: "Explore One Piece episodes, arcs and major story moments.",
    icon: Film,
    emoji: "🎬",
    href: "/episodes",
  },
  {
    title: "News",
    description: "Browse One Piece related articles and updates.",
    icon: BookOpen,
    emoji: "📰",
    href: "/news",
  },
  {
    title: "Music",
    description: "Enter the One Piece Music Hub and explore the soundtrack world.",
    icon: Music,
    emoji: "🎵",
    href: "/music",
  },
  {
    title: "Quiz",
    description: "Test your One Piece knowledge with interactive questions.",
    icon: Flame,
    emoji: "🧠",
    href: "/quiz",
  },
  {
    title: "Character Compare",
    description: "Compare characters using abilities and profile information.",
    icon: Swords,
    emoji: "⚔️",
    href: "/compare",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* TOP NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5c451]/30 bg-[#f5c451]/10">
              <Crown className="text-[#f5c451]" size={22} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                ONE PIECE
              </p>
              <h1 className="text-lg font-black">
                HUB
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
            >
              <Search size={18} />
            </Link>

            <Link
              href="/explore"
              className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-gray-300 transition hover:border-[#f5c451]/40 hover:text-[#f5c451] sm:block"
            >
              Explore Hub
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f5c45118,transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5c451]/20 bg-[#f5c451]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f5c451]">
                <Sparkles size={14} />
                The Grand Line Starts Here
              </div>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Welcome to
                <span className="block text-[#f5c451]">
                  One Piece Hub
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                Your fan-made interactive encyclopedia for exploring
                characters, Devil Fruits, crews, bounties, episodes,
                locations, music and more from the world of One Piece.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/explore"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#f5c451] px-7 py-4 font-black text-black transition hover:bg-[#ffd86d]"
                >
                  Start Exploring
                  <ArrowRight
                    size={19}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/characters"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
                >
                  <Users size={18} />
                  Characters
                </Link>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#f5c451]/5 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-3xl border border-[#f5c451]/20 bg-gradient-to-br from-[#f5c451]/10 to-transparent p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl">🏴‍☠️</span>

                    <div className="rounded-full border border-[#f5c451]/20 bg-[#f5c451]/10 px-3 py-1 text-xs font-bold text-[#f5c451]">
                      HUB
                    </div>
                  </div>

                  <p className="mt-12 text-xs uppercase tracking-[0.3em] text-gray-500">
                    Explore the World
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    Beyond the Grand Line
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    Discover characters, powers, crews, islands,
                    stories and legendary battles.
                  </p>

                  <Link
                    href="/map"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f5c451]"
                  >
                    Open World Map
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon="👒"
            value="17+"
            label="Characters"
          />

          <StatCard
            icon="🍎"
            value="16+"
            label="Devil Fruits"
          />

          <StatCard
            icon="🏴‍☠️"
            value="12+"
            label="Crews"
          />

          <StatCard
            icon="🎬"
            value="20+"
            label="Episodes & Arcs"
          />
        </div>
      </section>

      {/* EXPLORE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5c451]">
              Explore
            </p>

            <h3 className="mt-2 text-3xl font-black sm:text-4xl">
              Enter the World of One Piece
            </h3>
          </div>

          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-[#f5c451]"
          >
            View Everything
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.title}
                href={section.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f5c451]/30 hover:bg-[#f5c451]/[0.035]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-2xl">
                    {section.emoji}
                  </div>

                  <Icon
                    size={19}
                    className="text-gray-600 transition group-hover:text-[#f5c451]"
                  />
                </div>

                <h4 className="mt-6 text-xl font-black">
                  {section.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {section.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#f5c451]">
                  Open
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* QUICK SEARCH */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-[2rem] border border-[#f5c451]/15 bg-[#f5c451]/[0.035] p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/10">
                <Search
                  size={22}
                  className="text-[#f5c451]"
                />
              </div>

              <h3 className="text-3xl font-black">
                Looking for something?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                Search across characters, Devil Fruits, bounties,
                crews, episodes and One Piece news from one place.
              </p>
            </div>

            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f5c451] px-7 py-4 font-black text-black transition hover:bg-[#ffd86d]"
            >
              Open Global Search
              <Search size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 One Piece Hub — Fan-made project.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/about"
              className="transition hover:text-[#f5c451]"
            >
              About
            </Link>

            <Link
              href="/explore"
              className="transition hover:text-[#f5c451]"
            >
              Explore
            </Link>

            <Link
              href="/search"
              className="transition hover:text-[#f5c451]"
            >
              Search
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-xl">
          {icon}
        </div>

        <div>
          <p className="text-2xl font-black text-white">
            {value}
          </p>

          <p className="text-xs uppercase tracking-wider text-gray-600">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}