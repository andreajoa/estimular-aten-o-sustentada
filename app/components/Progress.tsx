"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const achievements = [
  { title: "Primeiro Jogo", desc: "Jogou pela primeira vez", emoji: "🌟" },
  { title: "Foco Forte", desc: "Chegou a 50% de progresso", emoji: "🎯" },
  { title: "Explorador", desc: "Testou mais de um jogo", emoji: "🧭" },
  { title: "Constância", desc: "Registrou prática", emoji: "🔥" },
];

export default function Progress() {
  const [progress, setProgress] = useState(35);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    setProgress(Number(localStorage.getItem("attention-progress") || "35"));
    setSessions(Number(localStorage.getItem("attention-sessions") || "0"));
  }, []);

  function addPractice() {
    const nextProgress = Math.min(100, progress + 5);
    const nextSessions = sessions + 1;

    setProgress(nextProgress);
    setSessions(nextSessions);

    localStorage.setItem("attention-progress", String(nextProgress));
    localStorage.setItem("attention-sessions", String(nextSessions));
  }

  function reset() {
    setProgress(35);
    setSessions(0);
    localStorage.setItem("attention-progress", "35");
    localStorage.setItem("attention-sessions", "0");
  }

  return (
    <main className="min-h-screen bg-[#f6f8ff] px-4 py-10 md:px-8 md:py-16">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-6 text-center text-white shadow-2xl md:p-12">
          <div className="text-5xl">📈</div>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Progresso da Criança</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Acompanhe a evolução dos jogos e celebre cada pequena conquista.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/jogos" className="rounded-2xl bg-white px-5 py-3 font-black text-indigo-700">
              🎮 Ir para jogos
            </Link>
            <Link href="/" className="rounded-2xl bg-white/15 px-5 py-3 font-black text-white ring-1 ring-white/30">
              Voltar ao início
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white/60">Progresso atual</p>
                <h2 className="mt-2 text-6xl font-black">{progress}%</h2>
                <p className="mt-2 text-white/70">
                  {sessions} sessão{sessions === 1 ? "" : "ões"} registrada{sessions === 1 ? "" : "s"}.
                </p>
              </div>
              <div className="text-6xl">🏆</div>
            </div>

            <div className="mt-8 h-5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button onClick={addPractice} className="rounded-2xl bg-white px-5 py-4 font-black text-slate-950">
                + Registrar prática
              </button>
              <button onClick={reset} className="rounded-2xl bg-white/10 px-5 py-4 font-black text-white ring-1 ring-white/20">
                Reiniciar progresso
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl md:p-8">
            <h3 className="text-2xl font-black text-slate-950">Resumo</h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-indigo-50 p-5">
                <div className="text-3xl">🧠</div>
                <div className="mt-2 text-2xl font-black text-indigo-700">{progress >= 70 ? "Excelente" : progress >= 50 ? "Bom avanço" : "Em desenvolvimento"}</div>
                <p className="text-sm text-slate-600">Nível atual de prática</p>
              </div>
              <div className="rounded-3xl bg-emerald-50 p-5">
                <div className="text-3xl">✅</div>
                <div className="mt-2 text-2xl font-black text-emerald-700">{sessions}</div>
                <p className="text-sm text-slate-600">Práticas registradas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {achievements.map((a, i) => {
            const unlocked = i === 0 || progress >= 50 + i * 10;
            return (
              <div
                key={a.title}
                className={`rounded-[2rem] border p-6 text-center shadow-lg ${
                  unlocked ? "border-indigo-100 bg-white" : "border-slate-100 bg-white/60 opacity-60"
                }`}
              >
                <div className="text-4xl">{a.emoji}</div>
                <h3 className="mt-3 font-black text-slate-950">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{a.desc}</p>
                <div className={`mt-4 rounded-full px-3 py-2 text-xs font-black ${
                  unlocked ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"
                }`}>
                  {unlocked ? "Desbloqueada" : "Bloqueada"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-xl md:p-8">
          <h3 className="text-2xl font-black text-slate-950">Sugestão para hoje</h3>
          <p className="mt-2 text-slate-600">
            Faça uma rodada curta de 5 a 10 minutos. O objetivo não é acertar tudo, é praticar atenção com leveza.
          </p>
          <Link href="/jogos" className="mt-5 inline-block rounded-2xl bg-slate-950 px-6 py-4 font-black text-white">
            Começar agora
          </Link>
        </div>
      </section>
    </main>
  );
}
