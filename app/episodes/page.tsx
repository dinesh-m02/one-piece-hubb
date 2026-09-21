"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Heart,
  Play,
  Search,
  Skull,
  Sparkles,
  Tv,
} from "lucide-react";

import FavoriteButton from "@/components/FavoriteButton";
import { getFavorites } from "@/lib/favorites";

type EpisodeType = "Canon" | "Filler" | "Mixed";

type Episode = {
  id: string;
  episode: number;
  title: string;
  arc: string;
  type: EpisodeType;
  date: string;
  description: string;
  emoji: string;
  color: string;
};

const episodeData: Episode[] = [
  {
    id: "episode-1",
    episode: 1,
    title: "I'm Luffy! The Man Who Will Become the Pirate King!",
    arc: "East Blue",
    type: "Canon",
    date: "1999",
    description:
      "The beginning of Luffy's journey and his dream of becoming the Pirate King.",
    emoji: "👒",
    color: "from-yellow-500/30 to-red-500/10",
  },
  {
    id: "episode-2",
    episode: 2,
    title: "Enter the Great Swordsman! Pirate Hunter Roronoa Zoro",
    arc: "Romance Dawn",
    type: "Canon",
    date: "1999",
    description:
      "Luffy meets the legendary swordsman Roronoa Zoro and begins building his crew.",
    emoji: "⚔️",
    color: "from-green-500/20 to-black/20",
  },
  {
    id: "episode-3",
    episode: 3,
    title: "Morgan vs. Luffy! Who's This Mysterious Beautiful Girl?",
    arc: "Romance Dawn",
    type: "Canon",
    date: "1999",
    description:
      "Luffy and Zoro face Captain Morgan while Nami enters the story.",
    emoji: "🗡️",
    color: "from-blue-500/20 to-yellow-500/10",
  },
  {
    id: "episode-37",
    episode: 37,
    title: "Luffy Rises! Result of the Broken Promise!",
    arc: "Arlong Park",
    type: "Canon",
    date: "2000",
    description:
      "The Straw Hats fight to free Nami and defeat Arlong's crew.",
    emoji: "🌊",
    color: "from-blue-500/30 to-red-500/10",
  },
  {
    id: "episode-61",
    episode: 61,
    title: "An Angry Showdown! Luffy vs. Captain Smoker!",
    arc: "Loguetown",
    type: "Canon",
    date: "2000",
    description:
      "Luffy's journey toward the Grand Line faces a dangerous Marine challenge.",
    emoji: "⚓",
    color: "from-blue-500/30 to-gray-500/10",
  },
  {
    id: "episode-92",
    episode: 92,
    title: "Alabasta's Hero! Luffy and the Kingdom",
    arc: "Alabasta",
    type: "Canon",
    date: "2001",
    description:
      "The Straw Hats become involved in the conflict threatening the kingdom of Alabasta.",
    emoji: "🏜️",
    color: "from-orange-500/30 to-yellow-500/10",
  },
  {
    id: "episode-130",
    episode: 130,
    title: "The Dangerous Battle! Luffy vs. Crocodile",
    arc: "Alabasta",
    type: "Canon",
    date: "2002",
    description:
      "Luffy faces Crocodile in a major battle for the future of Alabasta.",
    emoji: "🐊",
    color: "from-yellow-500/20 to-brown-500/10",
  },
  {
    id: "episode-195",
    episode: 195,
    title: "Into the Sky! The Adventure of Skypiea",
    arc: "Skypiea",
    type: "Canon",
    date: "2004",
    description:
      "The Straw Hats explore the mysterious sky island and uncover an ancient conflict.",
    emoji: "☁️",
    color: "from-cyan-500/30 to-blue-500/10",
  },
  {
    id: "episode-236",
    episode: 236,
    title: "The Straw Hats Enter Water 7",
    arc: "Water 7",
    type: "Canon",
    date: "2005",
    description:
      "The crew reaches Water 7, beginning one of the most important adventures.",
    emoji: "🚢",
    color: "from-blue-500/30 to-yellow-500/10",
  },
  {
    id: "episode-278",
    episode: 278,
    title: "Say You Want to Live! Robin's Cry",
    arc: "Enies Lobby",
    type: "Canon",
    date: "2006",
    description:
      "The Straw Hats declare their determination to rescue Robin from the World Government.",
    emoji: "🌸",
    color: "from-purple-500/30 to-blue-500/10",
  },
  {
    id: "episode-312",
    episode: 312,
    title: "Thank You Merry! The Snow Falls Over the Sea",
    arc: "Water 7",
    type: "Canon",
    date: "2007",
    description:
      "The Straw Hats say farewell to the Going Merry in an emotional moment.",
    emoji: "⛵",
    color: "from-blue-500/20 to-white/10",
  },
  {
    id: "episode-377",
    episode: 377,
    title: "The Pain of My Friends! Zoro's Greatest Sacrifice",
    arc: "Thriller Bark",
    type: "Canon",
    date: "2008",
    description:
      "Zoro demonstrates his loyalty and determination to protect his captain and crew.",
    emoji: "⚔️",
    color: "from-purple-500/30 to-black/30",
  },
  {
    id: "episode-405",
    episode: 405,
    title: "Disappearing Crew! The Last Day of the Straw Hats",
    arc: "Sabaody",
    type: "Canon",
    date: "2009",
    description:
      "The Straw Hats experience a devastating defeat that changes their journey.",
    emoji: "🌴",
    color: "from-green-500/20 to-red-500/10",
  },
  {
    id: "episode-483",
    episode: 483,
    title: "Looking for the Answer! Fire Fist Ace Dies",
    arc: "Marineford",
    type: "Canon",
    date: "2011",
    description:
      "The Marineford conflict reaches a devastating turning point for Luffy.",
    emoji: "🔥",
    color: "from-red-500/30 to-orange-500/10",
  },
  {
    id: "episode-517",
    episode: 517,
    title: "The Dawn of the New Era! Luffy and the Straw Hats",
    arc: "Return to Sabaody",
    type: "Canon",
    date: "2011",
    description:
      "After two years of training, the Straw Hats reunite and prepare for the New World.",
    emoji: "🌅",
    color: "from-orange-500/30 to-yellow-500/10",
  },
  {
    id: "episode-574",
    episode: 574,
    title: "To the New World! The Straw Hats Set Sail",
    arc: "Fish-Man Island",
    type: "Canon",
    date: "2012",
    description:
      "The crew begins a new chapter of their journey toward the New World.",
    emoji: "🌊",
    color: "from-blue-500/30 to-cyan-500/10",
  },
  {
    id: "episode-726",
    episode: 726,
    title: "Gear Fourth! The Incredible Boundman",
    arc: "Dressrosa",
    type: "Canon",
    date: "2016",
    description:
      "Luffy unveils Gear Fourth during his decisive battle against Doflamingo.",
    emoji: "💥",
    color: "from-red-500/30 to-yellow-500/10",
  },
  {
    id: "episode-877",
    episode: 877,
    title: "The Final Moment! The Straw Hats Leave Whole Cake Island",
    arc: "Whole Cake Island",
    type: "Canon",
    date: "2019",
    description:
      "The Straw Hats escape from Totto Land after their dangerous confrontation with Big Mom.",
    emoji: "🍰",
    color: "from-pink-500/30 to-purple-500/10",
  },
  {
    id: "episode-1015",
    episode: 1015,
    title: "Straw Hat Luffy! The Man Who Will Become the Pirate King",
    arc: "Wano",
    type: "Canon",
    date: "2022",
    description:
      "Luffy and the Worst Generation face Kaido and Big Mom in an enormous battle.",
    emoji: "🐉",
    color: "from-red-500/30 to-purple-500/10",
  },
  {
    id: "episode-1071",
    episode: 1071,
    title: "Luffy's Peak! Attained! Gear Five",
    arc: "Wano",
    type: "Canon",
    date: "2023",
    description:
      "Luffy reaches a new level of power and reveals Gear Five.",
    emoji: "☀️",
    color: "from-white/20 to-yellow-500/20",
  },
  {
    id: "episode-1085",
    episode: 1085,
    title: "The Last Curtain! Luffy and Momonosuke's Journey",
    arc: "Wano",
    type: "Canon",
    date: "2023",
    description:
      "The Wano story approaches its conclusion as the Straw Hats prepare to leave.",
    emoji: "🎎",
    color: "from-red-500/20 to-yellow-500/10",
  },
  {
    id: "episode-1093",
    episode: 1093,
    title: "Winner Takes All! Law vs. Blackbeard",
    arc: "Egghead",
    type: "Canon",
    date: "2024",
    description:
      "Trafalgar Law faces the Blackbeard Pirates in a major New World confrontation.",
    emoji: "⚕️",
    color: "from-purple-500/30 to-black/30",
  },
];

const arcs = [
  "All",
  "East Blue",
  "Romance Dawn",
  "Arlong Park",
  "Loguetown",
  "Alabasta",
  "Skypiea",
  "Water 7",
  "Enies Lobby",
  "Thriller Bark",
  "Sabaody",
  "Marineford",
  "Fish-Man Island",
  "Dressrosa",
  "Whole Cake Island",
  "Wano",
  "Egghead",
];

const types = ["All", "Canon", "Filler", "Mixed"];

export default function EpisodesPage() {
  const [search, setSearch] = useState("");
  const [arc, setArc] = useState("All");
  const [type, setType] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [watched, setWatched] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      const saved = getFavorites();

      const episodeFavorites = saved
        .filter((item) => item.type === "Episode")
        .map((item) => item.id);

      setFavorites(episodeFavorites);
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

  useEffect(() => {
    const savedWatched = localStorage.getItem(
      "one-piece-hub-watched-episodes"
    );

    if (!savedWatched) return;

    try {
      const parsed = JSON.parse(savedWatched);

      if (Array.isArray(parsed)) {
        setWatched(parsed);
      }
    } catch {
      setWatched([]);
    }
  }, []);

  const toggleWatched = (id: string) => {
    setWatched((current) => {
      const updated = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];

      localStorage.setItem(
        "one-piece-hub-watched-episodes",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const filteredEpisodes = useMemo(() => {
    const searchText = search.toLowerCase();

    return episodeData.filter((episode) => {
      const matchesSearch =
        episode.title.toLowerCase().includes(searchText) ||
        episode.arc.toLowerCase().includes(searchText) ||
        String(episode.episode).includes(searchText);

      const matchesArc =
        arc === "All" || episode.arc === arc;

      const matchesType =
        type === "All" || episode.type === type;

      return matchesSearch && matchesArc && matchesType;
    });
  }, [search, arc, type]);

  const watchedCount = watched.filter((id) =>
    episodeData.some((episode) => episode.id === id)
  ).length;

  const canonCount = episodeData.filter(
    (episode) => episode.type === "Canon"
  ).length;

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#f5c451]/5 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px]" />
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
            <Tv className="h-4 w-4" />
            Episode Database
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Episodes & <span className="text-[#f5c451]">Arcs</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Explore major One Piece episodes, story arcs, canon adventures
            and memorable moments across the Grand Line.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Tv className="h-5 w-5" />}
            label="Episodes Listed"
            value={String(episodeData.length)}
          />

          <StatCard
            icon={<Sparkles className="h-5 w-5" />}
            label="Canon Episodes"
            value={String(canonCount)}
          />

          <StatCard
            icon={<Check className="h-5 w-5" />}
            label="Watched"
            value={String(watchedCount)}
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
              placeholder="Search episode, title or arc..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5c451]/50"
            />
          </div>

          {/* Type */}
          <div className="mt-4 flex flex-wrap gap-2">
            {types.map((item) => {
              const active = type === item;

              return (
                <button
                  key={item}
                  onClick={() => setType(item)}
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

          {/* Arc */}
          <div className="mt-4 flex flex-wrap gap-2">
            {arcs.map((item) => {
              const active = arc === item;

              return (
                <button
                  key={item}
                  onClick={() => setArc(item)}
                  className={`rounded-xl px-3 py-2 text-xs font-bold transition ${
                    active
                      ? "border border-[#f5c451]/30 bg-[#f5c451]/10 text-[#f5c451]"
                      : "border border-white/10 bg-black/20 text-white/40 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-bold text-white/40">
            Showing{" "}
            <span className="text-white">
              {filteredEpisodes.length}
            </span>{" "}
            episodes
          </p>

          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/30 sm:flex">
            <Sparkles className="h-4 w-4" />
            Grand Line Archive
          </div>
        </div>

        {filteredEpisodes.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-20 text-center">
            <Search className="mx-auto h-12 w-12 text-white/20" />

            <h2 className="mt-5 text-2xl font-black">
              No episode found
            </h2>

            <p className="mt-2 text-white/40">
              Try another episode, title or arc.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredEpisodes.map((episode, index) => {
              const isFavorite = favorites.includes(episode.id);
              const isWatched = watched.includes(episode.id);

              return (
                <article
                  key={episode.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#f5c451]/30 hover:bg-white/[0.055]"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${episode.color} opacity-40`}
                  />

                  <div className="relative p-5">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-3xl">
                          {episode.emoji}
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-[#f5c451]">
                            Episode{" "}
                            {String(episode.episode).padStart(4, "0")}
                          </p>

                          <p className="mt-1 text-xs font-bold text-white/40">
                            {episode.arc}
                          </p>
                        </div>
                      </div>

                      {/* Favorite */}
                      <FavoriteButton
                        item={{
                          id: episode.id,
                          title: episode.title,
                          type: "Episode",
                          emoji: episode.emoji,
                          description: episode.description,
                          href: `/episodes`,
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h2 className="mt-5 text-xl font-black leading-tight">
                      {episode.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/50">
                      {episode.description}
                    </p>

                    {/* Date */}
                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-white/35">
                      <CalendarDays className="h-4 w-4" />
                      {episode.date}
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-bold text-white/50">
                        {episode.arc}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          episode.type === "Canon"
                            ? "bg-green-500/10 text-green-400"
                            : episode.type === "Filler"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {episode.type}
                      </span>
                    </div>

                    {/* Watched / Favorite Status */}
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => toggleWatched(episode.id)}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition ${
                          isWatched
                            ? "border-green-500/20 bg-green-500/10 text-green-400"
                            : "border-white/10 bg-black/20 text-white/40 hover:text-white"
                        }`}
                      >
                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={3}
                        />

                        {isWatched ? "Watched" : "Mark Watched"}
                      </button>

                      {isFavorite && (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#f5c451]">
                          <Heart
                            className="h-3.5 w-3.5"
                            fill="currentColor"
                          />
                          Saved
                        </span>
                      )}
                    </div>

                    {/* Watch Button */}
                    <Link
                      href={`/episodes`}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:bg-[#f5c451]/10 hover:text-[#f5c451]"
                    >
                      <Play className="h-4 w-4" fill="currentColor" />
                      Episode Details
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
            Explore every adventure ☠️
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