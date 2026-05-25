"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const activities = [
  { id: "caca-aos-detalhes", emoji: "🔎", title: "Caça aos Detalhes", level: "Fácil", time: "10–15 min", desc: "Encontre elementos específicos para treinar atenção visual, foco e concentração.", color: "from-emerald-400 to-teal-500" },
  { id: "memoria-sequencial", emoji: "🧠", title: "Memória Sequencial", level: "Médio", time: "8–12 min", desc: "Repita sequências para fortalecer memória de trabalho e atenção sustentada.", color: "from-indigo-400 to-violet-500" },
  { id: "desafio-relogio", emoji: "⏱️", title: "Desafio do Relógio", level: "Médio", time: "5–10 min", desc: "Complete tarefas contra o tempo mantendo foco e controle inibitório.", color: "from-orange-400 to-rose-500" },
  { id: "historia-interrompida", emoji: "📖", title: "História Interrompida", level: "Fácil", time: "10–20 min", desc: "Leia pequenas histórias com pausas para estimular compreensão e retomada de atenção.", color: "from-pink-400 to-fuchsia-500" },
  { id: "sequencia-comandos", emoji: "🎯", title: "Sequência de Comandos", level: "Avançado", time: "5–15 min", desc: "Siga comandos progressivos para treinar planejamento e função executiva.", color: "from-purple-400 to-indigo-600" },
];

const games = [
  { id: "caca-aos-detalhes", emoji: "🔎", title: "Caça aos Detalhes", desc: "Encontre objetos escondidos" },
  { id: "memoria-sequencial", emoji: "🧠", title: "Memória Sequencial", desc: "Repita a sequência correta" },
  { id: "desafio-relogio", emoji: "⏱️", title: "Desafio do Relógio", desc: "Complete tarefas no tempo" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-400 text-xl text-white shadow-lg">🧠</div>
          <div>
            <div className="text-sm font-black leading-none text-slate-950">Atenção em Foco</div>
            <div className="text-xs font-medium text-slate-500">Atividades TDAH</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 md:flex">
          <Link href="/jogos">Jogos</Link>
          <Link href="/progresso">Progresso</Link>
          <Link href="/dicas">Dicas</Link>
        </nav>
      </div>
    </header>
  );
}

function Title({ tag, title, sub }: { tag: string; title: string; sub: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <div className="mb-3 inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-bold text-indigo-600 shadow-sm">{tag}</div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">{sub}</p>
    </div>
  );
}

function levelClass(level: string) {
  if (level === "Fácil") return "bg-emerald-100 text-emerald-700";
  if (level === "Médio") return "bg-amber-100 text-amber-700";
  return "bg-rose-100 text-rose-700";
}

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-[#f6f8ff] text-slate-900">
      <Nav />

      <section className="relative overflow-hidden px-4 py-14 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,.28),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.25),transparent_26%),linear-gradient(135deg,#6547ff_0%,#8b5cf6_42%,#22d3ee_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur">✅ Baseado em evidências científicas</div>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">Atividades para <span className="block text-cyan-200">estimular a atenção</span></h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">Material interativo para pais e educadores, com atividades práticas, jogos online, progresso e orientações para aplicar em casa ou na escola.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link href="/jogos" className="rounded-2xl bg-white px-7 py-4 font-black text-indigo-700 shadow-xl">🎮 Jogar agora</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/30 bg-white/20 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div><div className="text-sm font-black">Sessão de hoje</div><div className="text-xs text-slate-500">12 minutos de treino</div></div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">+15%</div>
              </div>
              <div className="mb-5 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" /></div>
              <div className="grid gap-3">
                {games.map(g => (
                  <Link href={`/jogos/${g.id}`} key={g.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-100 text-xl">{g.emoji}</div>
                    <div className="flex-1">
                      <div className="text-sm font-black">{g.title}</div>
                      <div className="text-xs text-slate-500">Abrir jogo interativo</div>
                    </div>
                    <span className="text-indigo-500">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GamesSection />
      <ProgressSection />
      <TipsSection />

      <footer className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-indigo-600 to-cyan-500 p-8 text-center text-white shadow-2xl md:p-12">
          <div className="mb-3 text-4xl">💜</div>
          <h2 className="text-2xl font-black md:text-4xl">O mais importante não é a perfeição.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">É o treino contínuo, acolhedor e motivador que faz diferença no desenvolvimento da atenção.</p>
        </div>
      </footer>
    </main>
  );
}

export function ActivitiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <Title tag="✨ Programa completo" title="5 atividades essenciais" sub="Cards claros, modernos e clicáveis, com hierarquia visual e leitura fácil no celular." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {activities.map(a => (
          <Link href={`/atividades/${a.id}`} key={a.id} className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1">
            <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${a.color} text-2xl text-white shadow-lg`}>{a.emoji}</div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${levelClass(a.level)}`}>{a.level}</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">{a.time}</span>
            </div>
            <h3 className="text-xl font-black text-slate-950">{a.title}</h3>
            <p className="mt-2 min-h-[54px] text-sm leading-relaxed text-slate-600">{a.desc}</p>
            <div className="mt-5 rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-black text-white group-hover:bg-indigo-600">Ver atividade →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function GamesSection() {
  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Title tag="🎮 Modo interativo" title="Jogos que parecem aplicativo" sub="A criança clica, joga e recebe feedback visual." />
        <div className="grid gap-5 md:grid-cols-3">
          {games.map(g => (
            <Link href={`/jogos/${g.id}`} key={g.id} className="rounded-[1.75rem] border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1">
              <div className="mb-10 flex justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-100 text-2xl text-indigo-600">{g.emoji}</div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-700">Jogar</span>
              </div>
              <h3 className="text-xl font-black">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{g.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgressSection() {
  const [progress, setProgress] = useState(68);
  useEffect(() => {
    const saved = localStorage.getItem("attention-progress");
    if (saved) setProgress(Number(saved));
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <Title tag="📈 Evolução" title="Painel de progresso limpo" sub="Menos informação jogada na tela e mais sensação de conquista real." />
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl">
          <div className="flex items-center justify-between"><div><div className="text-sm font-bold text-white/60">Progresso atual</div><div className="mt-1 text-5xl font-black">{progress}%</div></div><div className="text-5xl">🏆</div></div>
          <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400" style={{ width: `${progress}%` }} /></div>
          <button onClick={() => { const n = Math.min(100, progress + 5); setProgress(n); localStorage.setItem("attention-progress", String(n)); }} className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950">Registrar prática de hoje</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Primeira descoberta", "Semana perfeita", "Mestre da atenção", "Consistência"].map(item => (
            <div className="rounded-[1.5rem] border border-indigo-100 bg-white p-5 shadow-lg" key={item}>
              <div className="mb-4 text-3xl">⭐</div><div className="font-black">{item}</div><div className="mt-1 text-sm text-slate-500">Conquista desbloqueável</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TipsSection() {
  const tips = ["Tempo ideal", "Ambiente acolhedor", "Motivação", "Consistência", "Foco nos objetivos", "Colaboração"];
  return (
    <section className="bg-slate-950 px-4 py-14 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Title tag="💡 Orientação para adultos" title="Dicas essenciais para o sucesso" sub="Conteúdo organizado em blocos práticos, fácil de ler no celular." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tips.map(t => (
            <div key={t} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">✓</div>
              <h3 className="text-lg font-black">{t}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Comece de forma simples</li>
                <li>• Respeite o ritmo da criança</li>
                <li>• Celebre pequenos avanços</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Nav, activities, games };
