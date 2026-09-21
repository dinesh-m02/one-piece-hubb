"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

const characters = [
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    role: "Captain",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 3000000000,
    image: "/images/characters/luffy.jpg",
    description:
      "Captain of the Straw Hat Pirates and one of the Four Emperors.",
  },
  {
    id: "zoro",
    name: "Roronoa Zoro",
    role: "Swordsman",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 1111000000,
    image: "/images/characters/zoro.jpg",
    description:
      "The Straw Hat Pirates' combatant and a master of three-sword style.",
  },
  {
    id: "nami",
    name: "Nami",
    role: "Navigator",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 366000000,
    image: "/images/characters/nami.jpg",
    description:
      "The navigator of the Straw Hat Pirates with exceptional weather knowledge.",
  },
  {
    id: "sanji",
    name: "Vinsmoke Sanji",
    role: "Cook",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 1032000000,
    image: "/images/characters/sanji.jpg",
    description:
      "The Straw Hat Pirates' cook and a powerful martial artist.",
  },
  {
    id: "usopp",
    name: "Usopp",
    role: "Sniper",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 500000000,
    image: "/images/characters/usopp.jpg",
    description:
      "The Straw Hat Pirates' sniper and a talented inventor.",
  },
  {
    id: "robin",
    name: "Nico Robin",
    role: "Archaeologist",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 930000000,
    image: "/images/characters/robin.jpg",
    description:
      "An archaeologist searching for the true history of the world.",
  },
  {
    id: "chopper",
    name: "Tony Tony Chopper",
    role: "Doctor",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 1000,
    image: "/images/characters/chopper.jpg",
    description:
      "The doctor of the Straw Hat Pirates and a reindeer who ate a Devil Fruit.",
  },
  {
    id: "franky",
    name: "Franky",
    role: "Shipwright",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 394000000,
    image: "/images/characters/franky.jpg",
    description:
      "The Straw Hat Pirates' shipwright and creator of the Thousand Sunny.",
  },
  {
    id: "brook",
    name: "Brook",
    role: "Musician",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 383000000,
    image: "/images/characters/brook.jpg",
    description:
      "The Straw Hat Pirates' musician and a swordsman with the power of the Revive-Revive Fruit.",
  },
  {
    id: "jinbe",
    name: "Jinbe",
    role: "Helmsman",
    category: "Pirates",
    crew: "Straw Hat Pirates",
    bounty: 1100000000,
    image: "/images/characters/jinbe.jpg",
    description:
      "A former Warlord of the Sea and the Straw Hat Pirates' helmsman.",
  },
  {
    id: "ace",
    name: "Portgas D. Ace",
    role: "Commander",
    category: "Pirates",
    crew: "Whitebeard Pirates",
    bounty: 550000000,
    image: "/images/characters/ace.jpg",
    description:
      "The son of Gol D. Roger and former second division commander of the Whitebeard Pirates.",
  },
  {
    id: "shanks",
    name: "Red-Haired Shanks",
    role: "Emperor",
    category: "Emperors",
    crew: "Red Hair Pirates",
    bounty: 4048900000,
    image: "/images/characters/shanks.jpg",
    description:
      "Captain of the Red Hair Pirates and one of the Four Emperors.",
  },
  {
    id: "law",
    name: "Trafalgar D. Water Law",
    role: "Captain",
    category: "Pirates",
    crew: "Heart Pirates",
    bounty: 3000000000,
    image: "/images/characters/law.jpg",
    description:
      "Captain of the Heart Pirates and a skilled user of the Ope Ope no Mi.",
  },
  {
    id: "mihawk",
    name: "Dracule Mihawk",
    role: "Swordsman",
    category: "Pirates",
    crew: "Cross Guild",
    bounty: 3590000000,
    image: "/images/characters/mihawk.jpg",
    description:
      "Known as the world's strongest swordsman.",
  },
  {
    id: "blackbeard",
    name: "Marshall D. Teach",
    role: "Emperor",
    category: "Emperors",
    crew: "Blackbeard Pirates",
    bounty: 3996000000,
    image: "/images/characters/blackbeard.jpg",
    description:
      "Captain of the Blackbeard Pirates and one of the Four Emperors.",
  },
  {
    id: "koby",
    name: "Koby",
    role: "Marine",
    category: "Marines",
    crew: "Marines",
    bounty: 0,
    image: "/images/characters/koby.jpg",
    description:
      "A Marine officer who began his journey alongside Luffy.",
  },
  {
    id: "smoker",
    name: "Smoker",
    role: "Vice Admiral",
    category: "Marines",
    crew: "Marines",
    bounty: 0,
    image: "/images/characters/smoker.jpg",
    description:
      "A Marine officer who has repeatedly pursued the Straw Hat Pirates.",
  },
];

const filters = [
  "All",
  "Pirates",
  "Marines",
  "Emperors",
];

export default function CharactersPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesSearch =
        character.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        character.role
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        character.crew
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ||
        character.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-gray-300 transition hover:text-[#f5c451]"
          >
            <ArrowLeft size={19} />

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                ONE PIECE
              </p>
              <p className="font-black">HUB</p>
            </div>
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users size={17} />
            Characters
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f5c45118,transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f5c451]">
            One Piece Database
          </p>

          <h1 className="mt-3 text-5xl font-black sm:text-7xl">
            Characters
          </h1>

          <p className="mt-5 max-w-2xl text-gray-500">
            Explore pirates, Marines, Emperors and legendary
            characters from the world of One Piece.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xl">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search characters..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-5 text-white outline-none placeholder:text-gray-600 focus:border-[#f5c451]/40"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeFilter === filter
                    ? "bg-[#f5c451] text-black"
                    : "border border-white/10 bg-white/5 text-gray-400 hover:border-[#f5c451]/30 hover:text-[#f5c451]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-bold text-gray-300">
              {filteredCharacters.length}
            </span>{" "}
            characters
          </p>
        </div>

        {filteredCharacters.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-16 text-center">
            <Users
              size={40}
              className="mx-auto mb-4 text-gray-700"
            />

            <h2 className="text-xl font-black">
              No characters found
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Try another character name or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCharacters.map((character) => (
              <Link
                key={character.id}
                href={`/characters/${character.id}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#f5c451]/30"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-bold text-[#f5c451] backdrop-blur-md">
                    {character.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      {character.role}
                    </p>

                    <h2 className="mt-1 text-xl font-black">
                      {character.name}
                    </h2>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Crew
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-300">
                    {character.crew}
                  </p>

                  {character.bounty > 0 && (
                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-gray-600">
                        Bounty
                      </span>

                      <span className="font-black text-[#f5c451]">
                        {character.bounty.toLocaleString(
                          "en-US"
                        )}
                        ฿
                      </span>
                    </div>
                  )}

                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
                    {character.description}
                  </p>

                  <div className="mt-5 text-sm font-bold text-[#f5c451]">
                    View Profile →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}