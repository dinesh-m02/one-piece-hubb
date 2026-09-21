"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Heart,
  Search,
  Skull,
  Sparkles,
  Star,
  Newspaper,
} from "lucide-react";

import FavoriteButton from "@/components/FavoriteButton";
import { getFavorites } from "@/lib/favorites";

type NewsCategory =
  | "Anime"
  | "Manga"
  | "Movies"
  | "Games"
  | "Events";

type NewsItem = {
  id: string;
  title: string;
  category: NewsCategory;
  date: string;
  description: string;
  emoji: string;
  featured?: boolean;
  color: string;
};

const newsData: NewsItem[] = [
  {
    id: "one-piece-latest",
    title: "One Piece Latest Updates",
    category: "Anime",
    date: "2026-09-20",
    description:
      "Stay updated with the latest One Piece anime developments, episodes, characters and story information.",
    emoji: "🏴‍☠️",
    featured: true,
    color: "from-red-500/30 to-yellow-500/10",
  },
  {
    id: "grand-line-update",
    title: "Grand Line Story Update",
    category: "Manga",
    date: "2026-09-18",
    description:
      "Explore the latest developments from the Grand Line and the ongoing One Piece story.",
    emoji: "🌊",
    color: "from-blue-500/30 to-cyan-500/10",
  },
  {
    id: "straw-hat-news",
    title: "Straw Hat Pirates Update",
    category: "Anime",
    date: "2026-09-17",
    description:
      "Follow Luffy and the Straw Hat crew as their journey continues across the New World.",
    emoji: "👒",
    color: "from-yellow-500/30 to-red-500/10",
  },
  {
    id: "egghead-story",
    title: "Egghead Story Highlights",
    category: "Manga",
    date: "2026-09-15",
    description:
      "Discover important story developments, mysteries and characters connected to Egghead.",
    emoji: "🥚",
    color: "from-cyan-500/30 to-purple-500/10",
  },
  {
    id: "one-piece-film",
    title: "One Piece Movie Updates",
    category: "Movies",
    date: "2026-09-12",
    description:
      "Get updates about One Piece movies, theatrical projects, announcements and special releases.",
    emoji: "🎬",
    color: "from-purple-500/30 to-red-500/10",
  },
  {
    id: "one-piece-games",
    title: "One Piece Games & Apps",
    category: "Games",
    date: "2026-09-10",
    description:
      "Explore new One Piece games, mobile updates, events and gaming announcements.",
    emoji: "🎮",
    color: "from-green-500/30 to-blue-500/10",
  },
  {
    id: "luffy-emperor",
    title: "Luffy and the New Emperor Era",
    category: "Anime",
    date: "2026-09-08",
    description:
      "Learn more about Luffy's journey and the changing balance of power in the New World.",
    emoji: "👑",
    color: "from-yellow-500/30 to-orange-500/10",
  },
  {
    id: "devil-fruit-guide",
    title: "Devil Fruit Knowledge Guide",
    category: "Manga",
    date: "2026-09-05",
    description:
      "Explore Devil Fruit powers, categories, users and some of the most important abilities.",
    emoji: "🍎",
    color: "from-green-500/30 to-red-500/10",
  },
  {
    id: "one-piece-event",
    title: "One Piece Fan Events",
    category: "Events",
    date: "2026-09-03",
    description:
      "Discover One Piece events, fan activities, exhibitions and community experiences.",
    emoji: "🎉",
    color: "from-pink-500/30 to-yellow-500/10",
  },
  {
    id: "pirate-kings",
    title: "Pirate King Legacy",
    category: "Manga",
    date: "2026-09-01",
    description:
      "Explore the history of the Pirate King and the legendary era that shaped the Grand Line.",
    emoji: "👑",
    color: "from-yellow-500/30 to-black/20",
  },
  {
    id: "one-piece-characters",
    title: "Popular One Piece Characters",
    category: "Anime",
    date: "2026-08-29",
    description:
      "Explore iconic characters, their abilities, crews, histories and major moments.",
    emoji: "⚔️",
    color: "from-red-500/30 to-purple-500/10",
  },
  {
    id: "one-piece-odyssey",
    title: "One Piece Gaming Adventures",
    category: "Games",
    date: "2026-08-25",
    description:
      "Explore the world of One Piece through games, adventures and interactive experiences.",
    emoji: "🎮",
    color: "from-blue-500/30 to-purple-500/10",
  },
];

const categories = [
  "All",
  "Anime",
  "Manga",
  "Movies",
  "Games",
  "Events",
];

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = () => {
      const saved = getFavorites();

      const newsFavorites = saved
        .filter((item) => item.type === "News")
        .map((item) => item.id);

      setFavorites(newsFavorites);
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

  const filteredNews = useMemo(() => {
    const searchText = search.toLowerCase();

    return newsData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const featuredNews =
    newsData.find((item) => item.featured) ?? newsData[0];

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#f5c451]/5 blur-[120px]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px]" />

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
            <Newspaper className="h-4 w-4" />
            News Center
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            One Piece <span className="text-[#f5c451]">News</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Discover anime updates, manga information, movies, games,
            events and everything happening across the world of One Piece.
          </p>
        </div>

        {/* Featured News */}
        <div className="relative overflow-hidden rounded-3xl border border-[#f5c451]/20 bg-white/[0.035]">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${featuredNews.color} opacity-50`}
          />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f5c451] px-3 py-1.5 text-xs font-black text-black">
                <Star className="h-3.5 w-3.5" fill="currentColor" />
                FEATURED
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-4xl">
                  {featuredNews.emoji}
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5c451]">
                    {featuredNews.category}
                  </p>

                  <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                    {featuredNews.title}
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
                {featuredNews.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-bold text-white/40">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {featuredNews.date}
                </span>

                <span className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Fan Update
                </span>
              </div>

              <Link
                href={`/news/${featuredNews.id}`}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#f5c451] px-5 py-3 text-sm font-black text-black transition hover:scale-[1.02]"
              >
                Read Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <FavoriteButton
              item={{
                id: featuredNews.id,
                title: featuredNews.title,
                type: "News",
                emoji: featuredNews.emoji,
                description: featuredNews.description,
                href: `/news/${featuredNews.id}`,
              }}
              className="h-12 w-12"
            />
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />

            <input
              type="text"
              placeholder="Search news, anime, manga, movies..."
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

      {/* News */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-bold text-white/40">
            Showing{" "}
            <span className="text-white">
              {filteredNews.length}
            </span>{" "}
            articles
          </p>

          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/30 sm:flex">
            <Sparkles className="h-4 w-4" />
            Grand Line News
          </div>
        </div>

        {filteredNews.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-20 text-center">
            <Search className="mx-auto h-12 w-12 text-white/20" />

            <h2 className="mt-5 text-2xl font-black">
              No news found
            </h2>

            <p className="mt-2 text-white/40">
              Try another keyword or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredNews.map((item, index) => {
              const isFavorite = favorites.includes(item.id);

              return (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#f5c451]/30 hover:bg-white/[0.055]"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40`}
                  />

                  <div className="relative p-5">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-3xl">
                          {item.emoji}
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-[#f5c451]">
                            Article #{String(index + 1).padStart(2, "0")}
                          </p>

                          <p className="mt-1 text-xs font-bold text-white/40">
                            {item.category}
                          </p>
                        </div>
                      </div>

                      {/* Shared Favorite */}
                      <FavoriteButton
                        item={{
                          id: item.id,
                          title: item.title,
                          type: "News",
                          emoji: item.emoji,
                          description: item.description,
                          href: `/news/${item.id}`,
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h2 className="mt-5 text-xl font-black leading-tight">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/50">
                      {item.description}
                    </p>

                    {/* Date */}
                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-white/35">
                      <CalendarDays className="h-4 w-4" />
                      {item.date}
                    </div>

                    {/* Category */}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-bold text-white/50">
                        {item.category}
                      </span>

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

                    {/* Read Button */}
                    <Link
                      href={`/news/${item.id}`}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:bg-[#f5c451]/10 hover:text-[#f5c451]"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Official Source Notice */}
      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="rounded-3xl border border-[#f5c451]/10 bg-[#f5c451]/5 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-black text-[#f5c451]">
                Want official One Piece updates?
              </p>

              <p className="mt-1 text-sm text-white/40">
                Check the official ONE PIECE website for verified news,
                anime, manga, movie, game and event announcements.
              </p>
            </div>

            <a
              href="https://one-piece.com/news/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#f5c451]/30 bg-[#f5c451]/10 px-4 py-2 text-sm font-bold text-[#f5c451] transition hover:bg-[#f5c451] hover:text-black"
            >
              Official News
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
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
            Follow the Grand Line ☠️
          </p>
        </div>
      </footer>
    </main>
  );
}