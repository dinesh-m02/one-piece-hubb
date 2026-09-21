"use client";

import {
  ArrowLeft,
  Bookmark,
  Heart,
  Search,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  FavoriteItem,
  FavoriteType,
  getFavorites,
  removeFavorite,
  saveFavorites,
} from "@/lib/favorites";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "All" | FavoriteType
  >("All");

  const loadFavorites = () => {
    setFavorites(getFavorites());
  };

  useEffect(() => {
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

  const filteredFavorites = useMemo(() => {
    const query = search.trim().toLowerCase();

    return favorites.filter((item) => {
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query);

      const matchesFilter =
        activeFilter === "All" ||
        item.type === activeFilter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });
  }, [
    favorites,
    search,
    activeFilter,
  ]);

  const handleRemove = (id: string) => {
    removeFavorite(id);
    loadFavorites();
  };

  const clearAll = () => {
    saveFavorites([]);
    loadFavorites();
  };

  const filters: Array<
    "All" | FavoriteType
  > = [
    "All",
    "Character",
    "Devil Fruit",
    "Crew",
    "Bounty",
    "News",
    "Episode",
  ];

  const getTypeColor = (
    type: FavoriteType
  ) => {
    switch (type) {
      case "Character":
        return "border-blue-400/20 bg-blue-500/10 text-blue-300";

      case "Devil Fruit":
        return "border-red-400/20 bg-red-500/10 text-red-300";

      case "Crew":
        return "border-purple-400/20 bg-purple-500/10 text-purple-300";

      case "Bounty":
        return "border-yellow-400/20 bg-yellow-500/10 text-yellow-300";

      case "News":
        return "border-green-400/20 bg-green-500/10 text-green-300";

      case "Episode":
        return "border-orange-400/20 bg-orange-500/10 text-orange-300";

      default:
        return "border-white/10 bg-white/5 text-white/60";
    }
  };

  return (
    <main className="min-h-screen bg-[#02070d] text-white">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <div className="flex items-center gap-4">

            <Link
              href="/"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/5
                transition
                hover:border-[#f5c451]/50
                hover:text-[#f5c451]
              "
            >
              <ArrowLeft size={19} />
            </Link>

            <div>

              <p className="text-xs font-bold tracking-[0.3em] text-[#f5c451]">
                ONE PIECE HUB
              </p>

              <h1 className="text-xl font-black sm:text-2xl">
                My Collection
              </h1>

            </div>

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f5c451]/20 bg-[#f5c451]/5 text-[#f5c451]">
            <Heart
              size={19}
              fill="currentColor"
            />
          </div>

        </div>

      </header>


      {/* MAIN */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

        {/* HERO */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111923] via-[#080d14] to-[#02070d] p-7 shadow-2xl sm:p-10">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f5c451]/10 blur-3xl" />

          <div className="relative">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5c451]/10 text-3xl">
                ⭐
              </div>

              <div>

                <p className="text-xs font-bold tracking-[0.25em] text-[#f5c451]">
                  PERSONAL COLLECTION
                </p>

                <h2 className="text-3xl font-black sm:text-4xl">
                  Your Favorites
                </h2>

              </div>

            </div>

            <p className="mt-5 max-w-2xl leading-7 text-white/50">
              Everything you save across One Piece Hub
              appears here automatically.
            </p>

            {/* STATS */}

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

              <Stat
                value={favorites.length}
                label="Total Saved"
              />

              <Stat
                value={
                  favorites.filter(
                    (x) =>
                      x.type === "Character"
                  ).length
                }
                label="Characters"
              />

              <Stat
                value={
                  favorites.filter(
                    (x) =>
                      x.type === "Devil Fruit"
                  ).length
                }
                label="Devil Fruits"
              />

              <Stat
                value={
                  favorites.filter(
                    (x) =>
                      x.type === "Crew"
                  ).length
                }
                label="Crews"
              />

            </div>

          </div>

        </div>


        {/* SEARCH */}

        <div className="mt-8 flex gap-3">

          <div className="relative flex-1">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search your collection..."
              className="
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                py-4
                pl-12
                pr-4
                text-sm
                outline-none
                transition
                placeholder:text-white/25
                focus:border-[#f5c451]/50
              "
            />

          </div>

          {favorites.length > 0 && (
            <button
              onClick={clearAll}
              className="
                hidden
                items-center
                gap-2
                rounded-2xl
                border border-red-400/20
                bg-red-400/5
                px-5
                text-sm
                font-bold
                text-red-300
                transition
                hover:bg-red-400/10
                sm:flex
              "
            >
              <Trash2 size={17} />
              Clear
            </button>
          )}

        </div>


        {/* FILTERS */}

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() =>
                setActiveFilter(filter)
              }
              className={`
                whitespace-nowrap
                rounded-full
                border
                px-4
                py-2.5
                text-xs
                font-bold
                transition
                ${
                  activeFilter === filter
                    ? "border-[#f5c451]/40 bg-[#f5c451] text-black"
                    : "border-white/10 bg-white/5 text-white/55 hover:text-white"
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>


        {/* EMPTY */}

        {favorites.length === 0 && (

          <div className="mt-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 py-20 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f5c451]/10 text-4xl">
              ⭐
            </div>

            <h3 className="mt-6 text-2xl font-black">
              No favorites yet
            </h3>

            <p className="mx-auto mt-3 max-w-md leading-7 text-white/40">
              Go to Characters, Devil Fruits,
              Crews, Bounties, News or Episodes
              and press the ⭐ button to save them.
            </p>

            <Link
              href="/characters"
              className="
                mt-7
                inline-flex
                rounded-full
                bg-[#f5c451]
                px-6
                py-3
                text-sm
                font-black
                text-black
                transition
                hover:bg-[#ffd86b]
              "
            >
              Browse Characters
            </Link>

          </div>
        )}


        {/* RESULTS */}

        {filteredFavorites.length > 0 && (

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {filteredFavorites.map(
              (item) => (

                <article
                  key={`${item.type}-${item.id}`}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.035]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#f5c451]/30
                  "
                >

                  <div className="flex items-start justify-between p-6">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-3xl">
                      {item.emoji}
                    </div>

                    <button
                      onClick={() =>
                        handleRemove(item.id)
                      }
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/5
                        text-white/40
                        transition
                        hover:border-red-400/30
                        hover:text-red-300
                      "
                    >
                      <X size={17} />
                    </button>

                  </div>

                  <div className="px-6 pb-6">

                    <span
                      className={`
                        inline-flex
                        rounded-full
                        border
                        px-3 py-1
                        text-[10px]
                        font-black
                        uppercase
                        tracking-wider
                        ${getTypeColor(item.type)}
                      `}
                    >
                      {item.type}
                    </span>

                    <h3 className="mt-4 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 min-h-12 text-sm leading-6 text-white/45">
                      {item.description}
                    </p>

                    <div className="mt-6 flex gap-2">

                      <Link
                        href={item.href}
                        className="
                          flex-1
                          rounded-xl
                          bg-[#f5c451]
                          px-4
                          py-3
                          text-center
                          text-sm
                          font-black
                          text-black
                          transition
                          hover:bg-[#ffd86b]
                        "
                      >
                        Open
                      </Link>

                      <button
                        onClick={() =>
                          handleRemove(item.id)
                        }
                        className="
                          flex h-11 w-11
                          items-center
                          justify-center
                          rounded-xl
                          border border-white/10
                          bg-white/5
                          text-white/40
                          hover:text-red-300
                        "
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        )}


        {/* NO SEARCH RESULTS */}

        {favorites.length > 0 &&
          filteredFavorites.length === 0 && (

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-20 text-center">

              <Search
                size={40}
                className="mx-auto text-white/20"
              />

              <h3 className="mt-5 text-xl font-black">
                Nothing found
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Try another search or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="mt-6 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold hover:text-[#f5c451]"
              >
                Reset
              </button>

            </div>
          )}

      </section>

    </main>
  );
}


function Stat({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

      <p className="text-2xl font-black">
        {value}
      </p>

      <p className="mt-1 text-xs text-white/40">
        {label}
      </p>

    </div>
  );
}