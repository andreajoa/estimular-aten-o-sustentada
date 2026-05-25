"use client";

import { useState } from "react";

export default function GameClient({ title }: { title: string }) {
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);

  function hit() {
    const next = score + 1;
    setScore(next);
    localStorage.setItem("attention-progress", String(Math.min(100, 68 + next * 3)));
  }

  return (
    <div className="mt-8 rounded-3xl bg-slate-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-black text-slate-800">Pontuação: {score}</div>
        <button onClick={() => { setScore(0); setStarted(false); }} className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-600">Reiniciar</button>
      </div>

      {!started ? (
        <button onClick={() => setStarted(true)} className="w-full rounded-2xl bg-indigo-600 px-6 py-4 font-black text-white">Começar {title}</button>
      ) : (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <button key={i} onClick={hit} className="aspect-square rounded-2xl bg-white text-3xl shadow transition hover:scale-105">
              {["⭐","🔵","🟢","🟣","🧩","🎯"][i % 6]}
            </button>
          ))}
        </div>
      )}

      <p className="mt-4 text-sm text-slate-500">Protótipo funcional: cada clique registra progresso localmente no navegador.</p>
    </div>
  );
}
