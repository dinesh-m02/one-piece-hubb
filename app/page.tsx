"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  Heart,
  Home as HomeIcon,
  Menu,
  Search,
  Shield,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src="/images/front-luffy2.png"
          alt="One Piece Luffy entrance"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[78%_center]
            md:object-center
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Left dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/5" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* LOGO */}

          <a
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#f5c451]/60
                bg-black/40
                text-xl
                shadow-[0_0_25px_rgba(245,196,81,0.12)]
                backdrop-blur-md
                transition
                group-hover:bg-[#f5c451]
                group-hover:text-black
              "
            >
              ☠
            </div>

            <div>
              <div className="text-lg font-black tracking-[0.2em]">
                ONE PIECE
              </div>

              <div className="mt-0.5 text-xs font-bold tracking-[0.55em] text-[#f5c451]">
                HUB
              </div>
            </div>
          </a>

          {/* DESKTOP CONTROLS */}

          <div className="hidden items-center gap-3 md:flex">
            {/* SEARCH */}

            <a
              href="/search"
              aria-label="Search"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-white/20
                bg-black/30
                text-white
                backdrop-blur-md
                transition
                hover:border-[#f5c451]/70
                hover:text-[#f5c451]
              "
            >
              <Search size={20} />
            </a>

            {/* FAVORITES */}

            <a
              href="/favorites"
              aria-label="Favorites"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-white/20
                bg-black/30
                text-white
                backdrop-blur-md
                transition
                hover:border-[#f5c451]/70
                hover:text-[#f5c451]
              "
            >
              <Heart size={19} />
            </a>

            {/* SOUND */}

            <button
              type="button"
              aria-label="Toggle sound"
              onClick={() => setSoundOn(!soundOn)}
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-white/20
                bg-black/30
                backdrop-blur-md
                transition
                hover:border-[#f5c451]/70
                hover:text-[#f5c451]
              "
            >
              <Volume2
                size={20}
                className={soundOn ? "text-[#f5c451]" : ""}
              />
            </button>

            {/* MENU */}

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-white/20
                bg-black/30
                backdrop-blur-md
                transition
                hover:border-[#f5c451]/70
                hover:text-[#f5c451]
              "
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label="Open mobile menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/20
              bg-black/30
              backdrop-blur-md
              transition
              hover:border-[#f5c451]/70
              hover:text-[#f5c451]
              md:hidden
            "
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MENU PANEL
      ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        className="
          absolute
          right-4
          top-24
          z-40
          max-h-[calc(100vh-7rem)]
          w-[calc(100%-2rem)]
          max-w-96
          overflow-y-auto
          rounded-3xl
          border border-white/10
          bg-black/95
          p-3
          shadow-2xl
          backdrop-blur-2xl
          sm:right-6
          lg:right-10
        "
      >
        {/* MENU HEADER */}

        <div className="mb-2 rounded-2xl bg-gradient-to-r from-[#f5c451]/10 to-transparent px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5c451]/10 text-xl">
              ☠
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#f5c451]">
                ONE PIECE HUB
              </p>

              <p className="mt-1 text-sm text-white/40">
                Explore the Grand Line
              </p>
            </div>
          </div>
        </div>

        {/* HOME */}

        <MenuLink
          href="/"
          icon={<HomeIcon size={19} />}
          label="Home"
          onClick={closeMenu}
        />

        {/* SEARCH */}

        <MenuLink
          href="/search"
          icon={<span className="text-xl">🔎</span>}
          label="Search"
          onClick={closeMenu}
        />

        {/* CHARACTERS */}

        <MenuLink
          href="/characters"
          icon={<span className="text-xl">👒</span>}
          label="Characters"
          onClick={closeMenu}
        />

        {/* DEVIL FRUITS */}

        <MenuLink
          href="/devil-fruits"
          icon={<span className="text-xl">🍎</span>}
          label="Devil Fruits"
          onClick={closeMenu}
        />

        {/* BOUNTIES */}

        <MenuLink
          href="/bounties"
          icon={<span className="text-xl">💰</span>}
          label="Bounties"
          onClick={closeMenu}
        />

        {/* CREWS */}

        <MenuLink
          href="/crews"
          icon={<span className="text-xl">🏴‍☠️</span>}
          label="Crews"
          onClick={closeMenu}
        />

        {/* WORLD MAP */}

        <MenuLink
          href="/map"
          icon={<span className="text-xl">🗺️</span>}
          label="World Map"
          onClick={closeMenu}
        />

        {/* NEWS */}

        <MenuLink
          href="/news"
          icon={<span className="text-xl">📰</span>}
          label="News"
          onClick={closeMenu}
        />

        {/* QUIZ */}

        <MenuLink
          href="/quiz"
          icon={<span className="text-xl">🧠</span>}
          label="Quiz"
          onClick={closeMenu}
        />

        {/* MUSIC */}

        <MenuLink
          href="/music"
          icon={<span className="text-xl">🎵</span>}
          label="Music"
          onClick={closeMenu}
        />

        {/* EPISODES */}

        <MenuLink
          href="/episodes"
          icon={<span className="text-xl">🎬</span>}
          label="Episodes"
          onClick={closeMenu}
        />

        {/* COMPARE */}

        <MenuLink
          href="/compare"
          icon={<span className="text-xl">⚔️</span>}
          label="Compare"
          onClick={closeMenu}
        />

        {/* FAVORITES */}

        <a
          href="/favorites"
          onClick={closeMenu}
          className="
            flex items-center gap-4
            rounded-xl
            border border-[#f5c451]/10
            bg-[#f5c451]/5
            px-4 py-3
            text-sm font-bold
            text-[#f5c451]
            transition
            hover:bg-[#f5c451]/10
          "
        >
          <span className="text-xl">⭐</span>

          <span>Favorites</span>

          <Heart size={16} className="ml-auto" />
        </a>

        {/* DIVIDER */}

        <div className="my-3 h-px bg-white/10" />

        {/* MY COLLECTION */}

        <MenuLink
          href="/favorites"
          icon={<Bookmark size={19} />}
          label="My Collection"
          onClick={closeMenu}
        />

        {/* EXPLORE HUB */}

        <MenuLink
          href="/explore"
          icon={<Sparkles size={19} />}
          label="Explore Hub"
          onClick={closeMenu}
        />

        {/* ABOUT HUB */}

        <MenuLink
          href="/about"
          icon={<Shield size={19} />}
          label="About Hub"
          onClick={closeMenu}
        />
      </motion.div>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <section className="relative z-10 min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
            }}
            className="max-w-2xl"
          >
            {/* TOP LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mb-7 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#f5c451]" />

              <p className="text-xs font-black tracking-[0.35em] text-[#f5c451] sm:text-sm">
                THE GRAND LINE AWAITS
              </p>
            </motion.div>

            {/* MAIN TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.9,
              }}
              className="
                text-7xl
                font-black
                leading-[0.82]
                tracking-[-0.05em]
                sm:text-8xl
                lg:text-[9rem]
              "
            >
              <span className="block text-white">
                ONE
              </span>

              <span className="block text-[#f5c451]">
                PIECE
              </span>
            </motion.h1>

            {/* HUB */}

            <motion.div
              initial={{
                opacity: 0,
                letterSpacing: "0.8em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.55em",
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="mt-4 text-2xl font-black text-white sm:text-3xl"
            >
              HUB
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className="
                mt-8
                max-w-xl
                text-base
                leading-7
                text-white/75
                sm:text-lg
                sm:leading-8
              "
            >
              Explore legendary pirates, powerful Devil Fruits,
              legendary crews, bounties, islands and the vast world
              of One Piece.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              {/* ENTER BUTTON */}

              <a
                href="/characters"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#f5c451]
                  px-8
                  py-4
                  text-sm
                  font-black
                  text-black
                  shadow-[0_0_40px_rgba(245,196,81,0.2)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#ffd86b]
                  hover:shadow-[0_0_50px_rgba(245,196,81,0.35)]
                  sm:text-base
                "
              >
                ENTER THE GRAND LINE

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* WORLD BUTTON */}

              <a
                href="/map"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-black/30
                  px-8
                  py-4
                  text-sm
                  font-bold
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#f5c451]/70
                  hover:text-[#f5c451]
                  sm:text-base
                "
              >
                EXPLORE WORLD
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          -translate-x-1/2
          text-center
        "
      >
        <p className="mb-3 text-[9px] font-bold tracking-[0.4em] text-white/60 sm:text-[10px]">
          BEGIN YOUR VOYAGE
        </p>

        <motion.div
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mx-auto h-9 w-px origin-top bg-[#f5c451]"
        />
      </motion.div>

      {/* =====================================================
          BOTTOM RIGHT LABEL
      ====================================================== */}

      <div className="absolute bottom-6 right-6 z-30 hidden text-[10px] tracking-wider text-white/35 md:block">
        FAN-MADE PROJECT • ONE PIECE HUB
      </div>

      {/* =====================================================
          MOBILE CONTROLS
      ====================================================== */}

      <div className="absolute bottom-6 left-6 z-30 flex gap-2 md:hidden">
        <a
          href="/search"
          aria-label="Search"
          className="
            flex h-10 w-10
            items-center
            justify-center
            rounded-full
            border border-white/20
            bg-black/40
            backdrop-blur-md
            transition
            hover:border-[#f5c451]/70
            hover:text-[#f5c451]
          "
        >
          <Search size={17} />
        </a>

        <a
          href="/favorites"
          aria-label="Favorites"
          className="
            flex h-10 w-10
            items-center
            justify-center
            rounded-full
            border border-white/20
            bg-black/40
            backdrop-blur-md
            transition
            hover:border-[#f5c451]/70
            hover:text-[#f5c451]
          "
        >
          <Heart size={17} />
        </a>

        <button
          type="button"
          onClick={() => setSoundOn(!soundOn)}
          aria-label="Toggle sound"
          className="
            flex h-10 w-10
            items-center
            justify-center
            rounded-full
            border border-white/20
            bg-black/40
            backdrop-blur-md
            transition
            hover:border-[#f5c451]/70
            hover:text-[#f5c451]
          "
        >
          <Volume2
            size={17}
            className={soundOn ? "text-[#f5c451]" : ""}
          />
        </button>
      </div>
    </main>
  );
}

/* =========================================================
   MENU LINK COMPONENT
========================================================= */

function MenuLink({
  href,
  icon,
  label,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        flex
        items-center
        gap-4
        rounded-xl
        px-4
        py-3
        text-sm
        font-bold
        transition
        hover:bg-white/10
        hover:text-[#f5c451]
      "
    >
      {icon}

      <span>{label}</span>
    </a>
  );
}