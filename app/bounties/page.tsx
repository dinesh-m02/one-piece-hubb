"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Crown,
  Search,
  Skull,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

type BountyCategory = "Emperors" | "Pirates" | "Legends";

type Bounty = {
  id: string;
  name: string;
  title: string;
  bounty: number;
  category: BountyCategory;
  status: string;
  emoji: string;
  color: string;
};

const bountyData: Bounty[] = [
  {
    id: "roger",
    name: "Gol D. Roger",
    title: "The Pirate King",
    bounty: 5564800000,
    category: "Legends",
    status: "Deceased",
    emoji: "👑",
    color: "from-yellow-500/30 to-orange-500/10",
  },
  {
    id: "whitebeard",
    name: "Edward Newgate",
    title: "The Strongest Man",
    bounty: 5046000000,
    category: "Legends",
    status: "Deceased",
    emoji: "⚔️",
    color: "from-blue-500/30 to-cyan-500/10",
  },
  {
    id: "kaido",
    name: "Kaido",
    title: "King of the Beasts",
    bounty: 4611100000,
    category: "Emperors",
    status: "Defeated",
    emoji: "🐉",
    color: "from-purple-500/30 to-red-500/10",
  },
  {
    id: "big-mom",
    name: "Charlotte Linlin",
    title: "Big Mom",
    bounty: 4388000000,
    category: "Emperors",
    status: "Defeated",
    emoji: "🍰",
    color: "from-pink-500/30 to-orange-500/10",
  },
  {
    id: "shanks",
    name: "Shanks",
    title: "The Red-Haired Emperor",
    bounty: 4048900000,
    category: "Emperors",
    status: "Active",
    emoji: "🍷",
    color: "from-red-500/30 to-black/20",
  },
  {
    id: "blackbeard",
    name: "Marshall D. Teach",
    title: "The Dark Emperor",
    bounty: 3996000000,
    category: "Emperors",
    status: "Active",
    emoji: "🌑",
    color: "from-purple-500/30 to-black/30",
  },
  {
    id: "mihawk",
    name: "Dracule Mihawk",
    title: "The World's Strongest Swordsman",
    bounty: 3590000000,
    category: "Pirates",
    status: "Active",
    emoji: "🗡️",
    color: "from-red-500/20 to-black/30",
  },
  {
    id: "buggy",
    name: "Buggy",
    title: "The Genius Jester",
    bounty: 3189000000,
    category: "Emperors",
    status: "Active",
    emoji: "🤡",
    color: "from-blue-500/30 to-red-500/20",
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    title: "Straw Hat Emperor",
    bounty: 3000000000,
    category: "Emperors",
    status: "Active",
    emoji: "👒",
    color: "from-yellow-500/30 to-red-500/10",
  },
  {
    id: "law",
    name: "Trafalgar D. Water Law",
    title: "Surgeon of Death",
    bounty: 3000000000,
    category: "Pirates",
    status: "Active",
    emoji: "⚕️",
    color: "from-yellow-500/20 to-black/20",
  },
  {
    id: "kid",
    name: "Eustass Kid",
    title: "Captain of the Kid Pirates",
    bounty: 3000000000,
    category: "Pirates",
    status: "Defeated",
    emoji: "⚡",
    color: "from-red-500/30 to-purple-500/10",
  },
  {
    id: "king",
    name: "King",
    title: "The Wildfire",
    bounty: 1390000000,
    category: "Pirates",
    status: "Defeated",
    emoji: "🔥",
    color: "from-red-500/30 to-black/20",
  },
  {
    id: "queen",
    name: "Queen",
    title: "The Plague",
    bounty: 1320000000,
    category: "Pirates",
    status: "Defeated",
    emoji: "☠️",
    color: "from-green-500/20 to-purple-500/20",
  },
  {
    id: "zoro",
    name: "Roronoa Zoro",
    title: "Pirate Hunter",
    bounty: 1111000000,
    category: "Pirates",
    status: "Active",
    emoji: "⚔️",
    color: "from-green-500/20 to-black/20",
  },
  {
    id: "jinbe",
    name: "Jinbe",
    title: "Knight of the Sea",
    bounty: 1100000000,
    category: "Pirates",
    status: "Active",
    emoji: "🌊",
    color: "from-blue-500/30 to-cyan-500/10",
  },
  {
    id: "katakuri",
    name: "Charlotte Katakuri",
    title: "Sweet Commander",
    bounty: 1057000000,
    category: "Pirates",
    status: "Active",
    emoji: "🍩",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    id: "sanji",
    name: "Vinsmoke Sanji",
    title: "Black Leg",
    bounty: 1032000000,
    category: "Pirates",
    status: "Active",
    emoji: "🔥",
    color: "from-yellow-500/20 to-blue-500/20",
  },
  {
    id: "robin",
    name: "Nico Robin",
    title: "Devil Child",
    bounty: 930000000,
    category: "Pirates",
    status: "Active",
    emoji: "🌸",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "ace",
    name: "Portgas D. Ace",
    title: "Fire Fist",
    bounty: 550000000,
    category: "Pirates",
    status: "Deceased",
    emoji: "🔥",
    color: "from-orange-500/30 to-red-500/10",
  },
  {
    id: "usopp",
    name: "Usopp",
    title: "God Usopp",
    bounty: 500000000,
    category: "Pirates",
    status: "Active",
    emoji: "🎯",
    color: "from-green-500/20 to-yellow-500/10",
  },
  {
    id: "franky",
    name: "Franky",
    title: "Iron Man",
    bounty: 394000000,
    category: "Pirates",
    status: "Active",
    emoji: "🤖",
    color: "from-blue-500/30 to-cyan-500/10",
  },
  {
    id: "brook",
    name: "Brook",
    title: "Soul King",
    bounty: 383000000,
    category: "Pirates",
    status: "Active",
    emoji: "💀",
    color: "from-purple-500/20 to-black/30",
  },
  {
    id: "nami",
    name: "Nami",
    title: "Cat Burglar",
    bounty: 366000000,
    category: "Pirates",
    status: "Active",
    emoji: "🍊",
    color: "from-orange-500/20 to-yellow-500/10",
  },
];

const categories = ["All", "Emperors", "Pirates", "Legends"];

type SortOption = "highest" | "lowest" | "name";

export default function BountiesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("highest");

  const filteredBounties = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    const filtered = bountyData.filter((item) => {
      const matchesSearch =
        !searchText ||
        item.name.toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText) ||
        item.status.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "highest") {
        return b.bounty - a.bounty;
      }

      if (sort === "lowest") {
        return a.bounty - b.bounty;
      }

      return a.name.localeCompare(b.name);
    });
  }, [search, category, sort]);

  const highestBounty = Math.max(
    ...bountyData.map((item) => item.bounty)
  );

  const lowestBounty = Math.min(
    ...bountyData.map((item) => item.bounty)
  );

  const wantedCount = bountyData.filter(
    (item) => item.status === "Active"
  ).length;

  const emperorCount = bountyData.filter(
    (item) => item.category === "Emperors"
  ).length;

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("highest");
  };

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#f5c451]/5 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5c451]/30 bg-[#f5c451]/10">
              <Skull className="h-6 w-6 text-[#f5c451]" />
            </div>

            <div>
              <p className="text-lg font-black tracking-wide">
                ONE PIECE HUB
              </p>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                Grand Line Database
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451] sm:flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f5c451]/20 bg-[#f5c451]/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#f5c451]">
            <Target className="h-4 w-4" />
            Wanted Database
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Pirate <span className="text-[#f5c451]">Bounties</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Explore the world's most wanted pirates, legendary bounty
            posters, Emperor rewards and famous pirate hunters.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Trophy className="h-5 w-5" />}
            label="Highest Bounty"
            value={`${(highestBounty / 1000000000).toFixed(2)}B`}
          />

          <StatCard
            icon={<Target className="h-5 w-5" />}
            label="Active Wanted"
            value={String(wantedCount)}
          />

          <StatCard
            icon={<Crown className="h-5 w-5" />}
            label="Emperors"
            value={String(emperorCount)}
          />

          <StatCard
            icon={<Skull className="h-5 w-5" />}
            label="Lowest Bounty"
            value={`${(lowestBounty / 1000000).toFixed(0)}M`}
          />
        </div>
      </section>

      {/* Search and Filters */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />

            <input
              type="text"
              placeholder="Search pirate, title, category or status..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5c451]/50"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-[#f5c451] text-black"
                      : "border border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}

            <div className="ml-auto">
              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value as SortOption)
                }
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm font-bold text-white outline-none"
              >
                <option value="highest">Highest Bounty</option>
                <option value="lowest">Lowest Bounty</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Active Search Info */}
          {(search || category !== "All" || sort !== "highest") && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
              <p className="text-xs font-bold text-white/40">
                Filters active • {filteredBounties.length} result
                {filteredBounties.length !== 1 ? "s" : ""}
              </p>

              <button
                onClick={resetFilters}
                className="rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/5 px-4 py-2 text-xs font-black text-[#f5c451] transition hover:bg-[#f5c451]/10"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bounty Cards */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-bold text-white/40">
            Showing{" "}
            <span className="text-white">
              {filteredBounties.length}
            </span>{" "}
            wanted records
          </p>

          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/30 sm:flex">
            <Sparkles className="h-4 w-4" />
            Grand Line Wanted List
          </div>
        </div>

        {filteredBounties.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-20 text-center">
            <Search className="mx-auto h-12 w-12 text-white/20" />

            <h2 className="mt-5 text-2xl font-black">
              No bounty found
            </h2>

            <p className="mt-2 text-white/40">
              Try another pirate, title, category or status.
            </p>

            <button
              onClick={resetFilters}
              className="mt-6 rounded-xl bg-[#f5c451] px-5 py-3 text-sm font-black text-black transition hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredBounties.map((item, index) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#f5c451]/30 hover:bg-white/[0.055]"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40`}
                />

                <div className="relative p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-3xl">
                        {item.emoji}
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-[#f5c451]">
                          Wanted #{String(index + 1).padStart(2, "0")}
                        </p>

                        <h2 className="mt-1 text-lg font-black">
                          {item.name}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <p className="mt-5 text-sm font-semibold text-white/50">
                    {item.title}
                  </p>

                  {/* Bounty */}
                  <div className="mt-5 rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/5 p-5">
                    <div className="flex items-center gap-2 text-[#f5c451]">
                      <Trophy className="h-5 w-5" />

                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        Bounty
                      </span>
                    </div>

                    <p className="mt-2 text-2xl font-black tracking-tight text-[#f5c451] sm:text-3xl">
                      ฿ {item.bounty.toLocaleString("en-US")}
                    </p>
                  </div>

                  {/* Info */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <InfoBox
                      label="Category"
                      value={item.category}
                    />

                    <InfoBox
                      label="Status"
                      value={item.status}
                    />
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-bold text-white/50">
                      {item.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                        item.status === "Active"
                          ? "bg-green-500/10 text-green-400"
                          : item.status === "Deceased"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Profile Button */}
                  <Link
                    href={`/characters/${item.id}`}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:bg-[#f5c451]/10 hover:text-[#f5c451]"
                  >
                    View Profile
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-black">ONE PIECE HUB</p>

            <p className="mt-1 text-xs text-white/30">
              Fan-made One Piece database.
            </p>
          </div>

          <p className="text-xs text-white/30">
            Chase the legendary bounties ☠️
          </p>
        </div>
      </footer>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/10 text-[#f5c451]">
          {icon}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/30">
            {label}
          </p>

          <p className="mt-1 text-lg font-black">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <p className="text-[9px] font-black uppercase tracking-wider text-white/30">
        {label}
      </p>

      <p className="mt-2 truncate text-xs font-bold text-white/70">
        {value}
      </p>
    </div>
  );
}