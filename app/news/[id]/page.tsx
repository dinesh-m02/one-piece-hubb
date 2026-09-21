"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Heart,
  Newspaper,
  Share2,
  Sparkles,
  Tag,
} from "lucide-react";

type NewsArticle = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  emoji: string;
  color: string;
  description: string;
  content: string[];
  highlights: string[];
};

const articles: Record<string, NewsArticle> = {
  "one-piece-latest": {
    title: "One Piece Latest Updates",
    category: "Anime",
    date: "September 2026",
    readTime: "5 min read",
    emoji: "🏴‍☠️",
    color: "from-red-500/30 to-yellow-500/10",
    description:
      "Catch up with the latest One Piece anime developments, episode updates and major moments from the Grand Line.",
    content: [
      "The One Piece anime continues to follow the Straw Hat Pirates as their journey moves deeper into the New World.",
      "Every new stage of the adventure introduces new locations, powerful enemies, mysterious characters and important revelations about the world.",
      "The anime remains focused on the themes that have defined the series for years: freedom, friendship, adventure and the search for the legendary One Piece.",
      "One Piece Hub brings these developments together in a simple database so fans can explore characters, crews, Devil Fruits, bounties and locations alongside the story.",
    ],
    highlights: [
      "Straw Hat Pirates continue their journey",
      "New World mysteries continue to expand",
      "Major characters remain connected to the main story",
      "World Government mysteries remain important",
    ],
  },

  "grand-line-update": {
    title: "Grand Line Story Update",
    category: "Manga",
    date: "September 2026",
    readTime: "6 min read",
    emoji: "🌊",
    color: "from-blue-500/30 to-cyan-500/10",
    description:
      "Explore the latest story developments, mysteries and character moments shaping the current One Piece saga.",
    content: [
      "The Grand Line remains the center of many of the world's biggest mysteries. Pirates, Marines and other powerful organizations continue to compete for influence.",
      "The story has gradually revealed more information about the history of the world and the forces connected to the final stages of the adventure.",
      "The Straw Hat Pirates have become major figures in the New World, attracting attention from powerful pirate crews and the World Government.",
      "As the journey progresses, old mysteries and new discoveries continue to connect different parts of the One Piece world.",
    ],
    highlights: [
      "Grand Line mysteries",
      "New World conflicts",
      "Important character developments",
      "World Government connections",
    ],
  },

  "straw-hat-news": {
    title: "Straw Hat Pirates: Latest Developments",
    category: "Anime",
    date: "September 2026",
    readTime: "4 min read",
    emoji: "👒",
    color: "from-yellow-500/30 to-red-500/10",
    description:
      "A roundup of recent developments involving Luffy and the Straw Hat crew.",
    content: [
      "The Straw Hat Pirates have grown from a small East Blue crew into one of the most influential pirate crews in the New World.",
      "Monkey D. Luffy leads the crew with his goal of becoming the Pirate King. Around him, every member contributes a unique skill to the journey.",
      "Zoro serves as the crew's main swordsman, Nami handles navigation, Sanji provides cooking and combat abilities, and the remaining members bring their own specialized talents.",
      "Their greatest strength is their loyalty to one another and their willingness to protect their friends even against overwhelming enemies.",
    ],
    highlights: [
      "Luffy's journey toward the One Piece",
      "Zoro's role as swordsman",
      "Nami's navigation skills",
      "Straw Hat teamwork",
    ],
  },

  "egghead-story": {
    title: "Egghead Island Story Guide",
    category: "Manga",
    date: "August 2026",
    readTime: "7 min read",
    emoji: "🤖",
    color: "from-cyan-500/30 to-blue-500/10",
    description:
      "Review the major mysteries, characters and technology connected with Egghead Island.",
    content: [
      "Egghead Island is known as the Future Island because of its extremely advanced technology and scientific facilities.",
      "The island is strongly connected to Dr. Vegapunk, one of the world's greatest scientists.",
      "The Straw Hats' arrival on Egghead brought them into contact with advanced technology and information that connects the present world with important historical mysteries.",
      "The island also demonstrates how science, the World Government and the history of the world are deeply connected.",
    ],
    highlights: [
      "Future Island technology",
      "Dr. Vegapunk",
      "World Government involvement",
      "Historical mysteries",
    ],
  },

  "one-piece-film": {
    title: "One Piece Movie Universe",
    category: "Movies",
    date: "August 2026",
    readTime: "5 min read",
    emoji: "🎬",
    color: "from-purple-500/30 to-pink-500/10",
    description:
      "Explore the major One Piece movies, characters, stories and memorable battles.",
    content: [
      "The One Piece franchise has produced a large collection of animated movies featuring the Straw Hat Pirates.",
      "Some movies introduce original characters, locations and stories while others feature familiar characters in new adventures.",
      "The films have also become a major part of the wider One Piece fan community.",
      "One Piece Hub can be used as a central place to organize information about movies, characters and major events.",
    ],
    highlights: [
      "One Piece movie collection",
      "Original movie characters",
      "Straw Hat adventures",
      "Major movie battles",
    ],
  },

  "one-piece-games": {
    title: "One Piece Games Collection",
    category: "Games",
    date: "August 2026",
    readTime: "4 min read",
    emoji: "🎮",
    color: "from-green-500/30 to-blue-500/10",
    description:
      "Discover popular One Piece games across console, PC and mobile platforms.",
    content: [
      "One Piece has appeared in many video games across different generations of gaming platforms.",
      "These games allow players to control characters such as Luffy, Zoro, Sanji and other members of the Straw Hat crew.",
      "Different titles focus on fighting, role-playing, adventure and strategy mechanics.",
      "The games provide another way for fans to explore the characters and world of One Piece.",
    ],
    highlights: [
      "Console games",
      "PC games",
      "Mobile games",
      "Fighting and adventure experiences",
    ],
  },

  "luffy-emperor": {
    title: "Luffy's Journey as an Emperor",
    category: "Anime",
    date: "July 2026",
    readTime: "6 min read",
    emoji: "👑",
    color: "from-yellow-500/30 to-orange-500/10",
    description:
      "Follow the journey that transformed Luffy from a rookie pirate into one of the most influential pirates of the New World.",
    content: [
      "Monkey D. Luffy began his adventure as a young pirate with a simple dream: becoming the Pirate King.",
      "During his journey, Luffy defeated increasingly powerful enemies and built relationships with allies across the world.",
      "His actions in the New World significantly changed his reputation and influence.",
      "Luffy's position among the Four Emperors represents one of the biggest developments in his pirate journey.",
    ],
    highlights: [
      "East Blue beginnings",
      "Grand Line journey",
      "New World battles",
      "Emperor status",
    ],
  },

  "devil-fruit-guide": {
    title: "Devil Fruits: Power System Guide",
    category: "Manga",
    date: "July 2026",
    readTime: "8 min read",
    emoji: "🍎",
    color: "from-red-500/30 to-purple-500/10",
    description:
      "A guide to Paramecia, Zoan and Logia Devil Fruits and some of the most powerful abilities in the series.",
    content: [
      "Devil Fruits are mysterious fruits that grant supernatural abilities to those who eat them.",
      "The three primary categories are Paramecia, Zoan and Logia.",
      "Paramecia fruits provide a wide range of unusual abilities, Zoan fruits allow users to transform into animals or mythical creatures, and Logia fruits provide powers associated with natural elements.",
      "Devil Fruit users lose their ability to swim, creating an important weakness for pirates who travel across the sea.",
    ],
    highlights: [
      "Paramecia",
      "Zoan",
      "Logia",
      "Devil Fruit weaknesses",
    ],
  },

  "one-piece-event": {
    title: "One Piece Fan Event",
    category: "Events",
    date: "June 2026",
    readTime: "3 min read",
    emoji: "🎉",
    color: "from-pink-500/30 to-yellow-500/10",
    description:
      "A fan-focused event guide featuring One Piece announcements, activities and community highlights.",
    content: [
      "One Piece fan events bring communities together through merchandise, exhibitions, games, cosplay and special announcements.",
      "Fans often use these events to celebrate their favorite characters, crews and story arcs.",
      "Community events also provide opportunities for fans to share artwork, theories and creative projects.",
      "One Piece Hub can act as a central place for organizing event-related information.",
    ],
    highlights: [
      "Fan community",
      "Cosplay",
      "Merchandise",
      "Special announcements",
    ],
  },

  "pirate-kings": {
    title: "The Legacy of the Pirate King",
    category: "Manga",
    date: "June 2026",
    readTime: "7 min read",
    emoji: "☠️",
    color: "from-yellow-500/30 to-gray-500/10",
    description:
      "Explore the history of Gol D. Roger and how his final voyage changed the world of piracy.",
    content: [
      "Gol D. Roger was the legendary pirate who became known as the Pirate King.",
      "Roger and his crew completed the journey through the Grand Line and reached the final island, Laugh Tale.",
      "His execution marked the beginning of the Great Pirate Era after his final words inspired countless people to search for the One Piece.",
      "Roger's legacy continues to influence the current generation of pirates.",
    ],
    highlights: [
      "Gol D. Roger",
      "Roger Pirates",
      "Laugh Tale",
      "Great Pirate Era",
    ],
  },

  "one-piece-characters": {
    title: "Most Important Characters Guide",
    category: "Anime",
    date: "May 2026",
    readTime: "6 min read",
    emoji: "⚔️",
    color: "from-green-500/30 to-blue-500/10",
    description:
      "Explore important characters from the East Blue through the New World.",
    content: [
      "One Piece features a huge cast of characters with different goals, abilities and relationships.",
      "The Straw Hat Pirates form the center of the story, but their journey constantly introduces allies and enemies.",
      "Major pirate crews, Marines, Revolutionary Army members and World Government figures all contribute to the expanding world.",
      "The character database in One Piece Hub is designed to organize this information in an easy-to-explore format.",
    ],
    highlights: [
      "Straw Hat Pirates",
      "Emperors",
      "Marines",
      "Revolutionary Army",
    ],
  },

  "one-piece-odyssey": {
    title: "One Piece Game Adventures",
    category: "Games",
    date: "May 2026",
    readTime: "5 min read",
    emoji: "🎮",
    color: "from-blue-500/30 to-purple-500/10",
    description:
      "Explore the growing collection of One Piece gaming experiences and adventures.",
    content: [
      "One Piece games have explored many different gameplay styles.",
      "Some games focus on large-scale battles while others provide role-playing and adventure experiences.",
      "Players can often control popular characters and experience famous locations from the series.",
      "The gaming side of One Piece continues to expand alongside the anime and manga.",
    ],
    highlights: [
      "Action games",
      "Role-playing games",
      "Adventure games",
      "Mobile experiences",
    ],
  },
};

export default function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string | null>(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    let mounted = true;

    params.then((value) => {
      if (mounted) {
        setId(value.id.toLowerCase());
      }
    });

    return () => {
      mounted = false;
    };
  }, [params]);

  if (!id) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#02070d] text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#f5c451]" />

          <p className="mt-4 text-sm text-white/40">
            Loading article...
          </p>
        </div>
      </main>
    );
  }

  const article = articles[id];

  if (!article) {
    return (
      <main className="min-h-screen bg-[#02070d] px-5 py-20 text-white">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/10 text-4xl">
            📰
          </div>

          <h1 className="mt-6 text-4xl font-black">
            Article Not Found
          </h1>

          <p className="mt-3 text-white/40">
            The requested article is not available in the One Piece
            Hub news database.
          </p>

          <Link
            href="/news"
            className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-2xl bg-[#f5c451] px-6 py-3 text-sm font-black text-black transition hover:bg-[#ffd96d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br ${article.color} blur-[140px]`}
        />

        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#f5c451]/5 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link
            href="/news"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
          >
            <ArrowLeft className="h-4 w-4" />

            <span className="hidden sm:inline">
              All News
            </span>
          </Link>

          <Link
            href="/"
            className="font-black tracking-wide"
          >
            ONE PIECE{" "}
            <span className="text-[#f5c451]">HUB</span>
          </Link>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Newspaper className="h-5 w-5 text-[#f5c451]" />
          </div>
        </div>
      </header>

      {/* Article Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-8 pt-10">
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
          <div
            className={`relative bg-gradient-to-br ${article.color} p-6 sm:p-10 lg:p-14`}
          >
            <div className="absolute right-5 top-5 text-8xl opacity-10 sm:text-[12rem]">
              {article.emoji}
            </div>

            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#f5c451] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-black">
                  {article.category}
                </span>

                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white/50">
                  {article.readTime}
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {article.title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/50 sm:text-lg">
                {article.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-bold text-white/40">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {article.date}
                </span>

                <span className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {article.category}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => setFavorite(!favorite)}
                  className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-black transition ${
                    favorite
                      ? "bg-red-500 text-white"
                      : "border border-white/10 bg-black/20 text-white/70 hover:border-red-500/40 hover:text-red-400"
                  }`}
                >
                  <Heart
                    className="h-4 w-4"
                    fill={favorite ? "currentColor" : "none"}
                  />

                  {favorite
                    ? "Added to Favorites"
                    : "Add to Favorites"}
                </button>

                <button
                  onClick={() => {
                    if (typeof navigator !== "undefined") {
                      navigator.clipboard?.writeText(
                        window.location.href
                      );
                    }
                  }}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Article Content */}
      <section className="mx-auto grid max-w-5xl gap-5 px-5 pb-10 lg:grid-cols-[1fr_320px]">
        {/* Main article */}
        <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 text-[#f5c451]">
            <Sparkles className="h-5 w-5" />

            <p className="text-xs font-black uppercase tracking-[0.25em]">
              Story
            </p>
          </div>

          <div className="mt-7 space-y-7">
            {article.content.map((paragraph, index) => (
              <div key={index}>
                {index === 0 && (
                  <span className="float-left mr-3 mt-1 text-5xl font-black leading-none text-[#f5c451]">
                    {paragraph.charAt(0)}
                  </span>
                )}

                <p className="text-base leading-8 text-white/55">
                  {index === 0
                    ? paragraph.slice(1)
                    : paragraph}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Highlights */}
        <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/10 text-[#f5c451]">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f5c451]">
                Key Points
              </p>

              <h2 className="mt-1 text-lg font-black">
                Highlights
              </h2>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {article.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f5c451]/10 text-[10px] font-black text-[#f5c451]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="pt-1 text-xs font-bold leading-5 text-white/60">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/5 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f5c451]">
              One Piece Hub
            </p>

            <p className="mt-2 text-xs leading-5 text-white/40">
              Explore more characters, crews, Devil Fruits, bounties
              and locations.
            </p>
          </div>
        </aside>
      </section>

      {/* Navigation */}
      <section className="mx-auto max-w-5xl px-5 pb-12">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/news"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          <Link
            href="/characters"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#f5c451] px-5 py-4 text-sm font-black text-black transition hover:bg-[#ffd96d]"
          >
            Explore Characters
            <ArrowRight className="h-4 w-4" />
          </Link>
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
            Explore the Grand Line ☠️
          </p>
        </div>
      </footer>
    </main>
  );
}