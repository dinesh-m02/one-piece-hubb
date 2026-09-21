"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Compass,
  Database,
  Heart,
  Map,
  Search,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Character Explorer",
    description:
      "Discover pirates, Marines, emperors, swordsmen and other memorable characters.",
    icon: Users,
    href: "/characters",
  },
  {
    title: "Devil Fruit Database",
    description:
      "Explore Devil Fruit types, users, powers and abilities.",
    icon: Sparkles,
    href: "/devil-fruits",
  },
  {
    title: "Bounty Database",
    description:
      "Explore famous pirate bounty information and wanted records.",
    icon: Database,
    href: "/bounties",
  },
  {
    title: "Crew Explorer",
    description:
      "Discover pirate crews, commanders, captains and members.",
    icon: Shield,
    href: "/crews",
  },
  {
    title: "World Map",
    description:
      "Explore important islands and locations across the One Piece world.",
    icon: Map,
    href: "/map",
  },
  {
    title: "Episodes & Arcs",
    description:
      "Browse episodes and major story arcs from the series.",
    icon: BookOpen,
    href: "/episodes",
  },
];

export default function AboutPage() {
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
      <section className="relative overflow-hidden px-6 pb-20 pt-16">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#f5c451]/10 blur-[160px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#f5c451]/30 bg-[#f5c451]/10">
            <Compass
              size={38}
              className="text-[#f5c451]"
            />
          </div>

          <p className="mt-7 text-xs font-black tracking-[0.45em] text-[#f5c451]">
            WELCOME ABOARD
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-7xl">
            ABOUT HUB
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/40 sm:text-base">
            One Piece Hub is a fan-made web experience created
            to bring different parts of the One Piece world
            together in one interactive place.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-[#f5c451]">
              <Heart size={22} />
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
              THE IDEA
            </p>

            <h2 className="mt-3 text-3xl font-black">
              What is One Piece Hub?
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40">
              One Piece Hub is designed as a central place
              where fans can explore information and interactive
              features related to the One Piece universe.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40">
              Instead of visiting different sections separately,
              the Hub brings characters, Devil Fruits, crews,
              bounties, locations, episodes and other features
              together in one website.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-[#f5c451]">
              <Zap size={22} />
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
              THE EXPERIENCE
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Built for Exploration
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40">
              The website is designed around exploration,
              discovery and interactive navigation.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40">
              Search for characters, explore powers, compare
              characters, browse locations and discover different
              parts of the One Piece world.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
              HUB FEATURES
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Everything in One Place
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/35">
              Explore the main sections available inside One
              Piece Hub.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c451]/40 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/10 text-[#f5c451]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/35">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#f5c451]">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-[#f5c451]">
                <Database size={22} />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
                  TECHNOLOGY
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  Built as a Modern Web Project
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Lucide Icons",
                "Framer Motion",
                "Responsive UI",
                "Local Storage",
              ].map((technology) => (
                <div
                  key={technology}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm font-bold text-white/60"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT PURPOSE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#f5c451]/20 bg-[#f5c451]/[0.04] p-8 text-center sm:p-12">
          <div className="text-5xl">🏴‍☠️</div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.35em] text-[#f5c451]">
            PROJECT PURPOSE
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            One World. One Hub.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40">
            The goal of One Piece Hub is to create an engaging
            fan-made platform where users can explore, discover
            and interact with different sections of the One
            Piece universe.
          </p>

          <Link
            href="/explore"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#f5c451] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105"
          >
            Explore Hub
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center">
          <p className="text-xs leading-6 text-white/30">
            One Piece Hub is a fan-made project created for
            entertainment and educational purposes. It is not
            affiliated with or endorsed by the official One
            Piece creators, publishers or rights holders.
          </p>
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
            className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white/40 transition hover:text-[#f5c451]"
          >
            <ArrowLeft size={14} />
            Return to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}