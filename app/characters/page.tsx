"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import FavoriteButton from "@/components/FavoriteButton";
import { getFavorites } from "@/lib/favorites";

type Character = {
  id: string;
  name: string;
  nickname: string;
  role: string;
  crew: string;
  bounty: string;
  category: string;
  icon: string;
  description: string;
};

const characters: Character[] = [
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    nickname: "Straw Hat Luffy",
    role: "Captain",
    crew: "Straw Hat Pirates",
    bounty: "3,000,000,000 B",
    category: "Pirates",
    icon: "👒",
    description:
      "Captain of the Straw Hat Pirates who dreams of becoming the Pirate King.",
  },
  {
    id: "zoro",
    name: "Roronoa Zoro",
    nickname: "Pirate Hunter",
    role: "Swordsman",
    crew: "Straw Hat Pirates",
    bounty: "1,111,000,000 B",
    category: "Pirates",
    icon: "⚔️",
    description:
      "A powerful swordsman who aims to become the world's greatest swordsman.",
  },
  {
    id: "nami",
    name: "Nami",
    nickname: "Cat Burglar",
    role: "Navigator",
    crew: "Straw Hat Pirates",
    bounty: "366,000,000 B",
    category: "Pirates",
    icon: "🧭",
    description:
      "The Straw Hat Pirates' navigator with extraordinary cartography skills.",
  },
  {
    id: "sanji",
    name: "Vinsmoke Sanji",
    nickname: "Black Leg",
    role: "Cook",
    crew: "Straw Hat Pirates",
    bounty: "1,032,000,000 B",
    category: "Pirates",
    icon: "🍳",
    description:
      "The Straw Hat Pirates' cook and a powerful martial artist who fights with his legs.",
  },
  {
    id: "usopp",
    name: "Usopp",
    nickname: "God Usopp",
    role: "Sniper",
    crew: "Straw Hat Pirates",
    bounty: "500,000,000 B",
    category: "Pirates",
    icon: "🎯",
    description:
      "The Straw Hat Pirates' sniper and a creative long-range fighter.",
  },
  {
    id: "robin",
    name: "Nico Robin",
    nickname: "Devil Child",
    role: "Archaeologist",
    crew: "Straw Hat Pirates",
    bounty: "930,000,000 B",
    category: "Pirates",
    icon: "🌸",
    description:
      "An archaeologist searching for the true history of the world.",
  },
  {
    id: "chopper",
    name: "Tony Tony Chopper",
    nickname: "Cotton Candy Lover",
    role: "Doctor",
    crew: "Straw Hat Pirates",
    bounty: "1,000 B",
    category: "Pirates",
    icon: "🦌",
    description:
      "The Straw Hat Pirates' doctor and a reindeer who ate a Devil Fruit.",
  },
  {
    id: "franky",
    name: "Franky",
    nickname: "Iron Man",
    role: "Shipwright",
    crew: "Straw Hat Pirates",
    bounty: "394,000,000 B",
    category: "Pirates",
    icon: "🤖",
    description:
      "The Straw Hat Pirates' shipwright and creator of the Thousand Sunny.",
  },
  {
    id: "brook",
    name: "Brook",
    nickname: "Soul King",
    role: "Musician",
    crew: "Straw Hat Pirates",
    bounty: "383,000,000 B",
    category: "Pirates",
    icon: "💀",
    description:
      "A living skeleton musician and swordsman who joined the Straw Hat Pirates.",
  },
  {
    id: "jinbe",
    name: "Jinbe",
    nickname: "Knight of the Sea",
    role: "Helmsman",
    crew: "Straw Hat Pirates",
    bounty: "1,100,000,000 B",
    category: "Pirates",
    icon: "🌊",
    description:
      "A powerful Fish-Man karate master and helmsman of the Straw Hat Pirates.",
  },
  {
    id: "ace",
    name: "Portgas D. Ace",
    nickname: "Fire Fist",
    role: "Commander",
    crew: "Whitebeard Pirates",
    bounty: "550,000,000 B",
    category: "Pirates",
    icon: "🔥",
    description:
      "Luffy's sworn brother and former commander of the Whitebeard Pirates.",
  },
  {
    id: "shanks",
    name: "Shanks",
    nickname: "Red-Haired",
    role: "Captain",
    crew: "Red Hair Pirates",
    bounty: "4,048,900,000 B",
    category: "Emperors",
    icon: "🍷",
    description:
      "Captain of the Red Hair Pirates and one of the Four Emperors.",
  },
  {
    id: "law",
    name: "Trafalgar D. Water Law",
    nickname: "Surgeon of Death",
    role: "Captain",
    crew: "Heart Pirates",
    bounty: "3,000,000,000 B",
    category: "Pirates",
    icon: "⚕️",
    description:
      "Captain of the Heart Pirates and a skilled doctor who possesses the Ope Ope no Mi.",
  },
  {
    id: "mihawk",
    name: "Dracule Mihawk",
    nickname: "Hawk-Eye",
    role: "Swordsman",
    crew: "Cross Guild",
    bounty: "3,590,000,000 B",
    category: "Emperors",
    icon: "🗡️",
    description:
      "The world's strongest swordsman and one of the most formidable fighters.",
  },
  {
    id: "blackbeard",
    name: "Marshall D. Teach",
    nickname: "Blackbeard",
    role: "Captain",
    crew: "Blackbeard Pirates",
    bounty: "3,996,000,000 B",
    category: "Emperors",
    icon: "🏴‍☠️",
    description:
      "Captain of the Blackbeard Pirates and one of the Four Emperors.",
  },
  {
    id: "koby",
    name: "Koby",
    nickname: "Marine Hero",
    role: "Marine",
    crew: "Marines",
    bounty: "N/A",
    category: "Marines",
    icon: "⚓",
    description:
      "A Marine officer whose journey began after meeting Monkey D. Luffy.",
  },
  {
    id: "smoker",
    name: "Smoker",
    nickname: "White Hunter",
    role: "Vice Admiral",
    crew: "Marines",
    bounty: "N/A",
    category: "Marines",
    icon: "🚬",
    description:
      "A Marine officer who has repeatedly pursued the Straw Hat Pirates.",
  },
];

const categories = [
  "All",
  "Pirates",
  "Marines",
  "Emperors",
  "Favorites",
];

export default function CharactersPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      const saved = getFavorites();

      setFavorites(
        saved
          .filter((item) => item.type === "Character")
          .map((item) => item.id)
      );
    };

    loadFavorites();

    window.addEventListener(
      "one-piece-favorites-updated",
      loadFavorites
    );

    return () => {
      window.removeEventListener(
        "one-piece-favorites-updated",
        loadFavorites
      );
    };
  }, []);

  const filteredCharacters = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return characters.filter((character) => {
      const matchesCategory =
        category === "All" ||
        (category === "Favorites"
          ? favorites.includes(character.id)
          : character.category === category);

      const matchesSearch =
        !searchText ||
        character.name.toLowerCase().includes(searchText) ||
        character.nickname.toLowerCase().includes(searchText) ||
        character.role.toLowerCase().includes(searchText) ||
        character.crew.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, category, favorites]);

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
      <section className="relative overflow-hidden px-6 pb-10 pt-16">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#f5c451]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#f5c451]/30 bg-[#f5c451]/10 text-3xl">
              👒
            </div>

            <p className="mt-6 text-xs font-black tracking-[0.4em] text-[#f5c451]">
              EXPLORE THE WORLD
            </p>

            <h1 className="mt-3 text-5xl font-black sm:text-7xl">
              CHARACTERS
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Discover pirates, Marines, emperors, swordsmen
              and legendary characters from the world of One Piece.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative mx-auto mt-10 max-w-3xl">
            <Search
              size={21}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search Luffy, Zoro, Shanks..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-5 pl-14 pr-14 text-sm outline-none placeholder:text-white/20 transition focus:border-[#f5c451]/50"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white"
              >
                <X size={19} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
                  category === item
                    ? "border-[#f5c451] bg-[#f5c451] text-black"
                    : "border-white/10 bg-white/[0.03] text-white/40 hover:border-[#f5c451]/50 hover:text-[#f5c451]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Characters
            </p>

            <p className="mt-2 text-3xl font-black">
              {filteredCharacters.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Pirates
            </p>

            <p className="mt-2 text-3xl font-black">
              {
                characters.filter(
                  (character) => character.category === "Pirates"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Marines
            </p>

            <p className="mt-2 text-3xl font-black">
              {
                characters.filter(
                  (character) => character.category === "Marines"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Favorites
            </p>

            <p className="mt-2 text-3xl font-black text-[#f5c451]">
              {favorites.length}
            </p>
          </div>
        </div>
      </section>

      {/* CHARACTER GRID */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          {filteredCharacters.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-24 text-center">
              <div className="text-6xl">🌊</div>

              <h2 className="mt-5 text-2xl font-black">
                No Characters Found
              </h2>

              <p className="mt-2 text-sm text-white/35">
                Try another character name or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCharacters.map((character) => (
                <article
                  key={character.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-2 hover:border-[#f5c451]/40 hover:bg-white/[0.055]"
                >
                  {/* TOP AREA */}
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[#111923] via-[#080d13] to-black">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f5c451]/10 blur-3xl" />

                    <div className="relative text-8xl transition duration-500 group-hover:scale-110">
                      {character.icon}
                    </div>

                    {/* CATEGORY */}
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#f5c451] backdrop-blur-md">
                        {character.category}
                      </span>
                    </div>

                    {/* SHARED FAVORITE BUTTON */}
                    <div className="absolute right-4 top-4">
                      <FavoriteButton
                        item={{
                          id: character.id,
                          title: character.name,
                          type: "Character",
                          emoji: character.icon,
                          description: character.description,
                          href: `/characters/${character.id}`,
                        }}
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5c451]/70">
                      {character.nickname}
                    </p>

                    <h2 className="mt-2 text-xl font-black leading-tight">
                      {character.name}
                    </h2>

                    <p className="mt-3 min-h-[48px] text-xs leading-5 text-white/35">
                      {character.description}
                    </p>

                    {/* INFO */}
                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">
                          Role
                        </span>

                        <span className="text-xs font-bold">
                          {character.role}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">
                          Crew
                        </span>

                        <span className="max-w-[160px] truncate text-right text-xs font-bold">
                          {character.crew}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">
                          Bounty
                        </span>

                        <span className="text-xs font-black text-[#f5c451]">
                          {character.bounty}
                        </span>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <Link
                      href={`/characters/${character.id}`}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-xs font-black uppercase tracking-wider transition hover:border-[#f5c451]/50 hover:bg-[#f5c451]/10 hover:text-[#f5c451]"
                    >
                      View Profile
                      <ArrowLeft
                        size={14}
                        className="rotate-180"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
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