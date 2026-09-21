"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Skull,
  Trophy,
} from "lucide-react";

const questions = [
  {
    question: "Who is the captain of the Straw Hat Pirates?",
    options: ["Zoro", "Luffy", "Sanji", "Shanks"],
    answer: 1,
  },
  {
    question: "What is Luffy's dream?",
    options: [
      "Become Admiral",
      "Find Vegapunk",
      "Become Pirate King",
      "Rule Wano",
    ],
    answer: 2,
  },
  {
    question: "Which Devil Fruit did Luffy eat?",
    options: [
      "Mera Mera",
      "Gomu Gomu",
      "Ope Ope",
      "Yami Yami",
    ],
    answer: 1,
  },
  {
    question: "Who is the world's greatest swordsman?",
    options: ["Shanks", "Vista", "Mihawk", "Zoro"],
    answer: 2,
  },
  {
    question: "What ship do the Straw Hats use?",
    options: [
      "Red Force",
      "Moby Dick",
      "Thousand Sunny",
      "Polar Tang",
    ],
    answer: 2,
  },
  {
    question: "Where did Gol D. Roger reach?",
    options: [
      "Marineford",
      "Egghead",
      "Laugh Tale",
      "Dressrosa",
    ],
    answer: 2,
  },
  {
    question: "Who is the navigator of the crew?",
    options: ["Robin", "Nami", "Vivi", "Yamato"],
    answer: 1,
  },
  {
    question: "Which island is called the Future Island?",
    options: ["Wano", "Zou", "Egghead", "Sabaody"],
    answer: 2,
  },
  {
    question: "Who leads the Revolutionary Army?",
    options: ["Sabo", "Garp", "Dragon", "Akainu"],
    answer: 2,
  },
  {
    question: "How many members are in the Straw Hat crew?",
    options: ["8", "9", "10", "11"],
    answer: 2,
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  function nextQuestion() {
    if (selected === q.answer) setScore(score + 1);

    if (current + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  const finalScore =
    finished && selected === questions[questions.length - 1].answer
      ? score + 1
      : score;

  const percent = ((current + 1) / questions.length) * 100;

  const rank =
    finalScore >= 9
      ? "🏆 S Rank"
      : finalScore >= 8
      ? "🥇 A Rank"
      : finalScore >= 6
      ? "🥈 B Rank"
      : finalScore >= 4
      ? "🥉 C Rank"
      : "💀 F Rank";

  if (finished) {
    return (
      <main className="min-h-screen bg-[#02070d] text-white flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-3xl border border-yellow-500/20 bg-white/5 p-8 text-center">
          <Trophy className="mx-auto h-16 w-16 text-yellow-400" />

          <h1 className="mt-4 text-4xl font-black">
            Quiz Complete!
          </h1>

          <p className="mt-2 text-white/50">
            Your One Piece knowledge score
          </p>

          <div className="my-8 text-7xl font-black text-yellow-400">
            {finalScore}/10
          </div>

          <div className="text-2xl font-bold">
            {rank}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              onClick={restart}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 py-3 font-bold hover:border-yellow-400"
            >
              <RotateCcw className="h-5 w-5" />
              Restart
            </button>

            <Link
              href="/"
              className="flex items-center justify-center rounded-2xl bg-yellow-400 py-3 font-black text-black"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#02070d] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-yellow-400"
          >
            <ArrowLeft className="h-5 w-5" />
            Home
          </Link>

          <div className="flex items-center gap-2 font-black">
            <Skull className="h-5 w-5 text-yellow-400" />
            ONE PIECE QUIZ
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-10">
        {/* Progress */}
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm">
            <span>
              Question {current + 1} / {questions.length}
            </span>
            <span>
              Score: {score}
            </span>
          </div>

          <div className="h-3 rounded-full bg-white/10">
            <div
              className="h-3 rounded-full bg-yellow-400 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black leading-tight">
            {q.question}
          </h2>

          <div className="mt-8 space-y-4">
            {q.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`w-full rounded-2xl border p-4 text-left font-bold transition ${
                  selected === index
                    ? "border-yellow-400 bg-yellow-400/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    {String.fromCharCode(65 + index)}
                  </div>

                  {option}

                  {selected === index && (
                    <CheckCircle2 className="ml-auto h-5 w-5 text-yellow-400" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <button
            disabled={selected === null}
            onClick={nextQuestion}
            className="mt-8 w-full rounded-2xl bg-yellow-400 py-4 font-black text-black disabled:opacity-40"
          >
            {current === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      </section>
    </main>
  );
}