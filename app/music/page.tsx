"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Heart,
  Music,
  Pause,
  Play,
  Search,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

type Song = {
  id: number;
  title: string;
  artist: string;
  category: "Opening" | "Ending" | "OST" | "Character Theme";
  episode: string;
  emoji: string;
};

const songs: Song[] = [
  {
    id: 1,
    title: "We Are!",
    artist: "Hiroshi Kitadani",
    category: "Opening",
    episode: "Opening 1",
    emoji: "🏴‍☠️",
  },
  {
    id: 2,
    title: "Believe",
    artist: "Folder 5",
    category: "Opening",
    episode: "Opening 2",
    emoji: "🌊",
  },
  {
    id: 3,
    title: "Hikari E",
    artist: "The Babystars",
    category: "Opening",
    episode: "Opening 3",
    emoji: "☀️",
  },
  {
    id: 4,
    title: "Bon Voyage!",
    artist: "Bon-Bon Blanco",
    category: "Opening",
    episode: "Opening 4",
    emoji: "🗺️",
  },
  {
    id: 5,
    title: "Kokoro no Chizu",
    artist: "BOYSTYLE",
    category: "Opening",
    episode: "Opening 5",
    emoji: "❤️",
  },
  {
    id: 6,
    title: "Jungle P",
    artist: "5050",
    category: "Opening",
    episode: "Opening 9",
    emoji: "🌴",
  },
  {
    id: 7,
    title: "Share the World",
    artist: "Tackey & Tsubasa",
    category: "Opening",
    episode: "Opening 10",
    emoji: "🌍",
  },
  {
    id: 8,
    title: "Hope",
    artist: "Namie Amuro",
    category: "Opening",
    episode: "Opening 20",
    emoji: "🔥",
  },
  {
    id: 9,
    title: "Memories",
    artist: "Maki Otsuki",
    category: "Ending",
    episode: "Ending 1",
    emoji: "🌅",
  },
  {
    id: 10,
    title: "Run! Run! Run!",
    artist: "Mami Nakagawa",
    category: "Ending",
    episode: "Ending 2",
    emoji: "🏃",
  },
  {
    id: 11,
    title: "Overtaken",
    artist: "Kohei Tanaka",
    category: "OST",
    episode: "Soundtrack",
    emoji: "⚔️",
  },
  {
    id: 12,
    title: "The Very Very Strongest",
    artist: "Kohei Tanaka",
    category: "OST",
    episode: "Soundtrack",
    emoji: "💥",
  },
  {
    id: 13,
    title: "Luffy's Fierce Attack",
    artist: "Kohei Tanaka",
    category: "Character Theme",
    episode: "Luffy Theme",
    emoji: "👒",
  },
  {
    id: 14,
    title: "Zoro's Theme",
    artist: "Kohei Tanaka",
    category: "Character Theme",
    episode: "Zoro Theme",
    emoji: "⚔️",
  },
  {
    id: 15,
    title: "Sanji's Theme",
    artist: "Kohei Tanaka",
    category: "Character Theme",
    episode: "Sanji Theme",
    emoji: "🍳",
  },
  {
    id: 16,
    title: "Robin's Theme",
    artist: "Kohei Tanaka",
    category: "Character Theme",
    episode: "Robin Theme",
    emoji: "🌸",
  },
];

const categories = [
  "All",
  "Opening",
  "Ending",
  "OST",
  "Character Theme",
];

export default function MusicPage() {
  const [selectedSong, setSelectedSong] = useState<Song>(songs[0]);
  const [playing, setPlaying] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredSongs = useMemo(() => {
    return songs.filter((song) => {
      const matchesSearch =
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || song.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function playSong(song: Song) {
    setSelectedSong(song);
    setPlaying(true);
  }

  function previousSong() {
    const index = songs.findIndex(
      (song) => song.id === selectedSong.id
    );

    const previous =
      songs[(index - 1 + songs.length) % songs.length];

    setSelectedSong(previous);
    setPlaying(true);
  }

  function nextSong() {
    const index = songs.findIndex(
      (song) => song.id === selectedSong.id
    );

    const next = songs[(index + 1) % songs.length];

    setSelectedSong(next);
    setPlaying(true);
  }

  return (
    <main className="min-h-screen bg-[#02070d] text-white pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 transition hover:text-yellow-400"
          >
            <ArrowLeft className="h-5 w-5" />
            Home
          </Link>

          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-yellow-400" />

            <span className="font-black tracking-wide">
              MUSIC HUB
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-12">
        <div className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-white/5 to-transparent p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              <Music className="h-4 w-4" />
              ONE PIECE SOUNDTRACK
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Music{" "}
              <span className="text-yellow-400">
                Hub
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
              Explore openings, endings, soundtrack themes and
              character music from the world of One Piece.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search songs or artists..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 outline-none transition placeholder:text-white/30 focus:border-yellow-400/50"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
                category === item
                  ? "bg-yellow-400 text-black"
                  : "border border-white/10 bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Music list */}
      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Music Library
            </h2>

            <p className="mt-1 text-sm text-white/40">
              {filteredSongs.length} tracks available
            </p>
          </div>

          <div className="hidden text-sm text-white/40 md:block">
            ❤️ {favorites.length} favorites
          </div>
        </div>

        {filteredSongs.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
            <Music className="mx-auto h-12 w-12 text-white/20" />

            <h3 className="mt-4 text-xl font-bold">
              No music found
            </h3>

            <p className="mt-2 text-white/40">
              Try another song, artist or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredSongs.map((song, index) => {
              const isSelected = selectedSong.id === song.id;
              const isFavorite = favorites.includes(song.id);

              return (
                <div
                  key={song.id}
                  className={`group rounded-3xl border p-4 transition ${
                    isSelected
                      ? "border-yellow-400/40 bg-yellow-400/5"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Number / Cover */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400/20 to-white/5 text-3xl">
                      {song.emoji}
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-black">
                        {song.title}
                      </h3>

                      <p className="mt-1 truncate text-sm text-white/50">
                        {song.artist}
                      </p>

                      <div className="mt-2 flex gap-2">
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-white/60">
                          {song.category}
                        </span>

                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/40">
                          {song.episode}
                        </span>
                      </div>
                    </div>

                    {/* Favorite */}
                    <button
                      onClick={() => toggleFavorite(song.id)}
                      className="rounded-full p-2 transition hover:bg-white/10"
                      aria-label="Favorite"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isFavorite
                            ? "fill-red-500 text-red-500"
                            : "text-white/40"
                        }`}
                      />
                    </button>

                    {/* Play */}
                    <button
                      onClick={() =>
                        isSelected
                          ? setPlaying(!playing)
                          : playSong(song)
                      }
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black transition hover:scale-105"
                    >
                      {isSelected && playing ? (
                        <Pause className="h-5 w-5 fill-current" />
                      ) : (
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      )}
                    </button>
                  </div>

                  {/* Active animation */}
                  {isSelected && playing && (
                    <div className="mt-4 flex items-end gap-1 px-1">
                      {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                        <div
                          key={bar}
                          className="h-5 w-1 rounded-full bg-yellow-400 animate-pulse"
                          style={{
                            animationDelay: `${bar * 80}ms`,
                          }}
                        />
                      ))}

                      <span className="ml-2 text-xs font-bold text-yellow-400">
                        NOW PLAYING
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#02070d]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex items-center gap-4">
            {/* Song cover */}
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-2xl sm:flex">
              {selectedSong.emoji}
            </div>

            {/* Song info */}
            <div className="min-w-0 flex-1">
              <p className="truncate font-black">
                {selectedSong.title}
              </p>

              <p className="truncate text-sm text-white/40">
                {selectedSong.artist}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button
                onClick={previousSong}
                className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <SkipBack className="h-5 w-5" />
              </button>

              <button
                onClick={() => setPlaying(!playing)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black transition hover:scale-105"
              >
                {playing ? (
                  <Pause className="h-5 w-5 fill-current" />
                ) : (
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                )}
              </button>

              <button
                onClick={nextSong}
                className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>

            {/* Volume */}
            <div className="hidden items-center gap-2 md:flex">
              <Volume2 className="h-5 w-5 text-white/40" />

              <input
                type="range"
                min="0"
                max="100"
                defaultValue="70"
                className="w-24 accent-yellow-400"
              />
            </div>
          </div>

          {/* Fake progress */}
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full bg-yellow-400 transition-all ${
                playing ? "w-2/5" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}