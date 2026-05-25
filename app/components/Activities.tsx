"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const activities = [
  {
    id: "caca-aos-detalhes",
    title: "Caça aos Detalhes",
    level: "Fácil",
    time: "10–15 min",
    emoji: "🔎",
    color: "from-emerald-400 to-teal-500",
    desc: "A criança encontra elementos específicos em uma cena divertida.",
    objective: "Treinar atenção visual, foco e concentração.",
    steps: ["Escolha uma cena", "Mostre o alvo", "A criança procura", "Celebre cada acerto"],
  },
  {
    id: "memoria-sequencial",
    title: "Memória Sequencial",
    level: "Médio",
    time: "8–12 min",
    emoji: "🧠",
    color: "from-indigo-400 to-violet-500",
    desc: "A criança memoriza uma sequência e tenta repetir na mesma ordem.",
    objective: "Fortalecer memória de trabalho e atenção sustentada.",
    steps: ["Mostre a sequência", "Espere desaparecer", "Repita na ordem", "Aumente o desafio"],
  },
  {
    id: "desafio-relogio",
    title: "Desafio do Relógio",
    level: "Médio",
    time: "5–10 min",
    emoji: "⏱️",
    color: "from-orange-400 to-rose-500",
    desc: "A criança completa uma tarefa antes do tempo acabar.",
    objective: "Estimular foco, velocidade e controle inibitório.",
    steps: ["Explique a regra", "Inicie o tempo", "Clique nos itens", "Veja o resultado"],
  },
  {
    id: "historia-interrompida",
    title: "História Interrompida",
    level: "Fácil",
    time: "10–20 min",
    emoji: "📖",
    color: "from-pink-400 to-fuchsia-500",
    desc: "A criança acompanha uma história curta e responde perguntas.",
    objective: "Melhorar atenção auditiva, compreensão e retomada de foco.",
    steps: ["Leia o trecho", "Faça uma pausa", "Pergunte algo", "Continue a história"],
  },
  {
    id: "sequencia-comandos",
    title: "Sequência de Comandos",
    level: "Avançado",
    time: "5–15 min",
    emoji: "🎯",
    color: "from-purple-400 to-indigo-600",
    desc: "A criança segue comandos em etapas progressivas.",
    objective: "Trabalhar planejamento, autocontrole e função executiva.",
    steps: ["Dê 1 comando", "Aumente para 2", "Depois 3 etapas", "Registre evolução"],
  },
];

function levelStyle(level: string) {
  if (level === "Fácil") return "bg-emerald-100 text-emerald-700";
  if (level === "Médio") return "bg-amber-100 text-amber-700";
  return "bg-rose-100 text-rose-700";
}

export default function Activities() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(JSON.parse(localStorage.getItem("completed-activities") || "[]"));
  }, []);

  function toggleComplete(id: string) {
    const next = completed.includes(id)
      ? completed.filter((x) => x !== id)
      : [...completed, id];

    setCompleted(next);
    localStorage.setItem("completed-activities", JSON.stringify(next));
    localStorage.setItem("attention-progress", String(Math.min(100, 35 + next.length * 10)));
  }

  return (
    <main className="min-h-screen bg-[#f6f8ff] px-4 py-10 md:px-8 md:py-16">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-6 text-center text-white shadow-2xl md:p-12">
          <div className="text-5xl">✨</div>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Atividades Essenciais</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Escolha uma atividade, veja o passo a passo e marque o progresso da criança.
          </p>
          <Link href="/" className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-black text-indigo-700">
            Voltar para início
          </Link>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-5 text-center shadow-lg">
            <div className="text-3xl font-black text-indigo-600">{activities.length}</div>
            <div className="text-sm font-bold text-slate-500">atividades</div>
          </div>
          <div className="rounded-[2rem] bg-white p-5 text-center shadow-lg">
            <div className="text-3xl font-black text-emerald-600">{completed.length}</div>
            <div className="text-sm font-bold text-slate-500">concluídas</div>
          </div>
          <div className="rounded-[2rem] bg-white p-5 text-center shadow-lg">
            <div className="text-3xl font-black text-cyan-600">{Math.round((completed.length / activities.length) * 100)}%</div>
            <div className="text-sm font-bold text-slate-500">progresso</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {activities.map((activity) => {
            const done = completed.includes(activity.id);

            return (
              <article
                key={activity.id}
                className={`overflow-hidden rounded-[2rem] border bg-white shadow-xl transition hover:-translate-y-1 ${
                  done ? "border-emerald-200" : "border-slate-100"
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${activity.color}`} />

                <div className="p-5 md:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-gradient-to-br ${activity.color} text-4xl text-white shadow-lg`}>
                      {activity.emoji}
                    </div>

                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${levelStyle(activity.level)}`}>
                          {activity.level}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                          ⏱ {activity.time}
                        </span>
                        {done && (
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                            ✓ Concluída
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl font-black text-slate-950">{activity.title}</h2>
                      <p className="mt-2 text-slate-600">{activity.desc}</p>

                      <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                        <div className="text-sm font-black text-slate-800">Objetivo</div>
                        <p className="mt-1 text-sm text-slate-600">{activity.objective}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {activity.steps.map((step, index) => (
                      <div key={step} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="text-xs font-black text-indigo-600">PASSO {index + 1}</div>
                        <div className="mt-1 font-bold text-slate-700">{step}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/atividades/${activity.id}`}
                      className="flex-1 rounded-2xl bg-slate-950 px-5 py-3 text-center font-black text-white"
                    >
                      Ver detalhes
                    </Link>

                    <Link
                      href="/jogos"
                      className="flex-1 rounded-2xl bg-indigo-100 px-5 py-3 text-center font-black text-indigo-700"
                    >
                      Praticar no jogo
                    </Link>

                    <button
                      onClick={() => toggleComplete(activity.id)}
                      className={`flex-1 rounded-2xl px-5 py-3 font-black ${
                        done
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-cyan-500 text-white"
                      }`}
                    >
                      {done ? "✓ Feita" : "Marcar feita"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
