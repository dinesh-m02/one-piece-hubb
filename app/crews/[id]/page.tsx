"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Anchor,
  ArrowLeft,
  ArrowRight,
  Crown,
  Heart,
  MapPin,
  Ship,
  Skull,
  Sparkles,
  Swords,
  Users,
} from "lucide-react";

type CrewData = {
  name: string;
  title: string;
  category: string;
  captain: string;
  captainId?: string;
  ship: string;
  members: string;
  territory: string;
  status: string;
  emoji: string;
  color: string;
  description: string;
  history: string;
  strengths: string[];
  commanders: string[];
  notableMembers: string[];
};

const crews: Record<string, CrewData> = {
  "straw-hat": {
    name: "Straw Hat Pirates",
    title: "The New Generation's Rising Crew",
    category: "Pirates",
    captain: "Monkey D. Luffy",
    captainId: "luffy",
    ship: "Thousand Sunny",
    members: "10",
    territory: "Grand Line / New World",
    status: "Active",
    emoji: "👒",
    color: "from-yellow-500/30 to-red-500/10",
    description:
      "The Straw Hat Pirates are a powerful pirate crew led by Monkey D. Luffy. Their journey is centered around freedom, friendship, adventure and reaching the legendary One Piece.",
    history:
      "The crew began in the East Blue and gradually expanded as Luffy recruited unique and powerful companions. After entering the Grand Line, the Straw Hats became involved in major conflicts involving the World Government, powerful pirates and the New World.",
    strengths: [
      "Exceptional teamwork",
      "Strong individual fighters",
      "Advanced combat abilities",
      "Strong loyalty between members",
      "Powerful allies and fleet",
    ],
    commanders: [
      "Roronoa Zoro",
      "Vinsmoke Sanji",
      "Jinbe",
    ],
    notableMembers: [
      "Monkey D. Luffy",
      "Roronoa Zoro",
      "Nami",
      "Usopp",
      "Sanji",
      "Tony Tony Chopper",
      "Nico Robin",
      "Franky",
      "Brook",
      "Jinbe",
    ],
  },

  "red-hair": {
    name: "Red Hair Pirates",
    title: "The Balanced Emperor Crew",
    category: "Emperors",
    captain: "Shanks",
    captainId: "shanks",
    ship: "Red Force",
    members: "10+ core members",
    territory: "New World",
    status: "Active",
    emoji: "🍷",
    color: "from-red-500/30 to-black/20",
    description:
      "The Red Hair Pirates are an influential pirate crew led by one of the Four Emperors, Shanks. The crew is known for its powerful officers and balanced combat strength.",
    history:
      "Shanks formed his own crew after his time with the Roger Pirates. Over the years, the Red Hair Pirates established themselves as one of the most respected and influential crews in the New World.",
    strengths: [
      "Extremely powerful officers",
      "Exceptional Haki users",
      "Strong crew balance",
      "Experienced combatants",
      "Major influence in the New World",
    ],
    commanders: [
      "Benn Beckman",
      "Lucky Roux",
      "Yasopp",
    ],
    notableMembers: [
      "Shanks",
      "Benn Beckman",
      "Lucky Roux",
      "Yasopp",
      "Building Snake",
      "Limejuice",
      "Bonk Punch",
    ],
  },

  blackbeard: {
    name: "Blackbeard Pirates",
    title: "The Dark Emperor Crew",
    category: "Emperors",
    captain: "Marshall D. Teach",
    captainId: "blackbeard",
    ship: "Saber of Xebec",
    members: "10+ core commanders",
    territory: "New World",
    status: "Active",
    emoji: "🌑",
    color: "from-purple-500/30 to-black/30",
    description:
      "The Blackbeard Pirates are led by Marshall D. Teach and have rapidly risen to become one of the most dangerous pirate organizations in the New World.",
    history:
      "Teach began his journey as a member of the Whitebeard Pirates before betraying the crew and beginning his own campaign. His crew expanded rapidly after the events of Impel Down and the Paramount War.",
    strengths: [
      "Multiple powerful Devil Fruit users",
      "Experienced commanders",
      "Strong individual fighters",
      "Large territory",
      "Aggressive expansion",
    ],
    commanders: [
      "Jesus Burgess",
      "Shiryu",
      "Van Augur",
      "Avalo Pizarro",
    ],
    notableMembers: [
      "Marshall D. Teach",
      "Shiryu",
      "Jesus Burgess",
      "Van Augur",
      "Doc Q",
      "Catarina Devon",
      "Sanjuan Wolf",
    ],
  },

  whitebeard: {
    name: "Whitebeard Pirates",
    title: "The Strongest Family",
    category: "Pirates",
    captain: "Edward Newgate",
    ship: "Moby Dick",
    members: "1600+",
    territory: "New World",
    status: "Disbanded",
    emoji: "⚔️",
    color: "from-blue-500/30 to-cyan-500/10",
    description:
      "The Whitebeard Pirates were one of the most powerful pirate crews of the previous era. Edward Newgate considered his crew to be his family.",
    history:
      "Whitebeard built a vast pirate family with numerous divisions and allied crews. The crew played a major role in the Paramount War at Marineford.",
    strengths: [
      "Huge pirate fleet",
      "Powerful division commanders",
      "Strong allies",
      "Exceptional Devil Fruit power",
      "Massive influence",
    ],
    commanders: [
      "Marco",
      "Portgas D. Ace",
      "Jozu",
      "Vista",
    ],
    notableMembers: [
      "Edward Newgate",
      "Marco",
      "Portgas D. Ace",
      "Jozu",
      "Vista",
      "Thatch",
    ],
  },

  beast: {
    name: "Beast Pirates",
    title: "The Animal Kingdom Pirates",
    category: "Pirates",
    captain: "Kaido",
    ship: "Large Pirate Fleet",
    members: "20,000+",
    territory: "Wano Country",
    status: "Disbanded",
    emoji: "🐉",
    color: "from-purple-500/30 to-red-500/10",
    description:
      "The Beast Pirates were a massive pirate organization led by Kaido. Their forces included numerous artificial and natural Devil Fruit users.",
    history:
      "Kaido established a powerful base of operations in Wano Country and built an enormous military force. The crew eventually faced the alliance led by Luffy during the Wano conflict.",
    strengths: [
      "Huge military force",
      "Ancient Zoan users",
      "Powerful All-Stars",
      "Artificial Devil Fruit users",
      "Strong territory control",
    ],
    commanders: [
      "King",
      "Queen",
      "Jack",
    ],
    notableMembers: [
      "Kaido",
      "King",
      "Queen",
      "Jack",
      "Ulti",
      "Page One",
      "Who's-Who",
    ],
  },

  "big-mom": {
    name: "Big Mom Pirates",
    title: "The Totto Land Family",
    category: "Emperors",
    captain: "Charlotte Linlin",
    ship: "Queen Mama Chanter",
    members: "10,000+",
    territory: "Totto Land",
    status: "Active",
    emoji: "🍰",
    color: "from-pink-500/30 to-orange-500/10",
    description:
      "The Big Mom Pirates are a large pirate family led by Charlotte Linlin. Their territory includes the powerful archipelago known as Totto Land.",
    history:
      "Charlotte Linlin built a powerful family-based organization consisting of her children, allies and numerous soldiers. The crew maintained control over Totto Land for many years.",
    strengths: [
      "Large family organization",
      "Powerful Sweet Commanders",
      "Homies",
      "Strong territory",
      "Numerous Devil Fruit users",
    ],
    commanders: [
      "Charlotte Katakuri",
      "Charlotte Smoothie",
      "Charlotte Cracker",
    ],
    notableMembers: [
      "Charlotte Linlin",
      "Charlotte Katakuri",
      "Charlotte Smoothie",
      "Charlotte Cracker",
      "Perospero",
      "Pudding",
    ],
  },

  heart: {
    name: "Heart Pirates",
    title: "The Submarine Pirates",
    category: "Pirates",
    captain: "Trafalgar D. Water Law",
    captainId: "law",
    ship: "Polar Tang",
    members: "21",
    territory: "North Blue / New World",
    status: "Active",
    emoji: "⚕️",
    color: "from-yellow-500/20 to-black/20",
    description:
      "The Heart Pirates are a submarine-based pirate crew led by Trafalgar D. Water Law. Their ship, the Polar Tang, allows them to travel beneath the sea.",
    history:
      "Law formed the Heart Pirates in the North Blue and later entered the Grand Line. The crew became involved in major events in the New World and formed important alliances.",
    strengths: [
      "Submarine operations",
      "Medical knowledge",
      "Strong captain",
      "Tactical combat",
      "Excellent mobility",
    ],
    commanders: [
      "Bepo",
      "Shachi",
      "Penguin",
    ],
    notableMembers: [
      "Trafalgar Law",
      "Bepo",
      "Shachi",
      "Penguin",
      "Jean Bart",
    ],
  },

  kid: {
    name: "Kid Pirates",
    title: "The Magnetic Pirate Crew",
    category: "Pirates",
    captain: "Eustass Kid",
    ship: "Victoria Punk",
    members: "31",
    territory: "South Blue / New World",
    status: "Defeated",
    emoji: "⚡",
    color: "from-red-500/30 to-purple-500/10",
    description:
      "The Kid Pirates are led by Eustass Kid, a powerful pirate from the South Blue. Their crew is known for aggressive combat and powerful magnetic abilities.",
    history:
      "The Kid Pirates entered the Grand Line and eventually reached the New World. Their journey brought them into conflicts with several powerful pirate crews.",
    strengths: [
      "High offensive power",
      "Magnetic abilities",
      "Strong captain",
      "Powerful combatants",
      "Aggressive fighting style",
    ],
    commanders: [
      "Killer",
      "Heat",
      "Wire",
    ],
    notableMembers: [
      "Eustass Kid",
      "Killer",
      "Heat",
      "Wire",
    ],
  },

  "cross-guild": {
    name: "Cross Guild",
    title: "The Pirate Bounty Organization",
    category: "Pirates",
    captain: "Buggy",
    ship: "Cross Guild Fleet",
    members: "Core organization",
    territory: "New World",
    status: "Active",
    emoji: "⚔️",
    color: "from-blue-500/30 to-red-500/10",
    description:
      "Cross Guild is a powerful organization associated with Buggy, Dracule Mihawk and Crocodile. It is known for placing bounties on Marines.",
    history:
      "The organization emerged from the alliance between Buggy, Mihawk and Crocodile. Its unusual structure combines powerful fighters with Buggy's public influence.",
    strengths: [
      "Extremely powerful combatants",
      "Marine bounty system",
      "Strong organization",
      "Major pirate influence",
      "Powerful fleet",
    ],
    commanders: [
      "Dracule Mihawk",
      "Crocodile",
      "Buggy",
    ],
    notableMembers: [
      "Buggy",
      "Dracule Mihawk",
      "Crocodile",
    ],
  },

  roger: {
    name: "Roger Pirates",
    title: "The Pirate King's Crew",
    category: "Pirates",
    captain: "Gol D. Roger",
    ship: "Oro Jackson",
    members: "31",
    territory: "Grand Line",
    status: "Disbanded",
    emoji: "👑",
    color: "from-yellow-500/30 to-orange-500/10",
    description:
      "The Roger Pirates were the legendary crew led by Gol D. Roger, the Pirate King. They were the only known crew to reach Laugh Tale.",
    history:
      "The Roger Pirates traveled through the Grand Line and eventually completed their journey to Laugh Tale. Their voyage became one of the most important events in the history of piracy.",
    strengths: [
      "Legendary captain",
      "Elite crew members",
      "Exceptional Haki users",
      "Great combat ability",
      "Reached Laugh Tale",
    ],
    commanders: [
      "Silvers Rayleigh",
      "Scopper Gaban",
    ],
    notableMembers: [
      "Gol D. Roger",
      "Silvers Rayleigh",
      "Scopper Gaban",
      "Kozuki Oden",
      "Buggy",
      "Shanks",
    ],
  },

  marines: {
    name: "Marines",
    title: "World Government's Military Force",
    category: "Marines",
    captain: "Sakazuki",
    ship: "Marine Warships",
    members: "100,000+",
    territory: "World Government Territories",
    status: "Active",
    emoji: "⚓",
    color: "from-blue-500/30 to-white/10",
    description:
      "The Marines are the World Government's primary military force responsible for maintaining order and pursuing pirates across the seas.",
    history:
      "The Marines have operated across the world for centuries and maintain numerous bases, warships and military personnel.",
    strengths: [
      "Huge military organization",
      "Advanced warships",
      "Powerful officers",
      "World Government support",
      "Global presence",
    ],
    commanders: [
      "Sakazuki",
      "Borsalino",
      "Issho",
      "Aramaki",
    ],
    notableMembers: [
      "Sakazuki",
      "Monkey D. Garp",
      "Kuzan",
      "Borsalino",
      "Smoker",
      "Koby",
    ],
  },

  revolutionary: {
    name: "Revolutionary Army",
    title: "The World's Revolutionary Force",
    category: "Revolutionary",
    captain: "Monkey D. Dragon",
    ship: "Wind Granma",
    members: "10,000+",
    territory: "Worldwide",
    status: "Active",
    emoji: "🔥",
    color: "from-red-500/30 to-orange-500/10",
    description:
      "The Revolutionary Army is an organization working against the World Government. It is led by Monkey D. Dragon.",
    history:
      "The Revolutionary Army operates across many regions and supports movements opposing World Government control. Its members work secretly across the world.",
    strengths: [
      "Worldwide network",
      "Experienced commanders",
      "Strategic operations",
      "Strong intelligence network",
      "Revolutionary influence",
    ],
    commanders: [
      "Sabo",
      "Emporio Ivankov",
      "Karasu",
      "Morley",
    ],
    notableMembers: [
      "Monkey D. Dragon",
      "Sabo",
      "Emporio Ivankov",
      "Koala",
      "Karasu",
      "Morley",
    ],
  },
};

export default function CrewProfilePage({
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
            Loading crew...
          </p>
        </div>
      </main>
    );
  }

  const crew = crews[id];

  if (!crew) {
    return (
      <main className="min-h-screen bg-[#02070d] px-5 py-20 text-white">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/10 text-4xl">
            ☠️
          </div>

          <h1 className="mt-6 text-4xl font-black">
            Crew Not Found
          </h1>

          <p className="mt-3 text-white/40">
            The requested crew is not available in the One Piece Hub
            database.
          </p>

          <Link
            href="/crews"
            className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-2xl bg-[#f5c451] px-6 py-3 text-sm font-black text-black transition hover:bg-[#ffd96d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Crews
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
          className={`absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br ${crew.color} blur-[140px]`}
        />

        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#f5c451]/5 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02070d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link
            href="/crews"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">
              All Crews
            </span>
          </Link>

          <Link
            href="/"
            className="font-black tracking-wide"
          >
            ONE PIECE <span className="text-[#f5c451]">HUB</span>
          </Link>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Skull className="h-5 w-5 text-[#f5c451]" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
          <div
            className={`relative bg-gradient-to-br ${crew.color} p-6 sm:p-10 lg:p-12`}
          >
            <div className="absolute right-5 top-5 text-7xl opacity-10 sm:text-9xl">
              {crew.emoji}
            </div>

            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#f5c451]/20 bg-[#f5c451]/10 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#f5c451]">
                  {crew.category}
                </span>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                    crew.status === "Active"
                      ? "bg-green-500/10 text-green-400"
                      : crew.status === "Disbanded"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {crew.status}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[2rem] border border-white/10 bg-black/30 text-6xl shadow-2xl">
                  {crew.emoji}
                </div>

                <div>
                  <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                    {crew.name}
                  </h1>

                  <p className="mt-3 text-lg font-semibold text-white/50">
                    {crew.title}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
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

                {crew.captainId && (
                  <Link
                    href={`/characters/${crew.captainId}`}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
                  >
                    View Captain
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-2 text-[#f5c451]">
              <Sparkles className="h-5 w-5" />

              <p className="text-xs font-black uppercase tracking-[0.25em]">
                About the Crew
              </p>
            </div>

            <p className="mt-4 max-w-4xl text-base leading-8 text-white/60">
              {crew.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Information */}
      <section className="mx-auto max-w-7xl px-5 py-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={<Crown className="h-5 w-5" />}
            label="Captain"
            value={crew.captain}
          />

          <InfoCard
            icon={<Ship className="h-5 w-5" />}
            label="Main Ship"
            value={crew.ship}
          />

          <InfoCard
            icon={<Users className="h-5 w-5" />}
            label="Members"
            value={crew.members}
          />

          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            label="Territory"
            value={crew.territory}
          />
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-2">
        {/* History */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/10">
              <Anchor className="h-5 w-5 text-[#f5c451]" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5c451]">
                Crew History
              </p>

              <h2 className="mt-1 text-xl font-black">
                Journey Through the Seas
              </h2>
            </div>
          </div>

          <p className="mt-6 text-sm leading-8 text-white/50">
            {crew.history}
          </p>
        </div>

        {/* Strengths */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/10">
              <Swords className="h-5 w-5 text-[#f5c451]" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5c451]">
                Combat Profile
              </p>

              <h2 className="mt-1 text-xl font-black">
                Crew Strengths
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {crew.strengths.map((strength, index) => (
              <div
                key={strength}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5c451]/10 text-xs font-black text-[#f5c451]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="text-sm font-bold text-white/70">
                  {strength}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commanders & Members */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-10 lg:grid-cols-2">
        {/* Commanders */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/10">
              <Crown className="h-5 w-5 text-[#f5c451]" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5c451]">
                Leadership
              </p>

              <h2 className="mt-1 text-xl font-black">
                Commanders
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {crew.commanders.map((commander, index) => (
              <div
                key={commander}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5c451]/10 text-sm">
                    👑
                  </div>

                  <span className="text-sm font-bold text-white/70">
                    {commander}
                  </span>
                </div>

                <span className="text-xs font-black text-white/20">
                  #{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Members */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/10">
              <Users className="h-5 w-5 text-[#f5c451]" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f5c451]">
                Crew Roster
              </p>

              <h2 className="mt-1 text-xl font-black">
                Notable Members
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {crew.notableMembers.map((member) => (
              <div
                key={member}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
                  <Skull className="h-4 w-4 text-white/40" />
                </div>

                <span className="text-sm font-bold text-white/70">
                  {member}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/crews"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-black text-white/70 transition hover:border-[#f5c451]/40 hover:text-[#f5c451]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Crew Database
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

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f5c451]/20 bg-[#f5c451]/10 text-[#f5c451]">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            {label}
          </p>

          <p className="mt-1 truncate text-sm font-black text-white/80">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}