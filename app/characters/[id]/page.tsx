"use client";

import Link from "next/link";
import { ArrowLeft, Heart, Shield, Swords, Users, Zap } from "lucide-react";
import { useState } from "react";

type CharacterData = {
  name: string;
  nickname: string;
  role: string;
  crew: string;
  bounty: string;
  category: string;
  icon: string;
  description: string;
  abilities: string[];
  status: string;
};

const characterData: Record<string, CharacterData> = {
  luffy: {
    name: "Monkey D. Luffy",
    nickname: "Straw Hat Luffy",
    role: "Captain",
    crew: "Straw Hat Pirates",
    bounty: "3,000,000,000 B",
    category: "Pirate",
    icon: "👒",
    description:
      "Monkey D. Luffy is the captain of the Straw Hat Pirates. His dream is to find the legendary One Piece and become the Pirate King.",
    abilities: [
      "Gum-Gum abilities",
      "Armament Haki",
      "Observation Haki",
      "Conqueror's Haki",
      "Advanced Haki",
    ],
    status: "Active",
  },

  zoro: {
    name: "Roronoa Zoro",
    nickname: "Pirate Hunter",
    role: "Swordsman",
    crew: "Straw Hat Pirates",
    bounty: "1,111,000,000 B",
    category: "Pirate",
    icon: "⚔️",
    description:
      "Roronoa Zoro is the swordsman of the Straw Hat Pirates. His ambition is to become the world's greatest swordsman.",
    abilities: [
      "Three-Sword Style",
      "Armament Haki",
      "Observation Haki",
      "Conqueror's Haki",
      "Advanced Swordsmanship",
    ],
    status: "Active",
  },

  nami: {
    name: "Nami",
    nickname: "Cat Burglar",
    role: "Navigator",
    crew: "Straw Hat Pirates",
    bounty: "366,000,000 B",
    category: "Pirate",
    icon: "🧭",
    description:
      "Nami is the navigator of the Straw Hat Pirates. Her extraordinary navigation skills allow the crew to travel through dangerous seas.",
    abilities: [
      "Navigation",
      "Weather Science",
      "Clima-Tact",
      "Zeus",
      "Map Making",
    ],
    status: "Active",
  },

  sanji: {
    name: "Vinsmoke Sanji",
    nickname: "Black Leg",
    role: "Cook",
    crew: "Straw Hat Pirates",
    bounty: "1,032,000,000 B",
    category: "Pirate",
    icon: "🍳",
    description:
      "Sanji is the cook of the Straw Hat Pirates and an extraordinary martial artist who primarily fights using his legs.",
    abilities: [
      "Black Leg Style",
      "Diable Jambe",
      "Ifrit Jambe",
      "Observation Haki",
      "Genetic Enhancements",
    ],
    status: "Active",
  },

  usopp: {
    name: "Usopp",
    nickname: "God Usopp",
    role: "Sniper",
    crew: "Straw Hat Pirates",
    bounty: "500,000,000 B",
    category: "Pirate",
    icon: "🎯",
    description:
      "Usopp is the sniper of the Straw Hat Pirates. He is known for his creativity, inventions and incredible long-range attacks.",
    abilities: [
      "Sniping",
      "Observation Haki",
      "Pop Greens",
      "Kabuto",
      "Tactical Combat",
    ],
    status: "Active",
  },

  robin: {
    name: "Nico Robin",
    nickname: "Devil Child",
    role: "Archaeologist",
    crew: "Straw Hat Pirates",
    bounty: "930,000,000 B",
    category: "Pirate",
    icon: "🌸",
    description:
      "Nico Robin is the archaeologist of the Straw Hat Pirates and one of the few people capable of reading Poneglyphs.",
    abilities: [
      "Hana Hana no Mi",
      "Archaeology",
      "Poneglyph Reading",
      "Gigante Fleur",
      "Demonio Fleur",
    ],
    status: "Active",
  },

  chopper: {
    name: "Tony Tony Chopper",
    nickname: "Cotton Candy Lover",
    role: "Doctor",
    crew: "Straw Hat Pirates",
    bounty: "1,000 B",
    category: "Pirate",
    icon: "🦌",
    description:
      "Tony Tony Chopper is the doctor of the Straw Hat Pirates. He is a reindeer who gained human abilities after eating a Devil Fruit.",
    abilities: [
      "Medical Knowledge",
      "Hito Hito no Mi",
      "Monster Point",
      "Rumble Ball",
      "Emergency Treatment",
    ],
    status: "Active",
  },

  franky: {
    name: "Franky",
    nickname: "Iron Man",
    role: "Shipwright",
    crew: "Straw Hat Pirates",
    bounty: "394,000,000 B",
    category: "Pirate",
    icon: "🤖",
    description:
      "Franky is the shipwright of the Straw Hat Pirates and the creator of the Thousand Sunny.",
    abilities: [
      "Cyborg Body",
      "Weapons",
      "Franky Shogun",
      "Shipbuilding",
      "Engineering",
    ],
    status: "Active",
  },

  brook: {
    name: "Brook",
    nickname: "Soul King",
    role: "Musician",
    crew: "Straw Hat Pirates",
    bounty: "383,000,000 B",
    category: "Pirate",
    icon: "💀",
    description:
      "Brook is the musician of the Straw Hat Pirates. He is a living skeleton who returned to life through his Devil Fruit power.",
    abilities: [
      "Yomi Yomi no Mi",
      "Swordsmanship",
      "Soul Projection",
      "Music",
      "Ice Attacks",
    ],
    status: "Active",
  },

  jinbe: {
    name: "Jinbe",
    nickname: "Knight of the Sea",
    role: "Helmsman",
    crew: "Straw Hat Pirates",
    bounty: "1,100,000,000 B",
    category: "Pirate",
    icon: "🌊",
    description:
      "Jinbe is the helmsman of the Straw Hat Pirates and a master of Fish-Man Karate.",
    abilities: [
      "Fish-Man Karate",
      "Fish-Man Jujutsu",
      "Armament Haki",
      "Observation Haki",
      "Ocean Combat",
    ],
    status: "Active",
  },

  ace: {
    name: "Portgas D. Ace",
    nickname: "Fire Fist",
    role: "Commander",
    crew: "Whitebeard Pirates",
    bounty: "550,000,000 B",
    category: "Pirate",
    icon: "🔥",
    description:
      "Portgas D. Ace was the sworn brother of Luffy and a former commander of the Whitebeard Pirates.",
    abilities: [
      "Mera Mera no Mi",
      "Fire Fist",
      "Armament Haki",
      "Observation Haki",
      "Fire-Based Combat",
    ],
    status: "Deceased",
  },

  shanks: {
    name: "Shanks",
    nickname: "Red-Haired",
    role: "Captain",
    crew: "Red Hair Pirates",
    bounty: "4,048,900,000 B",
    category: "Emperor",
    icon: "🍷",
    description:
      "Shanks is the captain of the Red Hair Pirates and one of the Four Emperors of the sea.",
    abilities: [
      "Conqueror's Haki",
      "Advanced Conqueror's Haki",
      "Armament Haki",
      "Observation Haki",
      "Swordsmanship",
    ],
    status: "Active",
  },

  law: {
    name: "Trafalgar D. Water Law",
    nickname: "Surgeon of Death",
    role: "Captain",
    crew: "Heart Pirates",
    bounty: "3,000,000,000 B",
    category: "Pirate",
    icon: "⚕️",
    description:
      "Trafalgar Law is the captain of the Heart Pirates and a highly skilled doctor with the powers of the Ope Ope no Mi.",
    abilities: [
      "Ope Ope no Mi",
      "ROOM",
      "Shambles",
      "K-Room",
      "Swordsmanship",
    ],
    status: "Active",
  },

  mihawk: {
    name: "Dracule Mihawk",
    nickname: "Hawk-Eye",
    role: "Swordsman",
    crew: "Cross Guild",
    bounty: "3,590,000,000 B",
    category: "Legend",
    icon: "🗡️",
    description:
      "Dracule Mihawk is recognized as the world's greatest swordsman and is one of the most powerful sword fighters.",
    abilities: [
      "Supreme Swordsmanship",
      "Black Blade",
      "Observation Haki",
      "Armament Haki",
      "Long-Range Slash",
    ],
    status: "Active",
  },

  blackbeard: {
    name: "Marshall D. Teach",
    nickname: "Blackbeard",
    role: "Captain",
    crew: "Blackbeard Pirates",
    bounty: "3,996,000,000 B",
    category: "Emperor",
    icon: "🏴‍☠️",
    description:
      "Marshall D. Teach, known as Blackbeard, is the captain of the Blackbeard Pirates and one of the Four Emperors.",
    abilities: [
      "Yami Yami no Mi",
      "Gura Gura no Mi",
      "Black Hole",
      "Quake Powers",
      "Devil Fruit Powers",
    ],
    status: "Active",
  },

  koby: {
    name: "Koby",
    nickname: "Marine Hero",
    role: "Marine",
    crew: "Marines",
    bounty: "N/A",
    category: "Marine",
    icon: "⚓",
    description:
      "Koby is a Marine officer whose journey began after his encounter with Monkey D. Luffy.",
    abilities: [
      "Soru",
      "Observation Haki",
      "Armament Haki",
      "Marine Training",
      "Honesty Impact",
    ],
    status: "Active",
  },

  smoker: {
    name: "Smoker",
    nickname: "White Hunter",
    role: "Vice Admiral",
    crew: "Marines",
    bounty: "N/A",
    category: "Marine",
    icon: "🚬",
    description:
      "Smoker is a Marine officer who has repeatedly pursued pirates across the Grand Line.",
    abilities: [
      "Moku Moku no Mi",
      "Jitte",
      "Armament Haki",
      "Observation Haki",
      "Marine Combat",
    ],
    status: "Active",
  },
};

export default function CharacterProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [favorite, setFavorite] = useState(false);

  const [id, setId] = useState<string | null>(null);

  useState(() => {
    params.then((value) => {
      setId(value.id.toLowerCase());
    });
  });

  if (!id) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="text-5xl">🌊</div>
          <p className="mt-4 text-white/50">
            Loading character...
          </p>
        </div>
      </main>
    );
  }

  const character = characterData[id];

  if (!character) {
    return (
      <main className="min-h-screen bg-[#02070d] px-6 py-20 text-white">

        <div className="mx-auto max-w-3xl text-center">

          <div className="text-7xl">
            🌊
          </div>

          <h1 className="mt-8 text-5xl font-black">
            CHARACTER NOT FOUND
          </h1>

          <p className="mt-4 text-white/40">
            This character is not available in the One Piece Hub database.
          </p>

          <Link
            href="/characters"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#f5c451]
              px-7
              py-3
              text-sm
              font-black
              text-black
              transition
              hover:bg-[#ffd86b]
            "
          >
            <ArrowLeft size={17} />
            Back to Characters
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#02070d] text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

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
            href="/characters"
            className="
              flex
              items-center
              gap-2
              text-sm
              text-white/40
              transition
              hover:text-[#f5c451]
            "
          >
            <ArrowLeft size={17} />
            Characters
          </Link>

        </div>

      </header>


      {/* =====================================================
          PROFILE
      ====================================================== */}

      <section className="relative overflow-hidden">

        {/* Background glow */}

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#f5c451]/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">


            {/* =================================================
                CHARACTER IMAGE / ICON
            ================================================== */}

            <div className="relative">

              <div className="
                relative
                mx-auto
                flex
                aspect-square
                max-w-md
                items-center
                justify-center
                overflow-hidden
                rounded-[3rem]
                border
                border-[#f5c451]/20
                bg-gradient-to-br
                from-[#151d26]
                via-[#080d13]
                to-black
                shadow-[0_0_80px_rgba(245,196,81,0.08)]
              ">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,196,81,0.12),transparent_60%)]" />

                <div className="relative text-[12rem] drop-shadow-2xl sm:text-[15rem]">
                  {character.icon}
                </div>

              </div>

              {/* Favorite */}

              <button
                onClick={() => setFavorite(!favorite)}
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/70
                  backdrop-blur-md
                  transition
                  hover:border-[#f5c451]/50
                "
              >

                <Heart
                  size={20}
                  className={
                    favorite
                      ? "fill-[#f5c451] text-[#f5c451]"
                      : "text-white/60"
                  }
                />

              </button>

            </div>


            {/* =================================================
                CHARACTER INFORMATION
            ================================================== */}

            <div>

              {/* Category */}

              <div className="flex flex-wrap gap-2">

                <span className="rounded-full border border-[#f5c451]/30 bg-[#f5c451]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#f5c451]">
                  {character.category}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                  {character.status}
                </span>

              </div>


              {/* Name */}

              <p className="mt-7 text-xs font-black uppercase tracking-[0.4em] text-[#f5c451]">
                {character.nickname}
              </p>

              <h1 className="mt-3 text-5xl font-black leading-none sm:text-7xl">
                {character.name}
              </h1>


              {/* Description */}

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                {character.description}
              </p>


              {/* Info cards */}

              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                  <Users
                    size={18}
                    className="text-[#f5c451]"
                  />

                  <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30">
                    Role
                  </p>

                  <p className="mt-1 text-sm font-black">
                    {character.role}
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                  <Shield
                    size={18}
                    className="text-[#f5c451]"
                  />

                  <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30">
                    Crew
                  </p>

                  <p className="mt-1 truncate text-sm font-black">
                    {character.crew}
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                  <Swords
                    size={18}
                    className="text-[#f5c451]"
                  />

                  <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30">
                    Bounty
                  </p>

                  <p className="mt-1 text-sm font-black text-[#f5c451]">
                    {character.bounty}
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                  <Zap
                    size={18}
                    className="text-[#f5c451]"
                  />

                  <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-black">
                    {character.status}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              ABILITIES
          ================================================== */}

          <div className="mt-20">

            <div className="mb-8">

              <p className="text-xs font-black tracking-[0.35em] text-[#f5c451]">
                COMBAT & SKILLS
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                ABILITIES
              </h2>

            </div>


            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {character.abilities.map(
                (ability, index) => (

                  <div
                    key={ability}
                    className="
                      group
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      transition
                      hover:-translate-y-1
                      hover:border-[#f5c451]/40
                      hover:bg-[#f5c451]/5
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#f5c451]/20
                        bg-[#f5c451]/10
                        text-sm
                        font-black
                        text-[#f5c451]
                      ">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="font-bold">
                        {ability}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">

            <Link
              href="/characters"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                text-sm
                font-bold
                text-white/60
                transition
                hover:border-[#f5c451]/50
                hover:text-[#f5c451]
              "
            >
              <ArrowLeft size={17} />
              All Characters
            </Link>

            <Link
              href="/"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
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
              Return to One Piece Hub
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

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

        </div>

      </footer>

    </main>
  );
}