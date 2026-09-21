"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpDown,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type DevilFruit = {
  id: string;
  name: string;
  japaneseName: string;
  type: string;
  user: string;
  status: string;
  icon: string;
  description: string;
};

const devilFruits: DevilFruit[] = [
  {
    id: "gomu-gomu",
    name: "Gomu Gomu no Mi",
    japaneseName: "ゴムゴムの実",
    type: "Paramecia",
    user: "Monkey D. Luffy",
    status: "Awakened",
    icon: "🍈",
    description:
      "A mysterious Devil Fruit that gives its user rubber-like properties and extraordinary freedom in combat.",
  },
  {
    id: "mera-mera",
    name: "Mera Mera no Mi",
    japaneseName: "メラメラの実",
    type: "Logia",
    user: "Portgas D. Ace",
    status: "Active",
    icon: "🔥",
    description:
      "A Logia-type Devil Fruit that allows its user to create, control and transform into fire.",
  },
  {
    id: "hie-hie",
    name: "Hie Hie no Mi",
    japaneseName: "ヒエヒエの実",
    type: "Logia",
    user: "Kuzan",
    status: "Active",
    icon: "❄️",
    description:
      "A Logia Devil Fruit that grants the ability to create, control and transform into ice.",
  },
  {
    id: "gura-gura",
    name: "Gura Gura no Mi",
    japaneseName: "グラグラの実",
    type: "Paramecia",
    user: "Marshall D. Teach",
    status: "Active",
    icon: "🌋",
    description:
      "A tremendously powerful Devil Fruit capable of producing vibrations and massive shockwaves.",
  },
  {
    id: "yami-yami",
    name: "Yami Yami no Mi",
    japaneseName: "ヤミヤミの実",
    type: "Logia",
    user: "Marshall D. Teach",
    status: "Active",
    icon: "🌑",
    description:
      "A unique Devil Fruit that allows its user to create and control darkness and absorb other powers.",
  },
  {
    id: "ope-ope",
    name: "Ope Ope no Mi",
    japaneseName: "オペオペの実",
    type: "Paramecia",
    user: "Trafalgar D. Water Law",
    status: "Awakened",
    icon: "❤️‍🩹",
    description:
      "A legendary Devil Fruit that creates a ROOM where the user can perform extraordinary operations.",
  },
  {
    id: "tori-tori",
    name: "Tori Tori no Mi, Model: Phoenix",
    japaneseName: "トリトリの実 モデル：不死鳥",
    type: "Mythical Zoan",
    user: "Marco",
    status: "Active",
    icon: "🦅",
    description:
      "A Mythical Zoan Devil Fruit that allows the user to transform into a phoenix with regenerative flames.",
  },
  {
    id: "hito-hito",
    name: "Hito Hito no Mi",
    japaneseName: "ヒトヒトの実",
    type: "Zoan",
    user: "Tony Tony Chopper",
    status: "Active",
    icon: "🦌",
    description:
      "A Zoan-type Devil Fruit that gives a non-human creature human characteristics and intelligence.",
  },
  {
    id: "ito-ito",
    name: "Ito Ito no Mi",
    japaneseName: "イトイトの実",
    type: "Paramecia",
    user: "Donquixote Doflamingo",
    status: "Awakened",
    icon: "🧵",
    description:
      "A Devil Fruit that allows the user to create and manipulate incredibly strong strings.",
  },
  {
    id: "nikyu-nikyu",
    name: "Nikyu Nikyu no Mi",
    japaneseName: "ニキュニキュの実",
    type: "Paramecia",
    user: "Bartholomew Kuma",
    status: "Active",
    icon: "🐾",
    description:
      "A Paramecia Devil Fruit that grants paw-like abilities capable of repelling almost anything.",
  },
  {
    id: "suna-suna",
    name: "Suna Suna no Mi",
    japaneseName: "スナスナの実",
    type: "Logia",
    user: "Crocodile",
    status: "Active",
    icon: "🏜️",
    description:
      "A Logia Devil Fruit that allows the user to create, control and transform into sand.",
  },
  {
    id: "magu-magu",
    name: "Magu Magu no Mi",
    japaneseName: "マグマグの実",
    type: "Logia",
    user: "Sakazuki",
    status: "Active",
    icon: "🌋",
    description:
      "A powerful Logia Devil Fruit that gives the user control over magma.",
  },
  {
    id: "pika-pika",
    name: "Pika Pika no Mi",
    japaneseName: "ピカピカの実",
    type: "Logia",
    user: "Borsalino",
    status: "Active",
    icon: "⚡",
    description:
      "A Logia Devil Fruit that allows the user to create, control and transform into light.",
  },
  {
    id: "zoan-dragon",
    name: "Uo Uo no Mi, Model: Seiryu",
    japaneseName: "ウオウオの実 モデル：青龍",
    type: "Mythical Zoan",
    user: "Kaido",
    status: "Active",
    icon: "🐉",
    description:
      "A Mythical Zoan Devil Fruit that allows the user to transform into a gigantic azure dragon.",
  },
  {
    id: "hito-nika",
    name: "Hito Hito no Mi, Model: Nika",
    japaneseName: "ヒトヒトの実 モデル：ニカ",
    type: "Mythical Zoan",
    user: "Monkey D. Luffy",
    status: "Awakened",
    icon: "☀️",
    description:
      "A Mythical Zoan connected to the legendary figure Nika, giving its awakened user extraordinary freedom.",
  },
  {
    id: "bara-bara",
    name: "Bara Bara no Mi",
    japaneseName: "バラバラの実",
    type: "Paramecia",
    user: "Buggy",
    status: "Active",
    icon: "🤡",
    description:
      "A Paramecia Devil Fruit that allows the user's body to split into separate pieces.",
  },
];

const categories = [
  "All",
  "Paramecia",
  "Zoan",
  "Mythical Zoan",
  "Logia",
] as const;

type Category = (typeof categories)[number];

type SortOption =
  | "default"
  | "name-asc"
  | "name-desc"
  | "user-asc";

export default function DevilFruitsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<Category>("All");

  const [sort, setSort] =
    useState<SortOption>("default");

  const filteredFruits = useMemo(() => {
    const searchText = search
      .toLowerCase()
      .trim();

    const results = devilFruits.filter((fruit) => {
      const matchesCategory =
        category === "All" ||
        fruit.type === category;

      const searchableText = [
        fruit.name,
        fruit.japaneseName,
        fruit.type,
        fruit.user,
        fruit.status,
        fruit.description,
      ]
        .join(" ")
        .toLowerCase();

      const searchWords = searchText
        ? searchText.split(/\s+/)
        : [];

      const matchesSearch =
        searchWords.length === 0 ||
        searchWords.every((word) =>
          searchableText.includes(word)
        );

      return matchesCategory && matchesSearch;
    });

    return [...results].sort((a, b) => {
      if (sort === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      if (sort === "name-desc") {
        return b.name.localeCompare(a.name);
      }

      if (sort === "user-asc") {
        return a.user.localeCompare(b.user);
      }

      return 0;
    });
  }, [search, category, sort]);

  const parameciaCount = devilFruits.filter(
    (fruit) => fruit.type === "Paramecia"
  ).length;

  const zoanCount = devilFruits.filter(
    (fruit) => fruit.type === "Zoan"
  ).length;

  const mythicalZoanCount = devilFruits.filter(
    (fruit) => fruit.type === "Mythical Zoan"
  ).length;

  const logiaCount = devilFruits.filter(
    (fruit) => fruit.type === "Logia"
  ).length;

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("default");
  };

  return (
    <main className="min-h-screen bg-[#02070d] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
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
              🍈
            </div>

            <p className="mt-6 text-xs font-black tracking-[0.4em] text-[#f5c451]">
              MYSTERIOUS POWERS
            </p>

            <h1 className="mt-3 text-5xl font-black sm:text-7xl">
              DEVIL FRUITS
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Explore the mysterious fruits that grant
              extraordinary powers throughout the world of
              One Piece.
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
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search fruit, user, power or type..."
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

          {/* SORT */}
          <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">

            <p className="text-xs text-white/30">
              Showing{" "}
              <span className="font-bold text-white/60">
                {filteredFruits.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-white/60">
                {devilFruits.length}
              </span>{" "}
              Devil Fruits
            </p>

            <div className="flex items-center gap-2">
              <ArrowUpDown
                size={15}
                className="text-white/30"
              />

              <select
                value={sort}
                onChange={(event) =>
                  setSort(
                    event.target.value as SortOption
                  )
                }
                className="rounded-xl border border-white/10 bg-[#080d13] px-4 py-2 text-xs font-bold text-white/60 outline-none focus:border-[#f5c451]/50"
              >
                <option value="default">
                  Default Order
                </option>

                <option value="name-asc">
                  Name: A → Z
                </option>

                <option value="name-desc">
                  Name: Z → A
                </option>

                <option value="user-asc">
                  User: A → Z
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-5">

          <StatCard
            label="Results"
            value={filteredFruits.length}
          />

          <StatCard
            label="Paramecia"
            value={parameciaCount}
          />

          <StatCard
            label="Zoan"
            value={zoanCount}
          />

          <StatCard
            label="Mythical Zoan"
            value={mythicalZoanCount}
          />

          <StatCard
            label="Logia"
            value={logiaCount}
          />

        </div>
      </section>

      {/* FRUIT GRID */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">

          {filteredFruits.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-24 text-center">

              <div className="text-6xl">
                🌊
              </div>

              <h2 className="mt-5 text-2xl font-black">
                No Devil Fruits Found
              </h2>

              <p className="mt-2 text-sm text-white/35">
                Try another fruit name, user, ability
                or category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-full bg-[#f5c451] px-6 py-3 text-xs font-black text-black transition hover:bg-[#ffd86d]"
              >
                Reset Filters
              </button>

            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredFruits.map((fruit) => (
                <article
                  key={fruit.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-2 hover:border-[#f5c451]/40 hover:bg-white/[0.055]"
                >

                  {/* TOP AREA */}
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[#111923] via-[#080d13] to-black">

                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f5c451]/10 blur-3xl" />

                    <div className="relative text-8xl transition duration-500 group-hover:scale-110">
                      {fruit.icon}
                    </div>

                    {/* TYPE */}
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#f5c451] backdrop-blur-md">
                        {fruit.type}
                      </span>
                    </div>

                    {/* STATUS */}
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white/50 backdrop-blur-md">
                        {fruit.status}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5c451]/70">
                      {fruit.japaneseName}
                    </p>

                    <h2 className="mt-2 text-xl font-black leading-tight">
                      {fruit.name}
                    </h2>

                    <p className="mt-3 min-h-[60px] text-xs leading-5 text-white/35">
                      {fruit.description}
                    </p>

                    {/* INFO */}
                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4">

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-white/30">
                          Type
                        </span>

                        <span className="text-right text-xs font-bold">
                          {fruit.type}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-white/30">
                          User
                        </span>

                        <span className="max-w-[160px] truncate text-right text-xs font-bold">
                          {fruit.user}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">
                          Status
                        </span>

                        <span className="text-xs font-black text-[#f5c451]">
                          {fruit.status}
                        </span>
                      </div>

                    </div>

                    {/* DETAILS */}
                    <Link
                      href={`/devil-fruits/${fruit.id}`}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-xs font-black uppercase tracking-wider transition hover:border-[#f5c451]/50 hover:bg-[#f5c451]/10 hover:text-[#f5c451]"
                    >
                      View Details

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

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs uppercase tracking-widest text-white/30">
        {label}
      </p>

      <p className="mt-2 text-3xl font-black">
        {value}
      </p>
    </div>
  );
}