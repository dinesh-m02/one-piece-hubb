"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Anchor,
  ArrowLeft,
  ArrowRight,
  Compass,
  Heart,
  Map,
  MapPin,
  Search,
  Ship,
  Skull,
  Sparkles,
  Waves,
} from "lucide-react";

type Region =
  | "East Blue"
  | "West Blue"
  | "North Blue"
  | "South Blue"
  | "Grand Line"
  | "New World"
  | "Red Line";

type Location = {
  id: string;
  name: string;
  region: Region;
  type: string;
  description: string;
  importance: string;
  emoji: string;
  color: string;
  status: string;
};

const locations: Location[] = [
  {
    id: "foosha-village",
    name: "Foosha Village",
    region: "East Blue",
    type: "Village",
    description:
      "The peaceful village where Monkey D. Luffy grew up and where his journey toward becoming a pirate began.",
    importance: "Luffy's hometown",
    emoji: "🏡",
    color: "from-green-500/30 to-yellow-500/10",
    status: "Active",
  },
  {
    id: "shells-town",
    name: "Shells Town",
    region: "East Blue",
    type: "Town",
    description:
      "A town where Luffy first encountered Roronoa Zoro during the early stages of his adventure.",
    importance: "Early Straw Hat journey",
    emoji: "⚓",
    color: "from-blue-500/30 to-cyan-500/10",
    status: "Active",
  },
  {
    id: "orange-town",
    name: "Orange Town",
    region: "East Blue",
    type: "Town",
    description:
      "A town controlled by Buggy during the early East Blue adventure.",
    importance: "Buggy's territory",
    emoji: "🍊",
    color: "from-orange-500/30 to-yellow-500/10",
    status: "Active",
  },
  {
    id: "cocoyasi-village",
    name: "Cocoyasi Village",
    region: "East Blue",
    type: "Village",
    description:
      "Nami's home village, located on an island in the East Blue.",
    importance: "Nami's hometown",
    emoji: "🍊",
    color: "from-orange-500/30 to-green-500/10",
    status: "Active",
  },
  {
    id: "loguetown",
    name: "Loguetown",
    region: "East Blue",
    type: "City",
    description:
      "The town known as the beginning and end of the Pirate King's journey.",
    importance: "Roger's execution site",
    emoji: "⚔️",
    color: "from-gray-500/30 to-yellow-500/10",
    status: "Active",
  },

  {
    id: "water-7",
    name: "Water 7",
    region: "Grand Line",
    type: "Water City",
    description:
      "A famous city of shipwrights and canals where the Straw Hats encountered the Galley-La Company and CP9.",
    importance: "Shipbuilding capital",
    emoji: "🚢",
    color: "from-blue-500/30 to-cyan-500/10",
    status: "Active",
  },
  {
    id: "enies-lobby",
    name: "Enies Lobby",
    region: "Grand Line",
    type: "Government Island",
    description:
      "A major World Government judicial island connected to the three major government facilities.",
    importance: "Straw Hat rescue mission",
    emoji: "⚖️",
    color: "from-yellow-500/30 to-white/10",
    status: "Government",
  },
  {
    id: "thriller-bark",
    name: "Thriller Bark",
    region: "Grand Line",
    type: "Island Ship",
    description:
      "A gigantic ship-like island controlled by Gecko Moria.",
    importance: "Moria's territory",
    emoji: "👻",
    color: "from-purple-500/30 to-black/30",
    status: "Abandoned",
  },
  {
    id: "sabaody",
    name: "Sabaody Archipelago",
    region: "Grand Line",
    type: "Archipelago",
    description:
      "A massive mangrove archipelago near the Red Line and an important gateway to the New World.",
    importance: "New World gateway",
    emoji: "🌳",
    color: "from-green-500/30 to-blue-500/10",
    status: "Active",
  },
  {
    id: "amazon-lily",
    name: "Amazon Lily",
    region: "Grand Line",
    type: "Island",
    description:
      "An island inhabited by the Kuja tribe and ruled by Boa Hancock.",
    importance: "Kuja homeland",
    emoji: "🏝️",
    color: "from-pink-500/30 to-green-500/10",
    status: "Active",
  },
  {
    id: "impel-down",
    name: "Impel Down",
    region: "Grand Line",
    type: "Prison",
    description:
      "A massive underwater prison controlled by the World Government.",
    importance: "World Government prison",
    emoji: "🔒",
    color: "from-red-500/30 to-black/30",
    status: "Government",
  },
  {
    id: "marineford",
    name: "Marineford",
    region: "Grand Line",
    type: "Marine Headquarters",
    description:
      "The legendary Marine stronghold and site of the Paramount War.",
    importance: "Paramount War",
    emoji: "⚓",
    color: "from-blue-500/30 to-white/10",
    status: "Relocated",
  },

  {
    id: "dressrosa",
    name: "Dressrosa",
    region: "New World",
    type: "Kingdom",
    description:
      "A New World kingdom formerly controlled by Donquixote Doflamingo.",
    importance: "Doflamingo's former territory",
    emoji: "🌹",
    color: "from-pink-500/30 to-red-500/10",
    status: "Active",
  },
  {
    id: "whole-cake",
    name: "Whole Cake Island",
    region: "New World",
    type: "Island",
    description:
      "The central island of Totto Land and the home of the Charlotte family.",
    importance: "Big Mom Pirates",
    emoji: "🍰",
    color: "from-pink-500/30 to-yellow-500/10",
    status: "Active",
  },
  {
    id: "wano",
    name: "Wano Country",
    region: "New World",
    type: "Country",
    description:
      "A closed country with a long history connected to the Kozuki clan and the Beast Pirates.",
    importance: "Kaido's former territory",
    emoji: "🌸",
    color: "from-pink-500/30 to-purple-500/10",
    status: "Opened",
  },
  {
    id: "egghead",
    name: "Egghead Island",
    region: "New World",
    type: "Future Island",
    description:
      "The technologically advanced island associated with Dr. Vegapunk and futuristic research.",
    importance: "Vegapunk research",
    emoji: "🤖",
    color: "from-cyan-500/30 to-blue-500/10",
    status: "Restricted",
  },
  {
    id: "zou",
    name: "Zou",
    region: "New World",
    type: "Living Island",
    description:
      "A mysterious island carried on the back of the giant elephant Zunesha.",
    importance: "Mink homeland",
    emoji: "🐘",
    color: "from-green-500/30 to-blue-500/10",
    status: "Mobile",
  },
  {
    id: "laugh-tale",
    name: "Laugh Tale",
    region: "New World",
    type: "Legendary Island",
    description:
      "The mysterious final island reached by Gol D. Roger and the Roger Pirates.",
    importance: "One Piece mystery",
    emoji: "☠️",
    color: "from-yellow-500/30 to-orange-500/10",
    status: "Unknown",
  },

  {
    id: "reverse-mountain",
    name: "Reverse Mountain",
    region: "Red Line",
    type: "Mountain",
    description:
      "A massive mountain where the four Blues connect to the Grand Line.",
    importance: "Grand Line entrance",
    emoji: "⛰️",
    color: "from-gray-500/30 to-blue-500/10",
    status: "Active",
  },
  {
    id: "mary-geoise",
    name: "Mary Geoise",
    region: "Red Line",
    type: "Holy Land",
    description:
      "The capital of the World Government located at the top of the Red Line.",
    importance: "World Government capital",
    emoji: "🏰",
    color: "from-yellow-500/30 to-white/10",
    status: "Government",
  },
  {
    id: "fish-man-island",
    name: "Fish-Man Island",
    region: "Red Line",
    type: "Underwater Island",
    description:
      "An underwater island located beneath the Red Line and a major route toward the New World.",
    importance: "Fish-Man homeland",
    emoji: "🐟",
    color: "from-blue-500/30 to-cyan-500/10",
    status: "Active",
  },
];

const regions = [
  "All",
  "East Blue",
  "West Blue",
  "North Blue",
  "South Blue",
  "Grand Line",
  "New World",
  "Red Line",
];

export default function WorldMapPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const filteredLocations = useMemo(() => {
    const searchText = search.toLowerCase();

    return locations.filter((location) => {
      const matchesSearch =
        location.name.toLowerCase().includes(searchText) ||
        location.region.toLowerCase().includes(searchText) ||
        location.type.toLowerCase().includes(searchText) ||
        location.importance.toLowerCase().includes(searchText);

      const matchesRegion =
        region === "All" || location.region === region;

      return matchesSearch && matchesRegion;
    });
  }, [search, region]);

  const selectedLocation = selected
    ? locations.find((location) => location.id === selected)
    : null;

  const grandLineCount = locations.filter(
    (location) => location.region === "Grand Line"
  ).length;

  const newWorldCount = locations.filter(
    (location) => location.region === "New World"
  ).length;

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[140px]" />

        <div className="absolute right-[-10%] top-[25%] h-[600px] w-[600px] rounded-full bg-[#f5c451]/5 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5c451]/30 bg-[#f5c451]/10">
              <Compass className="h-6 w-6 text-[#f5c451]" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            <Map className="h-4 w-4" />
            World Explorer
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            One Piece{" "}
            <span className="text-[#f5c451]">World Map</span>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Explore the seas, islands and legendary locations across the
            world of One Piece. Discover where pirates, Marines and
            legendary events shaped the Grand Line.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<MapPin className="h-5 w-5" />}
            label="Locations"
            value={String(locations.length)}
          />

          <StatCard
            icon={<Waves className="h-5 w-5" />}
            label="Grand Line"
            value={String(grandLineCount)}
          />

          <StatCard
            icon={<Ship className="h-5 w-5" />}
            label="New World"
            value={String(newWorldCount)}
          />

          <StatCard
            icon={<Heart className="h-5 w-5" />}
            label="Favorites"
            value={String(favorites.length)}
          />
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />

            <input
              type="text"
              placeholder="Search island, location, region or importance..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5c451]/50"
            />
          </div>

          {/* Region Filters */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {regions.map((item) => {
              const active = region === item;

              return (
                <button
                  key={item}
                  onClick={() => setRegion(item)}
                  className={`shrink-0 rounded-xl px-4 py-2 text-sm font-bold transition ${
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

      {/* Visual World Map */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#03101a]">
          <div className="relative min-h-[480px] overflow-hidden p-5 sm:p-8">
            {/* Ocean glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Title */}
            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-[#f5c451]" />

                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5c451]">
                  Grand Line Navigation Chart
                </p>
              </div>

              <p className="mt-2 max-w-xl text-sm text-white/30">
                A stylized interactive representation of the major seas
                and routes.
              </p>
            </div>

            {/* Map Diagram */}
            <div className="relative mx-auto mt-8 max-w-5xl">
              {/* Red Line */}
              <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 rounded-full border border-red-400/20 bg-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.08)] sm:w-12">
                <div className="flex h-full items-center justify-center">
                  <span className="-rotate-90 whitespace-nowrap text-[9px] font-black uppercase tracking-[0.35em] text-red-300/60">
                    Red Line
                  </span>
                </div>
              </div>

              {/* Grand Line */}
              <div className="absolute left-0 right-0 top-1/2 h-12 -translate-y-1/2 rounded-full border border-[#f5c451]/20 bg-[#f5c451]/5">
                <div className="flex h-full items-center justify-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#f5c451]/70">
                    Grand Line
                  </span>
                </div>
              </div>

              {/* East Blue */}
              <MapRegion
                className="left-0 top-4"
                title="East Blue"
                subtitle="Sea"
                icon="🌊"
              />

              {/* West Blue */}
              <MapRegion
                className="right-0 top-4"
                title="West Blue"
                subtitle="Sea"
                icon="🌊"
              />

              {/* South Blue */}
              <MapRegion
                className="left-0 bottom-4"
                title="South Blue"
                subtitle="Sea"
                icon="🌊"
              />

              {/* North Blue */}
              <MapRegion
                className="right-0 bottom-4"
                title="North Blue"
                subtitle="Sea"
                icon="🌊"
              />

              {/* Paradise */}
              <div className="absolute left-[30%] top-[calc(50%-28px)] z-20 hidden rounded-2xl border border-green-400/20 bg-green-500/10 px-4 py-3 backdrop-blur-md sm:block">
                <p className="text-[9px] font-black uppercase tracking-widest text-green-300">
                  Paradise
                </p>

                <p className="mt-1 text-xs font-bold text-white/50">
                  First Half
                </p>
              </div>

              {/* New World */}
              <div className="absolute right-[30%] top-[calc(50%-28px)] z-20 hidden rounded-2xl border border-purple-400/20 bg-purple-500/10 px-4 py-3 backdrop-blur-md sm:block">
                <p className="text-[9px] font-black uppercase tracking-widest text-purple-300">
                  New World
                </p>

                <p className="mt-1 text-xs font-bold text-white/50">
                  Second Half
                </p>
              </div>

              {/* One Piece marker */}
              <div className="absolute left-1/2 top-[72%] z-30 flex -translate-x-1/2 flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5c451]/40 bg-[#f5c451]/10 text-2xl shadow-[0_0_30px_rgba(245,196,81,0.15)]">
                  ☠️
                </div>

                <span className="mt-2 whitespace-nowrap text-[9px] font-black uppercase tracking-widest text-[#f5c451]">
                  Laugh Tale
                </span>
              </div>

              <div className="h-[350px] sm:h-[380px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Location List */}
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5c451]">
              Locations
            </p>

            <p className="mt-1 text-sm font-bold text-white/40">
              Showing{" "}
              <span className="text-white">
                {filteredLocations.length}
              </span>{" "}
              locations
            </p>
          </div>

          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/30 sm:flex">
            <Sparkles className="h-4 w-4" />
            World Explorer
          </div>
        </div>

        {filteredLocations.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-20 text-center">
            <Search className="mx-auto h-12 w-12 text-white/20" />

            <h2 className="mt-5 text-2xl font-black">
              Location Not Found
            </h2>

            <p className="mt-2 text-white/40">
              Try another island, sea or region.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredLocations.map((location, index) => {
              const isFavorite = favorites.includes(location.id);
              const isSelected = selected === location.id;

              return (
                <article
                  key={location.id}
                  className={`group relative overflow-hidden rounded-3xl border bg-white/[0.035] transition duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "border-[#f5c451]/50"
                      : "border-white/10 hover:border-[#f5c451]/30"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${location.color} opacity-40`}
                  />

                  <div className="relative p-5">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-3xl">
                          {location.emoji}
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-[#f5c451]">
                            Location #{String(index + 1).padStart(2, "0")}
                          </p>

                          <h2 className="mt-1 text-lg font-black">
                            {location.name}
                          </h2>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleFavorite(location.id)}
                        aria-label={
                          isFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                          isFavorite
                            ? "border-red-500/30 bg-red-500/10 text-red-400"
                            : "border-white/10 bg-black/20 text-white/30 hover:text-red-400"
                        }`}
                      >
                        <Heart
                          className="h-5 w-5"
                          fill={isFavorite ? "currentColor" : "none"}
                        />
                      </button>
                    </div>

                    {/* Region */}
                    <div className="mt-5 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#f5c451]" />

                      <span className="text-sm font-bold text-white/50">
                        {location.region}
                      </span>

                      <span className="text-white/20">•</span>

                      <span className="text-sm font-bold text-white/30">
                        {location.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/45">
                      {location.description}
                    </p>

                    {/* Importance */}
                    <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                        Importance
                      </p>

                      <p className="mt-2 text-sm font-bold text-white/70">
                        {location.importance}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          location.status === "Active"
                            ? "bg-green-500/10 text-green-400"
                            : location.status === "Unknown"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {location.status}
                      </span>

                      <button
                        onClick={() =>
                          setSelected(
                            isSelected ? null : location.id
                          )
                        }
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-black text-white/60 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
                      >
                        {isSelected ? "Close" : "Explore"}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Selected Details */}
                    {isSelected && (
                      <div className="mt-4 rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/5 p-4">
                        <div className="flex items-center gap-2 text-[#f5c451]">
                          <Anchor className="h-4 w-4" />

                          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                            Navigation Data
                          </span>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-[9px] text-white/30">
                              Region
                            </p>

                            <p className="mt-1 text-xs font-bold text-white/70">
                              {location.region}
                            </p>
                          </div>

                          <div>
                            <p className="text-[9px] text-white/30">
                              Type
                            </p>

                            <p className="mt-1 text-xs font-bold text-white/70">
                              {location.type}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Navigation Info */}
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="overflow-hidden rounded-3xl border border-[#f5c451]/20 bg-gradient-to-r from-[#f5c451]/10 via-white/[0.03] to-transparent">
          <div className="flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#f5c451]">
                <Compass className="h-5 w-5" />

                <span className="text-xs font-black uppercase tracking-[0.25em]">
                  Navigation Center
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                The seas are waiting.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
                Continue exploring characters, pirate crews, Devil Fruits
                and bounties across the One Piece Hub database.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/crews"
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
              >
                <Skull className="h-4 w-4" />
                Crews
              </Link>

              <Link
                href="/characters"
                className="flex items-center gap-2 rounded-2xl bg-[#f5c451] px-5 py-3 text-sm font-black text-black transition hover:bg-[#ffd96d]"
              >
                Characters
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-black">
              ONE PIECE HUB
            </p>

            <p className="mt-1 text-xs text-white/30">
              Fan-made One Piece database.
            </p>
          </div>

          <p className="text-xs text-white/30">
            Navigate the Grand Line ☠️
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

function MapRegion({
  className,
  title,
  subtitle,
  icon,
}: {
  className: string;
  title: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div
      className={`absolute z-10 w-28 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-3 backdrop-blur-md sm:w-36 ${className}`}
    >
      <div className="text-xl">
        {icon}
      </div>

      <p className="mt-2 text-xs font-black text-white/70">
        {title}
      </p>

      <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/20">
        {subtitle}
      </p>
    </div>
  );
}