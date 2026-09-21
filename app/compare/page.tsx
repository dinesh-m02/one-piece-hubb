"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRightLeft,
  Crown,
  Heart,
  Shield,
  Swords,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

type Character = {
  id: string;
  name: string;
  nickname: string;
  crew: string;
  role: string;
  bounty: number;
  devilFruit: string;
  fightingStyle: string;
  status: string;
  emoji: string;
  abilities: string[];
};

const characters: Character[] = [
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    nickname: "Straw Hat",
    crew: "Straw Hat Pirates",
    role: "Captain",
    bounty: 3000000000,
    devilFruit: "Hito Hito no Mi, Model: Nika",
    fightingStyle: "Haki + Devil Fruit",
    status: "Active",
    emoji: "👒",
    abilities: ["Gear 5", "Conqueror's Haki", "Advanced Armament"],
  },
  {
    id: "zoro",
    name: "Roronoa Zoro",
    nickname: "Pirate Hunter",
    crew: "Straw Hat Pirates",
    role: "Swordsman",
    bounty: 1111000000,
    devilFruit: "None",
    fightingStyle: "Three-Sword Style",
    status: "Active",
    emoji: "⚔️",
    abilities: ["King of Hell", "Armament Haki", "Conqueror's Haki"],
  },
  {
    id: "sanji",
    name: "Vinsmoke Sanji",
    nickname: "Black Leg",
    crew: "Straw Hat Pirates",
    role: "Cook",
    bounty: 1032000000,
    devilFruit: "None",
    fightingStyle: "Black Leg Style",
    status: "Active",
    emoji: "🍳",
    abilities: ["Ifrit Jambe", "Observation Haki", "Genetic Enhancements"],
  },
  {
    id: "shanks",
    name: "Shanks",
    nickname: "Red Hair",
    crew: "Red Hair Pirates",
    role: "Captain",
    bounty: 4048900000,
    devilFruit: "None",
    fightingStyle: "Haki + Sword",
    status: "Active",
    emoji: "🍷",
    abilities: ["Conqueror's Haki", "Advanced Haki", "Swordsmanship"],
  },
  {
    id: "mihawk",
    name: "Dracule Mihawk",
    nickname: "Hawk Eyes",
    crew: "Cross Guild",
    role: "Swordsman",
    bounty: 3590000000,
    devilFruit: "None",
    fightingStyle: "Black Blade",
    status: "Active",
    emoji: "🗡️",
    abilities: ["World's Greatest Swordsmanship", "Yoru", "Observation"],
  },
  {
    id: "law",
    name: "Trafalgar D. Water Law",
    nickname: "Surgeon of Death",
    crew: "Heart Pirates",
    role: "Captain / Doctor",
    bounty: 3000000000,
    devilFruit: "Ope Ope no Mi",
    fightingStyle: "Devil Fruit + Sword",
    status: "Active",
    emoji: "⚕️",
    abilities: ["ROOM", "KROOM", "Shambles"],
  },
  {
    id: "blackbeard",
    name: "Marshall D. Teach",
    nickname: "Blackbeard",
    crew: "Blackbeard Pirates",
    role: "Captain",
    bounty: 3996000000,
    devilFruit: "Yami Yami no Mi + Gura Gura no Mi",
    fightingStyle: "Devil Fruits",
    status: "Active",
    emoji: "🌑",
    abilities: ["Darkness", "Quakes", "Black Hole"],
  },
  {
    id: "ace",
    name: "Portgas D. Ace",
    nickname: "Fire Fist",
    crew: "Whitebeard Pirates",
    role: "2nd Division Commander",
    bounty: 550000000,
    devilFruit: "Mera Mera no Mi",
    fightingStyle: "Fire + Haki",
    status: "Deceased",
    emoji: "🔥",
    abilities: ["Fire Fist", "Flame Emperor", "Haki"],
  },
];

function formatBounty(value: number) {
  return value.toLocaleString("en-US") + " Berries";
}

export default function ComparePage() {
  const [firstId, setFirstId] = useState("luffy");
  const [secondId, setSecondId] = useState("zoro");

  const first = useMemo(
    () => characters.find((character) => character.id === firstId)!,
    [firstId]
  );

  const second = useMemo(
    () => characters.find((character) => character.id === secondId)!,
    [secondId]
  );

  function swapCharacters() {
    setFirstId(secondId);
    setSecondId(firstId);
  }

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 transition hover:text-yellow-400"
          >
            <ArrowLeft className="h-5 w-5" />
            Home
          </Link>

          <div className="flex items-center gap-2 font-black">
            <Swords className="h-5 w-5 text-yellow-400" />
            CHARACTER COMPARE
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-12">
        <div className="rounded-[2rem] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-white/5 to-transparent p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              <ArrowRightLeft className="h-4 w-4" />
              ONE PIECE BATTLE DATABASE
            </div>

            <h1 className="mt-5 text-4xl font-black md:text-6xl">
              Character{" "}
              <span className="text-yellow-400">
                Compare
              </span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Select two characters and compare their profiles,
              bounties, powers, crews and abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Selectors */}
      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="grid items-end gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* First */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <label className="mb-3 block text-sm font-bold text-white/50">
              CHARACTER 01
            </label>

            <select
              value={firstId}
              onChange={(event) => setFirstId(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#0a1119] px-4 py-4 font-bold outline-none focus:border-yellow-400/50"
            >
              {characters.map((character) => (
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>

          {/* Swap */}
          <button
            onClick={swapCharacters}
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 transition hover:scale-110 hover:bg-yellow-400 hover:text-black"
            title="Swap characters"
          >
            <ArrowRightLeft className="h-5 w-5" />
          </button>

          {/* Second */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <label className="mb-3 block text-sm font-bold text-white/50">
              CHARACTER 02
            </label>

            <select
              value={secondId}
              onChange={(event) => setSecondId(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#0a1119] px-4 py-4 font-bold outline-none focus:border-yellow-400/50"
            >
              {characters.map((character) => (
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Character Cards */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-5 md:grid-cols-2">
          {[first, second].map((character) => (
            <div
              key={character.id}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-yellow-400/10 text-5xl">
                  {character.emoji}
                </div>

                <div>
                  <p className="text-sm font-bold text-yellow-400">
                    {character.nickname}
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    {character.name}
                  </h2>

                  <p className="mt-1 text-white/40">
                    {character.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/20 p-4">
                  <p className="text-xs text-white/40">
                    CREW
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    {character.crew}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/20 p-4">
                  <p className="text-xs text-white/40">
                    STATUS
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    {character.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
          <div className="border-b border-white/10 p-6">
            <h2 className="text-2xl font-black">
              Battle Statistics
            </h2>

            <p className="mt-1 text-sm text-white/40">
              Side-by-side character information
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <div className="p-5 font-black text-white/40">
                  ATTRIBUTE
                </div>

                <div className="border-l border-white/10 p-5 text-center font-black">
                  {first.name}
                </div>

                <div className="border-l border-white/10 p-5 text-center font-black">
                  {second.name}
                </div>
              </div>

              {/* Bounty */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <div className="flex items-center gap-2 p-5 font-bold text-white/50">
                  <Trophy className="h-4 w-4 text-yellow-400" />
                  Bounty
                </div>

                <div className="border-l border-white/10 p-5 text-center font-black text-yellow-400">
                  {formatBounty(first.bounty)}
                </div>

                <div className="border-l border-white/10 p-5 text-center font-black text-yellow-400">
                  {formatBounty(second.bounty)}
                </div>
              </div>

              {/* Crew */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <div className="flex items-center gap-2 p-5 font-bold text-white/50">
                  <Users className="h-4 w-4 text-yellow-400" />
                  Crew
                </div>

                <div className="border-l border-white/10 p-5 text-center font-bold">
                  {first.crew}
                </div>

                <div className="border-l border-white/10 p-5 text-center font-bold">
                  {second.crew}
                </div>
              </div>

              {/* Role */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <div className="flex items-center gap-2 p-5 font-bold text-white/50">
                  <Crown className="h-4 w-4 text-yellow-400" />
                  Role
                </div>

                <div className="border-l border-white/10 p-5 text-center">
                  {first.role}
                </div>

                <div className="border-l border-white/10 p-5 text-center">
                  {second.role}
                </div>
              </div>

              {/* Devil Fruit */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <div className="flex items-center gap-2 p-5 font-bold text-white/50">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  Devil Fruit
                </div>

                <div className="border-l border-white/10 p-5 text-center">
                  {first.devilFruit}
                </div>

                <div className="border-l border-white/10 p-5 text-center">
                  {second.devilFruit}
                </div>
              </div>

              {/* Fighting Style */}
              <div className="grid grid-cols-3 border-b border-white/10">
                <div className="flex items-center gap-2 p-5 font-bold text-white/50">
                  <Swords className="h-4 w-4 text-yellow-400" />
                  Fighting Style
                </div>

                <div className="border-l border-white/10 p-5 text-center">
                  {first.fightingStyle}
                </div>

                <div className="border-l border-white/10 p-5 text-center">
                  {second.fightingStyle}
                </div>
              </div>

              {/* Status */}
              <div className="grid grid-cols-3">
                <div className="flex items-center gap-2 p-5 font-bold text-white/50">
                  <Heart className="h-4 w-4 text-yellow-400" />
                  Status
                </div>

                <div className="border-l border-white/10 p-5 text-center font-bold">
                  {first.status}
                </div>

                <div className="border-l border-white/10 p-5 text-center font-bold">
                  {second.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abilities */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <h2 className="mb-5 text-2xl font-black">
          Abilities
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {[first, second].map((character) => (
            <div
              key={character.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-black">
                {character.name}
              </h3>

              <div className="mt-5 space-y-3">
                {character.abilities.map((ability) => (
                  <div
                    key={ability}
                    className="flex items-center gap-3 rounded-xl bg-black/20 p-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="font-bold">
                      {ability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}