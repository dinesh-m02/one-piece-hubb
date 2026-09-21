"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Anchor,
  ArrowLeft,
  ArrowRight,
  Crown,
  Heart,
  MapPin,
  Search,
  Ship,
  Skull,
  Sparkles,
  Users,
} from "lucide-react";

import FavoriteButton from "@/components/FavoriteButton";
import { getFavorites } from "@/lib/favorites";

type CrewCategory =
  | "Pirates"
  | "Emperors"
  | "Marines"
  | "Revolutionary";

type Crew = {
  id: string;
  name: string;
  title: string;
  category: CrewCategory;
  captain: string;
  ship: string;
  members: number;
  territory: string;
  status: string;
  emoji: string;
  color: string;
  captainId?: string;
};

const crewData: Crew[] = [
  {
    id: "straw-hat",
    name: "Straw Hat Pirates",
    title: "The New Generation's Rising Crew",
    category: "Pirates",
    captain: "Monkey D. Luffy",
    ship: "Thousand Sunny",
    members: 10,
    territory: "Grand Line",
    status: "Active",
    emoji: "👒",
    color: "from-yellow-500/30 to-red-500/10",
    captainId: "luffy",
  },
  {
    id: "red-hair",
    name: "Red Hair Pirates",
    title: "The Balanced Emperor Crew",
    category: "Emperors",
    captain: "Shanks",
    ship: "Red Force",
    members: 10,
    territory: "New World",
    status: "Active",
    emoji: "🍷",
    color: "from-red-500/30 to-black/20",
    captainId: "shanks",
  },
  {
    id: "blackbeard",
    name: "Blackbeard Pirates",
    title: "The Dark Emperor Crew",
    category: "Emperors",
    captain: "Marshall D. Teach",
    ship: "Saber of Xebec",
    members: 10,
    territory: "New World",
    status: "Active",
    emoji: "🌑",
    color: "from-purple-500/30 to-black/30",
    captainId: "blackbeard",
  },
  {
    id: "whitebeard",
    name: "Whitebeard Pirates",
    title: "The Strongest Family",
    category: "Pirates",
    captain: "Edward Newgate",
    ship: "Moby Dick",
    members: 1600,
    territory: "New World",
    status: "Disbanded",
    emoji: "⚔️",
    color: "from-blue-500/30 to-cyan-500/10",
  },
  {
    id: "beast",
    name: "Beast Pirates",
    title: "The Animal Kingdom Pirates",
    category: "Pirates",
    captain: "Kaido",
    ship: "Unknown",
    members: 20000,
    territory: "Wano Country",
    status: "Disbanded",
    emoji: "🐉",
    color: "from-purple-500/30 to-red-500/10",
  },
  {
    id: "big-mom",
    name: "Big Mom Pirates",
    title: "The Totto Land Family",
    category: "Emperors",
    captain: "Charlotte Linlin",
    ship: "Queen Mama Chanter",
    members: 10000,
    territory: "Totto Land",
    status: "Active",
    emoji: "🍰",
    color: "from-pink-500/30 to-orange-500/10",
  },
  {
    id: "heart",
    name: "Heart Pirates",
    title: "The Submarine Pirates",
    category: "Pirates",
    captain: "Trafalgar D. Water Law",
    ship: "Polar Tang",
    members: 21,
    territory: "North Blue / New World",
    status: "Active",
    emoji: "⚕️",
    color: "from-yellow-500/20 to-black/20",
    captainId: "law",
  },
  {
    id: "kid",
    name: "Kid Pirates",
    title: "The Magnetic Pirate Crew",
    category: "Pirates",
    captain: "Eustass Kid",
    ship: "Victoria Punk",
    members: 31,
    territory: "South Blue / New World",
    status: "Defeated",
    emoji: "⚡",
    color: "from-red-500/30 to-purple-500/10",
  },
  {
    id: "cross-guild",
    name: "Cross Guild",
    title: "The Pirate Bounty Organization",
    category: "Pirates",
    captain: "Buggy",
    ship: "Cross Guild Fleet",
    members: 3,
    territory: "New World",
    status: "Active",
    emoji: "⚔️",
    color: "from-blue-500/30 to-red-500/10",
  },
  {
    id: "roger",
    name: "Roger Pirates",
    title: "The Pirate King's Crew",
    category: "Pirates",
    captain: "Gol D. Roger",
    ship: "Oro Jackson",
    members: 31,
    territory: "Grand Line",
    status: "Disbanded",
    emoji: "👑",
    color: "from-yellow-500/30 to-orange-500/10",
  },
  {
    id: "marines",
    name: "Marines",
    title: "World Government's Military Force",
    category: "Marines",
    captain: "Sakazuki",
    ship: "Marine Warships",
    members: 100000,
    territory: "World Government Territories",
    status: "Active",
    emoji: "⚓",
    color: "from-blue-500/30 to-white/10",
  },
  {
    id: "revolutionary",
    name: "Revolutionary Army",
    title: "The World's Revolutionary Force",
    category: "Revolutionary",
    captain: "Monkey D. Dragon",
    ship: "Wind Granma",
    members: 10000,
    territory: "Worldwide",
    status: "Active",
    emoji: "🔥",
    color: "from-red-500/30 to-orange-500/10",
  },
];

const categories = [
  "All",
  "Pirates",
  "Emperors",
  "Marines",
  "Revolutionary",
];

export default function CrewsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  /*
   * Load Crew favorites from the shared favorites system.
   * This keeps the Crews page synchronized with /favorites.
   */
  useEffect(() => {
    const loadFavorites = () => {
      const saved = getFavorites();

      const crewFavorites = saved
        .filter((item) => item.type === "Crew")
        .map((item) => item.id);

      setFavorites(crewFavorites);
    };

    loadFavorites();

    const handleFavoritesUpdate = () => {
      loadFavorites();
    };

    window.addEventListener(
      "one-piece-favorites-updated",
      handleFavoritesUpdate
    );

    return () => {
      window.removeEventListener(
        "one-piece-favorites-updated",
        handleFavoritesUpdate
      );
    };
  }, []);

  const filteredCrews = useMemo(() => {
    return crewData.filter((crew) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        crew.name.toLowerCase().includes(searchText) ||
        crew.title.toLowerCase().includes(searchText) ||
        crew.captain.toLowerCase().includes(searchText) ||
        crew.ship.toLowerCase().includes(searchText) ||
        crew.territory.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || crew.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const activeCrews = crewData.filter(
    (crew) => crew.status === "Active"
  ).length;

  const totalMembers = crewData.reduce(
    (total, crew) => total + crew.members,
    0
  );

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#f5c451]/5 blur-[120px]" />

        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
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
            <Anchor className="h-4 w-4" />
            Crew Database
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Pirate <span className="text-[#f5c451]">Crews</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Explore legendary pirate crews, powerful organizations,
            commanders, ships, territories and the captains who rule the
            seas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Ship className="h-5 w-5" />}
            label="Total Crews"
            value={String(crewData.length)}
          />

          <StatCard
            icon={<Anchor className="h-5 w-5" />}
            label="Active Crews"
            value={String(activeCrews)}
          />

          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="Listed Members"
            value={totalMembers.toLocaleString("en-US")}
          />

          <StatCard
            icon={<Heart className="h-5 w-5" />}
            label="Favorites"
            value={String(favorites.length)}
          />
        </div>
      </section>

      {/* Search & Filters */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />

            <input
              type="text"
              placeholder="Search crew, captain, ship or territory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5c451]/50"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      {/* Crew Cards */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-bold text-white/40">
            Showing{" "}
            <span className="text-white">
              {filteredCrews.length}
            </span>{" "}
            crews
          </p>

          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/30 sm:flex">
            <Sparkles className="h-4 w-4" />
            Grand Line Records
          </div>
        </div>

        {filteredCrews.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-20 text-center">
            <Search className="mx-auto h-12 w-12 text-white/20" />

            <h2 className="mt-5 text-2xl font-black">
              No crew found
            </h2>

            <p className="mt-2 text-white/40">
              Try another crew, captain, ship or territory.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCrews.map((crew, index) => {
              const isFavorite = favorites.includes(crew.id);

              return (
                <article
                  key={crew.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#f5c451]/30 hover:bg-white/[0.055]"
                >
                  {/* Card Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${crew.color} opacity-40`}
                  />

                  <div className="relative p-5">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-3xl">
                          {crew.emoji}
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-[#f5c451]">
                            Crew #{String(index + 1).padStart(2, "0")}
                          </p>

                          <h2 className="mt-1 text-lg font-black">
                            {crew.name}
                          </h2>
                        </div>
                      </div>

                      {/* Shared Favorite Button */}
                      <FavoriteButton
                        item={{
                          id: crew.id,
                          title: crew.name,
                          type: "Crew",
                          emoji: crew.emoji,
                          description: crew.title,
                          href: `/crews/${crew.id}`,
                        }}
                      />
                    </div>

                    {/* Description */}
                    <p className="mt-5 min-h-[42px] text-sm font-semibold leading-6 text-white/50">
                      {crew.title}
                    </p>

                    {/* Captain */}
                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c451]/10 text-[#f5c451]">
                          <Crown className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                            Captain
                          </p>

                          <p className="mt-1 text-sm font-black">
                            {crew.captain}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <InfoBox
                        icon={<Ship className="h-4 w-4" />}
                        label="Ship"
                        value={crew.ship}
                      />

                      <InfoBox
                        icon={<Users className="h-4 w-4" />}
                        label="Members"
                        value={crew.members.toLocaleString("en-US")}
                      />

                      <InfoBox
                        icon={<MapPin className="h-4 w-4" />}
                        label="Territory"
                        value={crew.territory}
                      />

                      <InfoBox
                        icon={<Anchor className="h-4 w-4" />}
                        label="Status"
                        value={crew.status}
                      />
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-bold text-white/50">
                        {crew.category}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          crew.status === "Active"
                            ? "bg-green-500/10 text-green-400"
                            : crew.status === "Disbanded"
                              ? "bg-red-500/10 text-red-400"
                              : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {crew.status}
                      </span>
                    </div>

                    {/* Favorite Indicator */}
                    {isFavorite && (
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#f5c451]">
                        <Heart
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                        />
                        Saved to Favorites
                      </div>
                    )}

                    {/* Details Button */}
                    <Link
                      href={`/crews/${crew.id}`}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:bg-[#f5c451]/10 hover:text-[#f5c451]"
                    >
                      View Crew Profile
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
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
            Explore the Grand Line ☠️
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
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <div className="flex items-center gap-2 text-[#f5c451]">
        {icon}

        <span className="text-[9px] font-black uppercase tracking-wider text-white/30">
          {label}
        </span>
      </div>

      <p className="mt-2 truncate text-xs font-bold text-white/70">
        {value}
      </p>
    </div>
  );
}