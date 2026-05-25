"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const games = [
  {
    id: "caca",
    title: "Caça aos Detalhes",
    emoji: "🔎",
    desc: "Encontre o bichinho ou objeto certo.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "memoria",
    title: "Memória Sequencial",
    emoji: "🧠",
    desc: "Memorize e repita a sequência.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    id: "relogio",
    title: "Desafio do Relógio",
    emoji: "⏱️",
    desc: "Clique nas letras certas com atenção.",
    color: "from-orange-400 to-pink-500",
  },
];

const items = ["🐶", "🐱", "🦊", "🐼", "🌟", "🍎", "🚗", "🎈", "🦋", "🌸", "🧩", "🎯"];
const cards = ["🐶", "🐱", "🐭", "🐹", "🦊", "🐻", "🐼", "🐨"];

function saveProgress(points: number) {
  const current = Number(localStorage.getItem("attention-progress") || "35");
  localStorage.setItem("attention-progress", String(Math.min(100, current + points)));
}

function SearchGame() {
  const [target] = useState(() => items[Math.floor(Math.random() * items.length)]);
  const board = useMemo(() => [...items, target, target].sort(() => Math.random() - 0.5), [target]);
  const total = board.filter((x) => x === target).length;
  const [found, setFound] = useState(0);

  function click(item: string) {
    if (item === target && found < total) {
      const next = found + 1;
      setFound(next);
      saveProgress(2);
    }
  }

  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-xl">
      <div className="mb-5 rounded-3xl bg-emerald-50 p-5 text-center">
        <p className="text-sm font-bold text-emerald-700">Encontre todos iguais a este:</p>
        <div className="mt-2 text-6xl">{target}</div>
        <p className="mt-2 font-black text-slate-800">{found}/{total} encontrados</p>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
        {board.map((item, i) => (
          <button
            key={i}
            onClick={() => click(item)}
            className="aspect-square rounded-3xl border-2 border-slate-100 bg-slate-50 text-4xl shadow-sm transition hover:scale-105 hover:border-emerald-300 active:scale-95"
          >
            {item}
          </button>
        ))}
      </div>

      {found >= total && <Success />}
    </div>
  );
}

function MemoryGame() {
  const sequence = useMemo(() => Array.from({ length: 4 }, () => cards[Math.floor(Math.random() * cards.length)]), []);
  const [show, setShow] = useState(true);
  const [answer, setAnswer] = useState<string[]>([]);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(t);
  }, []);

  const finished = answer.length === sequence.length;
  const correct = finished && JSON.stringify(answer) === JSON.stringify(sequence);

  useEffect(() => {
    if (correct) saveProgress(8);
  }, [correct]);

  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-xl">
      {show ? (
        <div className="text-center">
          <p className="mb-4 font-black text-slate-800">Memorize a sequência:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sequence.map((c, i) => (
              <div key={i} className="grid h-20 w-20 place-items-center rounded-3xl bg-indigo-100 text-4xl shadow">
                {c}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-bold text-slate-500">Vai desaparecer em alguns segundos...</p>
        </div>
      ) : (
        <>
          <p className="mb-3 text-center font-black text-slate-800">
            Repita a sequência: {answer.join(" ")}
          </p>

          <div className="grid grid-cols-4 gap-3">
            {cards.map((c, i) => (
              <button
                key={i}
                disabled={finished}
                onClick={() => setAnswer([...answer, c])}
                className="rounded-3xl border-2 border-slate-100 bg-slate-50 p-4 text-4xl shadow-sm transition hover:scale-105 hover:border-indigo-300 active:scale-95"
              >
                {c}
              </button>
            ))}
          </div>

          {finished && (
            correct ? <Success /> : (
              <div className="mt-5 rounded-3xl bg-rose-50 p-5 text-center">
                <div className="text-4xl">🙂</div>
                <p className="mt-2 font-black text-rose-700">Quase! Tente novamente.</p>
                <p className="text-sm text-slate-500">Sequência correta: {sequence.join(" ")}</p>
                <button onClick={() => location.reload()} className="mt-4 rounded-2xl bg-slate-950 px-5 py-3 font-black text-white">
                  Jogar de novo
                </button>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}

function ClockGame() {
  const letters = "AABBCCAADDEAAFAAGAAH".split("");
  const correct = letters.map((l, i) => (l === "A" ? i : -1)).filter((i) => i >= 0);
  const [selected, setSelected] = useState<number[]>([]);
  const score = selected.filter((i) => correct.includes(i)).length;

  useEffect(() => {
    if (score === correct.length) saveProgress(8);
  }, [score, correct.length]);

  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-xl">
      <div className="mb-5 rounded-3xl bg-orange-50 p-5 text-center">
        <p className="font-black text-slate-800">Clique em todas as letras</p>
        <div className="mt-2 text-6xl font-black text-orange-500">A</div>
        <p className="mt-2 font-black text-slate-700">{score}/{correct.length}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {letters.map((l, i) => (
          <button
            key={i}
            onClick={() => !selected.includes(i) && setSelected([...selected, i])}
            className={`h-14 w-14 rounded-2xl border-2 text-xl font-black transition active:scale-95 ${
              selected.includes(i)
                ? correct.includes(i)
                  ? "border-green-400 bg-green-100 text-green-700"
                  : "border-red-400 bg-red-100 text-red-700"
                : "border-slate-100 bg-slate-50 text-slate-700 hover:border-orange-300"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {score === correct.length && <Success />}
    </div>
  );
}

function Success() {
  return (
    <div className="mt-5 rounded-3xl bg-green-50 p-5 text-center">
      <div className="text-5xl">🎉</div>
      <p className="mt-2 text-xl font-black text-green-700">Muito bem!</p>
      <p className="text-sm text-slate-500">Você treinou sua atenção.</p>
      <button onClick={() => location.reload()} className="mt-4 rounded-2xl bg-slate-950 px-5 py-3 font-black text-white">
        Jogar de novo
      </button>
    </div>
  );
}

export default function Games() {
  const [active, setActive] = useState("caca");

  const current = games.find((g) => g.id === active)!;

  return (
    <main className="min-h-screen bg-[#f6f8ff] px-4 py-10 md:px-8 md:py-16">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-6 text-center text-white shadow-2xl md:p-12">
          <div className="text-5xl">🎮</div>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Jogos Interativos</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Escolha um jogo, pratique atenção e desbloqueie progresso de forma divertida.
          </p>
          <Link href="/" className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-black text-indigo-700">
            Voltar para início
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-4">
            {games.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`w-full rounded-[2rem] p-5 text-left shadow-lg transition ${
                  active === g.id
                    ? "bg-slate-950 text-white scale-[1.02]"
                    : "bg-white text-slate-800 hover:scale-[1.01]"
                }`}
              >
                <div className={`mb-4 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${g.color} text-3xl`}>
                  {g.emoji}
                </div>
                <h2 className="text-xl font-black">{g.title}</h2>
                <p className={`mt-1 text-sm ${active === g.id ? "text-white/70" : "text-slate-500"}`}>
                  {g.desc}
                </p>
              </button>
            ))}
          </aside>

          <section>
            <div className="mb-5 rounded-[2rem] bg-white p-5 shadow-lg">
              <div className={`mb-4 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${current.color} text-3xl text-white`}>
                {current.emoji}
              </div>
              <h2 className="text-3xl font-black text-slate-950">{current.title}</h2>
              <p className="mt-1 text-slate-500">{current.desc}</p>
            </div>

            {active === "caca" && <SearchGame />}
            {active === "memoria" && <MemoryGame />}
            {active === "relogio" && <ClockGame />}
          </section>
        </div>
      </section>
    </main>
  );
}
