"use client";

import Link from "next/link";
import { ArrowLeft, Crown, Sword, Shield, Ship } from "lucide-react";
import { useParams } from "next/navigation";

const characterData: Record<
  string,
  {
    name: string;
    role: string;
    crew: string;
    bounty: string;
    icon: string;
    description: string;
    abilities: string[];
    devilFruit: string;
    haki: string[];
  }
> = {
  luffy: {
    name: "Monkey D. Luffy",
    role: "Captain",
    crew: "Straw Hat Pirates",
    bounty: "3,000,000,000",
    icon: "👒",
    description:
      "Monkey D. Luffy is the captain of the Straw Hat Pirates and dreams of becoming the Pirate King.",
    abilities: [
      "Gum-Gum abilities",
      "Advanced Armament Haki",
      "Observation Haki",
      "Conqueror's Haki",
    ],
    devilFruit: "Hito Hito no Mi, Model: Nika",
    haki: [
      "Observation Haki",
      "Armament Haki",
      "Conqueror's Haki",
    ],
  },

  zoro: {
    name: "Roronoa Zoro",
    role: "Swordsman",
    crew: "Straw Hat Pirates",
    bounty: "1,111,000,000",
    icon: "⚔️",
    description:
      "Roronoa Zoro is the swordsman of the Straw Hat Pirates and aims to become the world's greatest swordsman.",
    abilities: [
      "Three-Sword Style",
      "Armament Haki",
      "Observation Haki",
      "Conqueror's Haki",
    ],
    devilFruit: "None",
    haki: [
      "Observation Haki",
      "Armament Haki",
      "Conqueror's Haki",
    ],
  },

  nami: {
    name: "Nami",
    role: "Navigator",
    crew: "Straw Hat Pirates",
    bounty: "366,000,000",
    icon: "🧭",
    description:
      "Nami is the navigator of the Straw Hat Pirates and possesses exceptional navigation and weather knowledge.",
    abilities: [
      "Navigation",
      "Weather manipulation techniques",
      "Clima-Tact",
      "Tactical intelligence",
    ],
    devilFruit: "None",
    haki: [],
  },

  usopp: {
    name: "Usopp",
    role: "Sniper",
    crew: "Straw Hat Pirates",
    bounty: "500,000,000",
    icon: "🎯",
    description:
      "Usopp is the sniper of the Straw Hat Pirates and is known for his creativity, inventions and long-range attacks.",
    abilities: [
      "Sniping",
      "Pop Green techniques",
      "Observation Haki",
      "Invention",
    ],
    devilFruit: "None",
    haki: ["Observation Haki"],
  },

  sanji: {
    name: "Vinsmoke Sanji",
    role: "Cook",
    crew: "Straw Hat Pirates",
    bounty: "1,032,000,000",
    icon: "🍳",
    description:
      "Sanji is the cook of the Straw Hat Pirates and a powerful martial artist who primarily fights with his legs.",
    abilities: [
      "Black Leg Style",
      "Diable Jambe",
      "Ifrit Jambe",
      "Observation Haki",
    ],
    devilFruit: "None",
    haki: ["Observation Haki", "Armament Haki"],
  },

  chopper: {
    name: "Tony Tony Chopper",
    role: "Doctor",
    crew: "Straw Hat Pirates",
    bounty: "1,000",
    icon: "🦌",
    description:
      "Tony Tony Chopper is the doctor of the Straw Hat Pirates and a reindeer who gained human abilities through a Devil Fruit.",
    abilities: [
      "Medical knowledge",
      "Monster Point",
      "Transformation abilities",
      "Rumble Ball techniques",
    ],
    devilFruit: "Hito Hito no Mi",
    haki: [],
  },

  robin: {
    name: "Nico Robin",
    role: "Archaeologist",
    crew: "Straw Hat Pirates",
    bounty: "930,000,000",
    icon: "📚",
    description:
      "Nico Robin is the archaeologist of the Straw Hat Pirates and can read the ancient language required to understand Poneglyphs.",
    abilities: [
      "Hana Hana no Mi",
      "Archaeology",
      "Demonio Fleur",
      "Historical research",
    ],
    devilFruit: "Hana Hana no Mi",
    haki: [],
  },

  franky: {
    name: "Franky",
    role: "Shipwright",
    crew: "Straw Hat Pirates",
    bounty: "394,000,000",
    icon: "🤖",
    description:
      "Franky is the shipwright of the Straw Hat Pirates and the builder of the Thousand Sunny.",
    abilities: [
      "Cyborg body",
      "Shipbuilding",
      "Franky Shogun",
      "Engineering",
    ],
    devilFruit: "None",
    haki: [],
  },

  brook: {
    name: "Brook",
    role: "Musician",
    crew: "Straw Hat Pirates",
    bounty: "383,000,000",
    icon: "🎻",
    description:
      "Brook is the musician of the Straw Hat Pirates and a swordsman who returned to life through the power of a Devil Fruit.",
    abilities: [
      "Fencing",
      "Soul abilities",
      "Music",
      "Ice techniques",
    ],
    devilFruit: "Yomi Yomi no Mi",
    haki: [],
  },

  jinbe: {
    name: "Jinbe",
    role: "Helmsman",
    crew: "Straw Hat Pirates",
    bounty: "1,100,000,000",
    icon: "🐟",
    description:
      "Jinbe is a Fish-Man martial artist and the helmsman of the Straw Hat Pirates.",
    abilities: [
      "Fish-Man Karate",
      "Fish-Man Jujutsu",
      "Armament Haki",
      "Observation Haki",
    ],
    devilFruit: "None",
    haki: ["Observation Haki", "Armament Haki"],
  },
};

export default function CharacterDetailPage() {
  const params = useParams();

  const id = String(params.id);

  const character = characterData[id];

  if (!character) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050d17] px-6 text-white">

        <div className="text-center">

          <div className="text-7xl">
            🏴‍☠️
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Character Not Found
          </h1>

          <p className="mt-3 text-white/40">
            This character is not available in the database.
          </p>

          <Link
            href="/characters"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f5c451] px-6 py-3 font-bold text-black"
          >
            <ArrowLeft size={18} />
            Back to Characters
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050d17] text-white">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050d17]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="font-black tracking-[0.2em]"
          >
            ONE PIECE{" "}
            <span className="text-[#f5c451]">
              HUB
            </span>
          </Link>

          <Link
            href="/characters"
            className="flex items-center gap-2 text-sm text-white/50 transition hover:text-[#f5c451]"
          >
            <ArrowLeft size={17} />
            Characters
          </Link>

        </div>

      </header>

      {/* HERO */}

      <section className="relative overflow-hidden px-6 py-20">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0b5278]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* CHARACTER VISUAL */}

            <div className="relative">

              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0c3852] to-[#07111d] shadow-2xl">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,196,81,0.15),transparent_55%)]" />

                <span className="relative text-[10rem] transition-transform duration-500 hover:scale-110 sm:text-[13rem]">
                  {character.icon}
                </span>

                <div className="absolute bottom-5 left-5 rounded-full border border-[#f5c451]/30 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#f5c451] backdrop-blur-md">
                  {character.role}
                </div>

              </div>

            </div>

            {/* INFORMATION */}

            <div>

              <p className="text-xs font-black tracking-[0.4em] text-[#f5c451]">
                CHARACTER PROFILE
              </p>

              <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
                {character.name}
              </h1>

              <p className="mt-3 text-xl font-bold text-[#f5c451]">
                {character.crew}
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/50">
                {character.description}
              </p>

              {/* BOUNTY */}

              <div className="mt-8 inline-flex items-center gap-5 rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/5 px-6 py-5">

                <div className="text-3xl">
                  💰
                </div>

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                    Bounty
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#f5c451]">
                    ฿ {character.bounty}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* QUICK INFO */}

      <section className="px-6 pb-10">

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <Crown
              size={24}
              className="text-[#f5c451]"
            />

            <p className="mt-5 text-xs uppercase tracking-widest text-white/30">
              Role
            </p>

            <p className="mt-2 font-bold">
              {character.role}
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <Ship
              size={24}
              className="text-[#f5c451]"
            />

            <p className="mt-5 text-xs uppercase tracking-widest text-white/30">
              Crew
            </p>

            <p className="mt-2 font-bold">
              {character.crew}
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <Sword
              size={24}
              className="text-[#f5c451]"
            />

            <p className="mt-5 text-xs uppercase tracking-widest text-white/30">
              Devil Fruit
            </p>

            <p className="mt-2 font-bold">
              {character.devilFruit}
            </p>

          </div>

        </div>

      </section>

      {/* ABILITIES */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10">

            <p className="text-xs font-bold tracking-[0.3em] text-[#f5c451]">
              POWER & SKILLS
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Abilities
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {character.abilities.map((ability) => (

              <div
                key={ability}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#f5c451]/30"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5c451]/10 text-[#f5c451]">
                  ⚡
                </div>

                <span className="font-bold">
                  {ability}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HAKI */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10">

            <p className="text-xs font-bold tracking-[0.3em] text-[#f5c451]">
              HAKI
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Haki Abilities
            </h2>

          </div>

          {character.haki.length === 0 ? (

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-white/40">
              No Haki information listed for this profile.
            </div>

          ) : (

            <div className="grid gap-4 sm:grid-cols-3">

              {character.haki.map((haki) => (

                <div
                  key={haki}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >

                  <Shield
                    size={24}
                    className="text-[#f5c451]"
                  />

                  <h3 className="mt-5 font-black">
                    {haki}
                  </h3>

                  <p className="mt-2 text-sm text-white/35">
                    Listed in this character profile.
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

      {/* BACK BUTTON */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-6xl">

          <Link
            href="/characters"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-bold transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
          >
            <ArrowLeft size={18} />
            Back to Characters
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#030811] px-6 py-12">

        <div className="mx-auto max-w-6xl text-center">

          <p className="font-black">
            ONE PIECE{" "}
            <span className="text-[#f5c451]">
              HUB
            </span>
          </p>

          <p className="mt-2 text-xs text-white/25">
            Fan-made project • Explore the Grand Line
          </p>

        </div>

      </footer>

    </main>
  );
}