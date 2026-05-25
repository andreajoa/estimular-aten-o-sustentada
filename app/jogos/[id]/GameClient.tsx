"use client";

import { useEffect, useMemo, useState } from "react";

const emojis = ["🐱", "🌟", "🍎", "🚗", "🌈", "🦋", "🎈", "🌸", "🐶", "⭐", "🧩", "🎯"];
const cards = ["🐶", "🐱", "🐭", "🐹", "🦊", "🐻", "🐼", "🐨"];

export default function GameClient({ gameId }: { gameId: string }) {
  if (gameId === "memoria") return <MemoryGame />;
  if (gameId === "relogio") return <ClockGame />;
  return <SearchGame />;
}

function saveProgress(points: number) {
  const current = Number(localStorage.getItem("attention-progress") || "0");
  localStorage.setItem("attention-progress", String(Math.min(100, current + points)));
}

function SearchGame() {
  const [target] = useState(() => emojis[Math.floor(Math.random() * emojis.length)]);
  const items = useMemo(() => [...emojis, target, target].sort(() => Math.random() - 0.5), [target]);
  const [found, setFound] = useState(0);
  const total = items.filter((x) => x === target).length;

  function click(item: string) {
    if (item === target) {
      const next = found + 1;
      setFound(next);
      saveProgress(2);
    }
  }

  return (
    <div className="mt-8">
      <p className="font-bold text-slate-700 mb-4">Encontre todos: <span className="text-4xl">{target}</span> — {found}/{total}</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
        {items.map((item, i) => (
          <button key={i} onClick={() => click(item)} className="aspect-square rounded-2xl bg-white border-2 border-slate-200 text-4xl hover:scale-105 hover:border-indigo-400 transition">
            {item}
          </button>
        ))}
      </div>
      {found >= total && <Result text="Parabéns! Você encontrou todos!" />}
    </div>
  );
}

function MemoryGame() {
  const sequence = useMemo(() => Array.from({ length: 4 }, () => cards[Math.floor(Math.random() * cards.length)]), []);
  const [show, setShow] = useState(true);
  const [answer, setAnswer] = useState<string[]>([]);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const finished = answer.length === sequence.length;
  const correct = finished && JSON.stringify(answer) === JSON.stringify(sequence);

  useEffect(() => {
    if (correct) saveProgress(5);
  }, [correct]);

  return (
    <div className="mt-8">
      {show ? (
        <>
          <p className="font-bold text-slate-700 mb-4">Memorize a sequência:</p>
          <div className="flex flex-wrap gap-3">{sequence.map((c, i) => <div key={i} className="w-16 h-16 rounded-2xl bg-indigo-100 grid place-items-center text-3xl">{c}</div>)}</div>
        </>
      ) : (
        <>
          <p className="font-bold text-slate-700 mb-4">Repita a sequência: {answer.join(" ")}</p>
          <div className="grid grid-cols-4 gap-3">
            {cards.map((c, i) => <button key={i} onClick={() => !finished && setAnswer([...answer, c])} className="rounded-2xl bg-white border-2 border-slate-200 p-4 text-3xl hover:border-indigo-400">{c}</button>)}
          </div>
          {finished && <Result text={correct ? "Muito bem! Sequência correta!" : `Quase! A sequência era ${sequence.join(" ")}`} />}
        </>
      )}
    </div>
  );
}

function ClockGame() {
  const letters = "AABBCCAADDEAAFAAGAAH".split("");
  const correct = letters.map((l, i) => l === "A" ? i : -1).filter(i => i >= 0);
  const [selected, setSelected] = useState<number[]>([]);
  const score = selected.filter(i => correct.includes(i)).length;

  useEffect(() => {
    if (score === correct.length) saveProgress(5);
  }, [score, correct.length]);

  return (
    <div className="mt-8">
      <p className="font-bold text-slate-700 mb-4">Clique em todas as letras A: {score}/{correct.length}</p>
      <div className="flex flex-wrap gap-2">
        {letters.map((l, i) => (
          <button key={i} onClick={() => !selected.includes(i) && setSelected([...selected, i])}
            className={`w-12 h-12 rounded-xl font-bold border-2 ${
              selected.includes(i)
                ? correct.includes(i) ? "bg-green-100 border-green-400 text-green-700" : "bg-red-100 border-red-400 text-red-700"
                : "bg-white border-slate-200"
            }`}>
            {l}
          </button>
        ))}
      </div>
      {score === correct.length && <Result text="Excelente! Você encontrou todas as letras A!" />}
    </div>
  );
}

function Result({ text }: { text: string }) {
  return (
    <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-5 text-center">
      <div className="text-4xl mb-2">🎉</div>
      <p className="font-bold text-green-700">{text}</p>
      <button onClick={() => window.location.reload()} className="btn-primary mt-4">Jogar novamente</button>
    </div>
  );
}
