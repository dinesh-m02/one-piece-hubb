"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Crown,
  Heart,
  Shield,
  Sparkles,
  Swords,
  User,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

type FruitData = {
  name: string;
  japaneseName: string;
  type: string;
  user: string;
  icon: string;
  power: string;
  status: string;
  description: string;
  abilities: string[];
  weaknesses: string[];
};

const fruits: Record<string, FruitData> = {
  "gomu-gomu": {
    name: "Gum-Gum Fruit",
    japaneseName: "Gomu Gomu no Mi",
    type: "Paramecia",
    user: "Monkey D. Luffy",
    icon: "🍖",
    power: "Rubber Body",
    status: "Awakened",
    description:
      "The Devil Fruit associated with Monkey D. Luffy. It grants extraordinary rubber-like properties and enables a wide range of creative combat techniques.",
    abilities: [
      "Rubber Body",
      "Elastic Attacks",
      "Gear Techniques",
      "Advanced Haki Combination",
      "Awakening",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "Drowning",
    ],
  },

  "mera-mera": {
    name: "Flame-Flame Fruit",
    japaneseName: "Mera Mera no Mi",
    type: "Logia",
    user: "Portgas D. Ace",
    icon: "🔥",
    power: "Fire",
    status: "Active",
    description:
      "A Logia-type Devil Fruit that allows its user to create, control and transform into fire.",
    abilities: [
      "Fire Creation",
      "Fire Manipulation",
      "Flame Transformation",
      "Large-Scale Fire Attacks",
      "Fire-Based Mobility",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "Certain elemental interactions",
    ],
  },

  "hie-hie": {
    name: "Ice-Ice Fruit",
    japaneseName: "Hie Hie no Mi",
    type: "Logia",
    user: "Kuzan",
    icon: "❄️",
    power: "Ice",
    status: "Active",
    description:
      "A Logia-type Devil Fruit that grants control over ice and the ability to transform into ice.",
    abilities: [
      "Ice Creation",
      "Ice Manipulation",
      "Ice Transformation",
      "Ocean Freezing",
      "Ice Weapons",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },

  "gura-gura": {
    name: "Tremor-Tremor Fruit",
    japaneseName: "Gura Gura no Mi",
    type: "Paramecia",
    user: "Edward Newgate",
    icon: "🌋",
    power: "Earthquakes",
    status: "Transferred",
    description:
      "A legendary Devil Fruit capable of producing powerful vibrations and devastating earthquakes.",
    abilities: [
      "Shockwaves",
      "Earthquakes",
      "Air Tremors",
      "Sea Tremors",
      "Massive Destruction",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },

  "yami-yami": {
    name: "Dark-Dark Fruit",
    japaneseName: "Yami Yami no Mi",
    type: "Logia",
    user: "Marshall D. Teach",
    icon: "🌑",
    power: "Darkness",
    status: "Active",
    description:
      "A unique Logia-type Devil Fruit that allows its user to create and manipulate darkness.",
    abilities: [
      "Darkness Creation",
      "Gravity Manipulation",
      "Power Nullification",
      "Black Vortex",
      "Darkness Absorption",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "Receives attacks directly",
    ],
  },

  "ope-ope": {
    name: "Op-Op Fruit",
    japaneseName: "Ope Ope no Mi",
    type: "Paramecia",
    user: "Trafalgar D. Water Law",
    icon: "⚕️",
    power: "Operation",
    status: "Awakened",
    description:
      "A powerful Devil Fruit that allows its user to create a ROOM and manipulate objects, people and space within it.",
    abilities: [
      "ROOM",
      "Shambles",
      "Tact",
      "Counter Shock",
      "Awakening",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "High stamina consumption",
    ],
  },

  "tori-tori": {
    name: "Bird-Bird Fruit: Phoenix",
    japaneseName: "Tori Tori no Mi, Model: Phoenix",
    type: "Mythical Zoan",
    user: "Marco",
    icon: "🦅",
    power: "Phoenix",
    status: "Active",
    description:
      "A Mythical Zoan Devil Fruit that allows its user to transform into a phoenix and use regenerative flames.",
    abilities: [
      "Phoenix Transformation",
      "Regenerative Flames",
      "Flight",
      "Hybrid Form",
      "Enhanced Physical Ability",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "Regeneration has limits",
    ],
  },

  "hito-hito": {
    name: "Human-Human Fruit",
    japaneseName: "Hito Hito no Mi",
    type: "Zoan",
    user: "Tony Tony Chopper",
    icon: "🦌",
    power: "Human Transformation",
    status: "Active",
    description:
      "A Zoan-type Devil Fruit that gives an animal human characteristics and the ability to transform.",
    abilities: [
      "Human Form",
      "Human-Animal Hybrid",
      "Enhanced Intelligence",
      "Multiple Forms",
      "Rumble Ball Techniques",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "Drowning",
    ],
  },

  "ito-ito": {
    name: "String-String Fruit",
    japaneseName: "Ito Ito no Mi",
    type: "Paramecia",
    user: "Donquixote Doflamingo",
    icon: "🧵",
    power: "String",
    status: "Awakened",
    description:
      "A Paramecia-type Devil Fruit that gives its user control over extremely powerful strings.",
    abilities: [
      "String Creation",
      "String Manipulation",
      "Parasite",
      "Birdcage",
      "Awakening",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },

  "nikyu-nikyu": {
    name: "Paw-Paw Fruit",
    japaneseName: "Nikyu Nikyu no Mi",
    type: "Paramecia",
    user: "Bartholomew Kuma",
    icon: "🐾",
    power: "Repulsion",
    status: "Active",
    description:
      "A Paramecia-type Devil Fruit that allows its user to repel objects, attacks, pain and other forces.",
    abilities: [
      "Repulsion",
      "Paw Shockwaves",
      "Pain Extraction",
      "Air Travel",
      "Teleportation",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },

  "suna-suna": {
    name: "Sand-Sand Fruit",
    japaneseName: "Suna Suna no Mi",
    type: "Logia",
    user: "Crocodile",
    icon: "🏜️",
    power: "Sand",
    status: "Active",
    description:
      "A Logia-type Devil Fruit that allows its user to create, control and transform into sand.",
    abilities: [
      "Sand Creation",
      "Sandstorm",
      "Sand Transformation",
      "Moisture Absorption",
      "Desert Techniques",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "Water can affect sand",
    ],
  },

  "magu-magu": {
    name: "Mag-Mag Fruit",
    japaneseName: "Magu Magu no Mi",
    type: "Logia",
    user: "Sakazuki",
    icon: "🌋",
    power: "Magma",
    status: "Active",
    description:
      "A highly destructive Logia-type Devil Fruit that allows the user to create and transform into magma.",
    abilities: [
      "Magma Creation",
      "Magma Fists",
      "Volcanic Attacks",
      "Extreme Heat",
      "Large-Scale Destruction",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },

  "pika-pika": {
    name: "Glint-Glint Fruit",
    japaneseName: "Pika Pika no Mi",
    type: "Logia",
    user: "Borsalino",
    icon: "✨",
    power: "Light",
    status: "Active",
    description:
      "A Logia-type Devil Fruit that allows its user to create, control and transform into light.",
    abilities: [
      "Light Transformation",
      "Light-Speed Movement",
      "Laser Attacks",
      "Light Weapons",
      "Light Projectiles",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },

  "zoan-dragon": {
    name: "Fish-Fish Fruit: Azure Dragon",
    japaneseName: "Uo Uo no Mi, Model: Seiryu",
    type: "Mythical Zoan",
    user: "Kaido",
    icon: "🐉",
    power: "Azure Dragon",
    status: "Active",
    description:
      "A Mythical Zoan that allows its user to transform into a gigantic Azure Dragon and a human-dragon hybrid.",
    abilities: [
      "Dragon Transformation",
      "Flame Clouds",
      "Bolo Breath",
      "Flight",
      "Hybrid Transformation",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },

  "hito-nika": {
    name: "Human-Human Fruit: Nika",
    japaneseName: "Hito Hito no Mi, Model: Nika",
    type: "Mythical Zoan",
    user: "Monkey D. Luffy",
    icon: "☀️",
    power: "Sun God Nika",
    status: "Awakened",
    description:
      "A legendary Mythical Zoan associated with the legendary warrior Nika and Luffy's awakened transformation.",
    abilities: [
      "Gear Fifth",
      "Rubber-like Freedom",
      "Environment Transformation",
      "Extreme Physical Freedom",
      "Awakening",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
      "High stamina consumption",
    ],
  },

  "bara-bara": {
    name: "Chop-Chop Fruit",
    japaneseName: "Bara Bara no Mi",
    type: "Paramecia",
    user: "Buggy",
    icon: "🤡",
    power: "Body Separation",
    status: "Active",
    description:
      "A Paramecia-type Devil Fruit that allows its user to split their body into separate pieces.",
    abilities: [
      "Body Separation",
      "Floating Body Parts",
      "Chop-Chop Attacks",
      "Multi-Directional Attacks",
    ],
    weaknesses: [
      "Standard Devil Fruit weakness",
      "Seastone",
    ],
  },
};

export default function DevilFruitProfile({
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
          <div className="text-6xl">🍎</div>
          <p className="mt-5 text-sm text-white/40">
            Loading Devil Fruit...
          </p>
        </div>
      </main>
    );
  }

  const fruit = fruits[id];

  if (!fruit) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#02070d] px-6 text-white">
        <div className="text-center">
          <div className="text-7xl">🍎</div>

          <h1 className="mt-6 text-4xl font-black">
            Devil Fruit Not Found
          </h1>

          <p className="mt-3 text-white/40">
            This fruit is not available in the One Piece Hub database.
          </p>

          <Link
            href="/devil-fruits"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#f5c451] px-6 py-3 text-sm font-black text-black"
          >
            <ArrowLeft size={17} />
            Back to Devil Fruits
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#02070d] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f5c451]/50 text-xl">
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
            href="/devil-fruits"
            className="flex items-center gap-2 text-sm text-white/40 transition hover:text-[#f5c451]"
          >
            <ArrowLeft size={17} />
            All Devil Fruits
          </Link>

        </div>

      </header>


      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#f5c451]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* FRUIT */}

            <div className="relative">

              <div className="relative mx-auto flex aspect-square max-w-[430px] items-center justify-center overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111923] via-[#060b11] to-black shadow-2xl">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,196,81,0.15),transparent_55%)]" />

                <div className="absolute h-64 w-64 rounded-full bg-[#f5c451]/10 blur-[80px]" />

                <div className="relative text-[170px] drop-shadow-2xl transition duration-500 hover:scale-110">
                  {fruit.icon}
                </div>

              </div>

              {/* TYPE */}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="rounded-full border border-[#f5c451]/30 bg-black/80 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#f5c451] backdrop-blur-xl">
                  {fruit.type}
                </span>
              </div>

            </div>


            {/* INFORMATION */}

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full border border-[#f5c451]/20 bg-[#f5c451]/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#f5c451]">
                  {fruit.status}
                </span>

                <button
                  onClick={() => setFavorite(!favorite)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-[#f5c451]/40"
                >
                  <Heart
                    size={16}
                    className={
                      favorite
                        ? "fill-[#f5c451] text-[#f5c451]"
                        : "text-white/50"
                    }
                  />
                </button>

              </div>


              <p className="mt-7 text-xs font-black uppercase tracking-[0.35em] text-[#f5c451]">
                DEVIL FRUIT DATABASE
              </p>

              <h1 className="mt-3 text-5xl font-black leading-none sm:text-7xl">
                {fruit.name}
              </h1>

              <p className="mt-4 text-lg font-bold text-white/40">
                {fruit.japaneseName}
              </p>


              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                {fruit.description}
              </p>


              {/* QUICK INFO */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center gap-3">
                    <User
                      size={18}
                      className="text-[#f5c451]"
                    />

                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                      Known User
                    </p>
                  </div>

                  <p className="mt-3 font-black">
                    {fruit.user}
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={18}
                      className="text-[#f5c451]"
                    />

                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                      Primary Power
                    </p>
                  </div>

                  <p className="mt-3 font-black">
                    {fruit.power}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INFORMATION SECTIONS */}

      <section className="border-t border-white/10 bg-black/20 px-6 py-16">

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">

          {/* ABILITIES */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5c451]/10">
                <Zap
                  size={20}
                  className="text-[#f5c451]"
                />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#f5c451]">
                  Special Techniques
                </p>

                <h2 className="text-2xl font-black">
                  Abilities
                </h2>
              </div>

            </div>


            <div className="mt-7 space-y-3">

              {fruit.abilities.map((ability, index) => (

                <div
                  key={ability}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5c451]/10 text-xs font-black text-[#f5c451]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold">
                    {ability}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* WEAKNESSES */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10">
                <Shield
                  size={20}
                  className="text-red-400"
                />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-red-400">
                  Limitations
                </p>

                <h2 className="text-2xl font-black">
                  Weaknesses
                </h2>
              </div>

            </div>


            <div className="mt-7 space-y-3">

              {fruit.weaknesses.map((weakness) => (

                <div
                  key={weakness}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                >

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                    <CheckCircle2
                      size={16}
                      className="text-red-400"
                    />
                  </div>

                  <span className="text-sm font-bold text-white/70">
                    {weakness}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CATEGORY */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-[#f5c451]/20 bg-[#f5c451]/5 p-7">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5c451]/10">
                  <Crown
                    size={22}
                    className="text-[#f5c451]"
                  />
                </div>

                <div>

                  <p className="text-[10px] font-black uppercase tracking-widest text-[#f5c451]">
                    Classification
                  </p>

                  <h3 className="mt-1 text-xl font-black">
                    {fruit.type}
                  </h3>

                </div>

              </div>


              <Link
                href="/devil-fruits"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5c451] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
              >
                <ArrowLeft size={15} />
                Explore All Fruits
              </Link>

            </div>

          </div>

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
            Fan-made project • Devil Fruit Database
          </p>

        </div>

      </footer>

    </main>
  );
}