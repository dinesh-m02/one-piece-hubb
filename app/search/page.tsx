"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  CircleX,
  Crown,
  Search as SearchIcon,
  Shield,
  Sparkles,
  Tv,
  Users,
  Zap,
} from "lucide-react";

type SearchCategory =
  | "Character"
  | "Devil Fruit"
  | "Bounty"
  | "Crew"
  | "News"
  | "Episode";

type SearchItem = {
  id: string;
  title: string;
  category: SearchCategory;
  description: string;
  href: string;
  icon: string;
  keywords?: string[];
};

const searchData: SearchItem[] = [
  // =========================================================
  // CHARACTERS
  // =========================================================

  {
    id: "luffy",
    title: "Monkey D. Luffy",
    category: "Character",
    description:
      "Captain of the Straw Hat Pirates and aspiring Pirate King.",
    href: "/characters/luffy",
    icon: "👒",
    keywords: [
      "luffy",
      "monkey d luffy",
      "straw hat",
      "pirate king",
      "gear 5",
      "emperor",
    ],
  },

  {
    id: "zoro",
    title: "Roronoa Zoro",
    category: "Character",
    description:
      "Swordsman of the Straw Hat Pirates and master of Santoryu.",
    href: "/characters/zoro",
    icon: "⚔️",
    keywords: [
      "zoro",
      "roronoa zoro",
      "pirate hunter",
      "swordsman",
      "three sword",
      "santoryu",
    ],
  },

  {
    id: "nami",
    title: "Nami",
    category: "Character",
    description:
      "Navigator of the Straw Hat Pirates with exceptional cartography skills.",
    href: "/characters/nami",
    icon: "🍊",
    keywords: [
      "nami",
      "navigator",
      "cat burglar",
      "clima tact",
      "weather",
    ],
  },

  {
    id: "sanji",
    title: "Sanji",
    category: "Character",
    description:
      "Cook of the Straw Hat Pirates and master of powerful kicking techniques.",
    href: "/characters/sanji",
    icon: "🍳",
    keywords: [
      "sanji",
      "vinsmoke sanji",
      "black leg",
      "cook",
      "ifrit jambe",
      "diable jambe",
    ],
  },

  {
    id: "shanks",
    title: "Shanks",
    category: "Character",
    description:
      "Red Hair Pirates captain and one of the legendary Emperors.",
    href: "/characters/shanks",
    icon: "🍷",
    keywords: [
      "shanks",
      "red hair",
      "red haired",
      "emperor",
      "yonko",
      "haki",
    ],
  },

  {
    id: "law",
    title: "Trafalgar D. Water Law",
    category: "Character",
    description:
      "Captain of the Heart Pirates and user of the Op-Op Fruit.",
    href: "/characters/law",
    icon: "⚕️",
    keywords: [
      "law",
      "trafalgar law",
      "surgeon of death",
      "heart pirates",
      "ope ope",
      "room",
    ],
  },

  {
    id: "mihawk",
    title: "Dracule Mihawk",
    category: "Character",
    description:
      "The world's greatest swordsman.",
    href: "/characters/mihawk",
    icon: "🗡️",
    keywords: [
      "mihawk",
      "dracule mihawk",
      "hawk eye",
      "hawkeye",
      "swordsman",
      "world strongest swordsman",
    ],
  },

  {
    id: "blackbeard",
    title: "Marshall D. Teach",
    category: "Character",
    description:
      "Captain of the Blackbeard Pirates and a powerful pirate.",
    href: "/characters/blackbeard",
    icon: "🌑",
    keywords: [
      "blackbeard",
      "marshall d teach",
      "teach",
      "yami yami",
      "gura gura",
      "emperor",
    ],
  },

  // =========================================================
  // DEVIL FRUITS
  // =========================================================

  {
    id: "gomu-gomu",
    title: "Gum-Gum Fruit",
    category: "Devil Fruit",
    description:
      "A mysterious fruit associated with Luffy's rubber-like abilities.",
    href: "/devil-fruits/gomu-gomu",
    icon: "🍖",
    keywords: [
      "gomu gomu",
      "gum gum",
      "luffy fruit",
      "rubber",
      "nika",
    ],
  },

  {
    id: "mera-mera",
    title: "Flame-Flame Fruit",
    category: "Devil Fruit",
    description:
      "Logia-type Devil Fruit that grants control over fire.",
    href: "/devil-fruits/mera-mera",
    icon: "🔥",
    keywords: [
      "mera mera",
      "flame flame",
      "fire",
      "ace",
      "sabo",
      "logia",
    ],
  },

  {
    id: "ope-ope",
    title: "Op-Op Fruit",
    category: "Devil Fruit",
    description:
      "A powerful Devil Fruit that creates a surgical ROOM.",
    href: "/devil-fruits/ope-ope",
    icon: "⚕️",
    keywords: [
      "ope ope",
      "op op",
      "law",
      "room",
      "surgeon",
      "paramecia",
    ],
  },

  {
    id: "yami-yami",
    title: "Dark-Dark Fruit",
    category: "Devil Fruit",
    description:
      "A Devil Fruit based on darkness and gravitational attraction.",
    href: "/devil-fruits/yami-yami",
    icon: "🌑",
    keywords: [
      "yami yami",
      "dark dark",
      "blackbeard",
      "darkness",
      "gravity",
      "logia",
    ],
  },

  {
    id: "hito-nika",
    title: "Human-Human Fruit: Nika",
    category: "Devil Fruit",
    description:
      "Mythical Zoan connected with the legendary Sun God Nika.",
    href: "/devil-fruits/hito-nika",
    icon: "☀️",
    keywords: [
      "hito hito",
      "nika",
      "sun god",
      "luffy",
      "gear 5",
      "mythical zoan",
    ],
  },

  // =========================================================
  // BOUNTIES
  // =========================================================

  {
    id: "roger",
    title: "Gol D. Roger — 5,564,800,000",
    category: "Bounty",
    description:
      "The legendary Pirate King and holder of the highest recorded pirate bounty.",
    href: "/bounties",
    icon: "👑",
    keywords: [
      "roger",
      "gol d roger",
      "pirate king",
      "5564800000",
      "5.564 billion",
    ],
  },

  {
    id: "whitebeard",
    title: "Whitebeard — 5,046,000,000",
    category: "Bounty",
    description:
      "Former Emperor and captain of the Whitebeard Pirates.",
    href: "/bounties",
    icon: "⚔️",
    keywords: [
      "whitebeard",
      "edward newgate",
      "newgate",
      "5046000000",
      "5.046 billion",
    ],
  },

  {
    id: "kaido",
    title: "Kaido — 4,611,100,000",
    category: "Bounty",
    description:
      "Former Emperor known as one of the strongest creatures.",
    href: "/bounties",
    icon: "🐉",
    keywords: [
      "kaido",
      "beast pirates",
      "dragon",
      "4611100000",
      "4.611 billion",
    ],
  },

  {
    id: "shanks-bounty",
    title: "Shanks — 4,048,900,000",
    category: "Bounty",
    description:
      "Captain of the Red Hair Pirates.",
    href: "/bounties",
    icon: "🍷",
    keywords: [
      "shanks",
      "red hair",
      "4048900000",
      "4.048 billion",
    ],
  },

  {
    id: "luffy-bounty",
    title: "Luffy — 3,000,000,000",
    category: "Bounty",
    description:
      "Captain of the Straw Hat Pirates.",
    href: "/bounties",
    icon: "👒",
    keywords: [
      "luffy",
      "straw hat",
      "3000000000",
      "3 billion",
      "emperor",
    ],
  },

  // =========================================================
  // CREWS
  // =========================================================

  {
    id: "straw-hat",
    title: "Straw Hat Pirates",
    category: "Crew",
    description:
      "The crew led by Monkey D. Luffy aboard the Thousand Sunny.",
    href: "/crews/straw-hat",
    icon: "👒",
    keywords: [
      "straw hat",
      "straw hat pirates",
      "luffy crew",
      "thousand sunny",
    ],
  },

  {
    id: "red-hair",
    title: "Red Hair Pirates",
    category: "Crew",
    description:
      "The pirate crew led by Shanks.",
    href: "/crews/red-hair",
    icon: "🍷",
    keywords: [
      "red hair",
      "red hair pirates",
      "shanks crew",
    ],
  },

  {
    id: "blackbeard-crew",
    title: "Blackbeard Pirates",
    category: "Crew",
    description:
      "A powerful pirate crew led by Marshall D. Teach.",
    href: "/crews/blackbeard",
    icon: "🌑",
    keywords: [
      "blackbeard",
      "blackbeard pirates",
      "teach crew",
      "yami yami",
    ],
  },

  {
    id: "heart",
    title: "Heart Pirates",
    category: "Crew",
    description:
      "The crew led by Trafalgar Law.",
    href: "/crews/heart",
    icon: "⚕️",
    keywords: [
      "heart pirates",
      "law crew",
      "trafalgar law",
    ],
  },

  {
    id: "revolutionary",
    title: "Revolutionary Army",
    category: "Crew",
    description:
      "The revolutionary organization led by Monkey D. Dragon.",
    href: "/crews/revolutionary",
    icon: "🔥",
    keywords: [
      "revolutionary",
      "revolutionary army",
      "dragon",
      "monkey d dragon",
    ],
  },

  // =========================================================
  // NEWS
  // =========================================================

  {
    id: "one-piece-latest",
    title: "One Piece Latest",
    category: "News",
    description:
      "Latest One Piece Hub fan-site news and updates.",
    href: "/news/one-piece-latest",
    icon: "📰",
    keywords: [
      "latest",
      "one piece latest",
      "updates",
      "news",
    ],
  },

  {
    id: "grand-line-update",
    title: "Grand Line Update",
    category: "News",
    description:
      "A fan-site update covering the Grand Line world.",
    href: "/news/grand-line-update",
    icon: "🗺️",
    keywords: [
      "grand line",
      "grand line update",
      "world",
      "news",
    ],
  },

  {
    id: "egghead-story",
    title: "Egghead Story",
    category: "News",
    description:
      "Fan-site coverage of the Egghead storyline.",
    href: "/news/egghead-story",
    icon: "🥚",
    keywords: [
      "egghead",
      "egghead story",
      "vegapunk",
      "story",
    ],
  },

  // =========================================================
  // EPISODES
  // =========================================================

  {
    id: "episode-1",
    title: "Episode 1",
    category: "Episode",
    description:
      "I'm Luffy! The Man Who Will Become the Pirate King!",
    href: "/episodes",
    icon: "👒",
    keywords: [
      "episode 1",
      "luffy",
      "pirate king",
      "east blue",
    ],
  },

  {
    id: "episode-1015",
    title: "Episode 1015",
    category: "Episode",
    description:
      "Straw Hat Luffy! The Man Who Will Become Pirate King.",
    href: "/episodes",
    icon: "🔥",
    keywords: [
      "episode 1015",
      "roof piece",
      "luffy",
      "wano",
    ],
  },

  {
    id: "episode-1071",
    title: "Episode 1071 — Gear Five",
    category: "Episode",
    description:
      "Luffy's Peak! Attained! Gear Five.",
    href: "/episodes",
    icon: "☀️",
    keywords: [
      "episode 1071",
      "gear 5",
      "gear five",
      "nika",
      "luffy",
      "wano",
    ],
  },
];

const categories = [
  "All",
  "Character",
  "Devil Fruit",
  "Bounty",
  "Crew",
  "News",
  "Episode",
] as const;

type CategoryFilter = (typeof categories)[number];

const popularSearches = [
  "Luffy",
  "Zoro",
  "Devil Fruit",
  "Shanks",
  "Gear 5",
  "Wano",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<CategoryFilter>("All");

  /*
   * Search normalization.
   *
   * This makes:
   *
   * "Gear 5"
   * "gear-5"
   * "GEAR 5"
   *
   * easier to match.
   */
  const normalize = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ");
  };

  const results = useMemo(() => {
    const cleanQuery = normalize(query);

    return searchData
      .filter((item) => {
        const categoryMatch =
          category === "All" ||
          item.category === category;

        if (!categoryMatch) {
          return false;
        }

        if (!cleanQuery) {
          return true;
        }

        const searchableText = [
          item.title,
          item.description,
          item.category,
          item.id,
          ...(item.keywords ?? []),
        ]
          .map(normalize)
          .join(" ");

        const queryWords = cleanQuery.split(" ");

        return queryWords.every((word) =>
          searchableText.includes(word)
        );
      })
      .sort((a, b) => {
        if (!cleanQuery) {
          return 0;
        }

        const aTitle = normalize(a.title);
        const bTitle = normalize(b.title);

        const aStarts = aTitle.startsWith(cleanQuery);
        const bStarts = bTitle.startsWith(cleanQuery);

        if (aStarts && !bStarts) {
          return -1;
        }

        if (!aStarts && bStarts) {
          return 1;
        }

        return 0;
      });
  }, [query, category]);

  const counts = {
    Character: searchData.filter(
      (item) => item.category === "Character"
    ).length,

    "Devil Fruit": searchData.filter(
      (item) => item.category === "Devil Fruit"
    ).length,

    Bounty: searchData.filter(
      (item) => item.category === "Bounty"
    ).length,

    Crew: searchData.filter(
      (item) => item.category === "Crew"
    ).length,

    News: searchData.filter(
      (item) => item.category === "News"
    ).length,

    Episode: searchData.filter(
      (item) => item.category === "Episode"
    ).length,
  };

  const clearSearch = () => {
    setQuery("");
  };

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuery("");
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 transition hover:text-[#f5c451]"
          >
            <ArrowLeft className="h-5 w-5" />
            Home
          </Link>

          <div className="flex items-center gap-2 font-black">
            <SearchIcon className="h-5 w-5 text-[#f5c451]" />
            GLOBAL SEARCH
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-12">
        <div className="rounded-[2rem] border border-[#f5c451]/20 bg-gradient-to-br from-[#f5c451]/10 via-white/5 to-transparent p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f5c451]/20 bg-[#f5c451]/10 px-4 py-2 text-sm font-bold text-[#f5c451]">
              <Sparkles className="h-4 w-4" />
              ONE PIECE DATABASE
            </div>

            <h1 className="mt-5 text-4xl font-black md:text-6xl">
              Search the{" "}
              <span className="text-[#f5c451]">
                Grand Line
              </span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Search characters, Devil Fruits, bounties, crews,
              news and episodes from One Piece Hub.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH BOX
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="relative">
          <SearchIcon className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#f5c451]" />

          <input
            autoFocus
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search Luffy, Zoro, Devil Fruit, bounty, Wano..."
            className="w-full rounded-3xl border border-white/10 bg-white/5 py-5 pl-14 pr-14 text-lg outline-none transition placeholder:text-white/25 focus:border-[#f5c451]/50"
          />

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-[#f5c451]"
            >
              <CircleX className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between px-2 text-xs text-white/25">
          <span>
            Search across the One Piece Hub database
          </span>

          <span className="hidden sm:block">
            Press ESC to clear
          </span>
        </div>
      </section>

      {/* =====================================================
          POPULAR SEARCHES
      ====================================================== */}

      {!query && (
        <section className="mx-auto max-w-7xl px-5 pt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-white/30">
              Popular:
            </span>

            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setQuery(item);
                  setCategory("All");
                }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/50 transition hover:border-[#f5c451]/30 hover:text-[#f5c451]"
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
                category === item
                  ? "bg-[#f5c451] text-black"
                  : "border border-white/10 bg-white/5 text-white/50 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          QUICK CATEGORIES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          <CategoryCard
            icon={<Users className="h-6 w-6" />}
            title="Characters"
            count={counts.Character}
            active={category === "Character"}
            onClick={() => setCategory("Character")}
          />

          <CategoryCard
            icon={<Sparkles className="h-6 w-6" />}
            title="Devil Fruits"
            count={counts["Devil Fruit"]}
            active={category === "Devil Fruit"}
            onClick={() => setCategory("Devil Fruit")}
          />

          <CategoryCard
            icon={<Crown className="h-6 w-6" />}
            title="Bounties"
            count={counts.Bounty}
            active={category === "Bounty"}
            onClick={() => setCategory("Bounty")}
          />

          <CategoryCard
            icon={<Shield className="h-6 w-6" />}
            title="Crews"
            count={counts.Crew}
            active={category === "Crew"}
            onClick={() => setCategory("Crew")}
          />

          <CategoryCard
            icon={<BookOpen className="h-6 w-6" />}
            title="News"
            count={counts.News}
            active={category === "News"}
            onClick={() => setCategory("News")}
          />

          <CategoryCard
            icon={<Tv className="h-6 w-6" />}
            title="Episodes"
            count={counts.Episode}
            active={category === "Episode"}
            onClick={() => setCategory("Episode")}
          />
        </div>
      </section>

      {/* =====================================================
          RESULTS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black">
                Search Results
              </h2>

              {query && (
                <span className="rounded-full bg-[#f5c451]/10 px-3 py-1 text-xs font-bold text-[#f5c451]">
                  {query}
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-white/40">
              {results.length} result
              {results.length === 1 ? "" : "s"}
            </p>
          </div>

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="hidden text-sm font-bold text-white/30 transition hover:text-[#f5c451] sm:block"
            >
              Clear
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
            <SearchIcon className="mx-auto h-14 w-14 text-white/15" />

            <h3 className="mt-5 text-xl font-black">
              No results found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-white/40">
              We couldn't find anything matching "
              {query}". Try a character, Devil Fruit, crew,
              bounty, episode or another keyword.
            </p>

            <button
              type="button"
              onClick={() => {
                clearSearch();
                setCategory("All");
              }}
              className="mt-6 rounded-full bg-[#f5c451] px-6 py-3 text-sm font-black text-black transition hover:bg-[#ffd86d]"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <Link
                key={`${item.category}-${item.id}`}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#f5c451]/30 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-3xl">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-black uppercase tracking-wider text-[#f5c451]">
                      {item.category}
                    </span>

                    <h3 className="mt-1 text-lg font-black">
                      {item.title}
                    </h3>
                  </div>

                  <ChevronRight className="h-5 w-5 shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#f5c451]" />
                </div>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#f5c451]">
                  EXPLORE
                  <Zap className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function CategoryCard({
  icon,
  title,
  count,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        active
          ? "border-[#f5c451]/40 bg-[#f5c451]/10"
          : "border-white/10 bg-white/5 hover:border-[#f5c451]/30"
      }`}
    >
      <div
        className={`${
          active
            ? "text-[#f5c451]"
            : "text-[#f5c451]"
        }`}
      >
        {icon}
      </div>

      <p className="mt-3 font-black">
        {title}
      </p>

      <p className="text-sm text-white/40">
        {count}
      </p>
    </button>
  );
}