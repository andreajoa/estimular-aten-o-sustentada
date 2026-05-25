"use client";

import Link from "next/link";
import { useState } from "react";

const tips = [
  { title: "Tempo Ideal", emoji: "⏰", color: "from-sky-400 to-cyan-500", items: ["Comece com 5–10 minutos", "Faça pausas curtas", "Pare antes da criança cansar"] },
  { title: "Ambiente Calmo", emoji: "🏡", color: "from-emerald-400 to-green-500", items: ["Evite barulho e distrações", "Deixe só o material necessário", "Use luz confortável"] },
  { title: "Motivação", emoji: "🌟", color: "from-amber-400 to-orange-500", items: ["Elogie o esforço", "Celebre pequenas vitórias", "Não cobre perfeição"] },
  { title: "Rotina", emoji: "🔁", color: "from-pink-400 to-rose-500", items: ["Pratique um pouco por dia", "Use horários parecidos", "Crie previsibilidade"] },
  { title: "Objetivos Simples", emoji: "🎯", color: "from-indigo-400 to-purple-500", items: ["Uma habilidade por vez", "Metas pequenas", "Aumente a dificuldade aos poucos"] },
  { title: "Família e Escola", emoji: "🤝", color: "from-violet-400 to-fuchsia-500", items: ["Compartilhe evolução", "Combine estratégias", "Busque apoio quando necessário"] },
];

const faqs = [
  ["Quanto tempo por dia?", "Comece com 5 a 10 minutos. O mais importante é a constância, não a duração."],
  ["E se a criança se frustrar?", "Pare, acolha e volte para uma etapa mais fácil. O objetivo é treinar com leveza."],
  ["Quando aparecem resultados?", "Normalmente os primeiros sinais surgem após algumas semanas de prática regular."],
  ["Serve para crianças sem TDAH?", "Sim. As atividades também ajudam concentração, memória e autocontrole."],
];

export default function Tips() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#f6f8ff] px-4 py-10 md:px-8 md:py-16">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-6 text-center text-white shadow-2xl md:p-12">
          <div className="text-5xl">💡</div>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">Dicas para o Sucesso</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Orientações simples para pais e educadores ajudarem a criança a praticar com calma, foco e motivação.
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

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {tips.map((tip) => (
            <article key={tip.title} className="rounded-[2rem] bg-white p-6 shadow-xl">
              <div className={`grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${tip.color} text-3xl text-white shadow-lg`}>
                {tip.emoji}
              </div>
              <h2 className="mt-5 text-2xl font-black text-slate-950">{tip.title}</h2>
              <ul className="mt-4 space-y-3">
                {tip.items.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                    <span className="text-indigo-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl md:p-8">
            <div className="text-5xl">❤️</div>
            <h2 className="mt-4 text-3xl font-black">Lembre-se</h2>
            <p className="mt-3 text-white/75">
              A criança não precisa acertar tudo. O que transforma é repetir com acolhimento, rotina e incentivo.
            </p>
            <Link href="/progresso" className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-black text-slate-950">
              Ver progresso
            </Link>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl md:p-8">
            <h2 className="text-3xl font-black text-slate-950">Perguntas frequentes</h2>
            <div className="mt-5 space-y-3">
              {faqs.map(([q, a], i) => (
                <button
                  key={q}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 p-4 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-black text-slate-800">{q}</span>
                    <span className="text-xl font-black text-indigo-600">{open === i ? "−" : "+"}</span>
                  </div>
                  {open === i && <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-center text-white shadow-xl md:p-10">
          <div className="text-4xl">🌈</div>
          <h2 className="mt-3 text-2xl font-black md:text-4xl">Pratique pouco, mas pratique sempre.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Uma experiência leve e positiva ajuda muito mais do que uma sessão longa e cansativa.
          </p>
        </div>
      </section>
    </main>
  );
}
