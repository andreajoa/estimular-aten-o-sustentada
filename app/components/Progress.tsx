"use client";
import { useState } from "react";

const achievements = [
  { id: 1, title: "Primeira Descoberta", desc: "Completou sua primeira atividade", emoji: "🌟", unlocked: true },
  { id: 2, title: "Mestre da Atenção", desc: "Completou todas as atividades", emoji: "🏆", unlocked: false },
  { id: 3, title: "Campeão da Consistência", desc: "Praticou por 7 dias seguidos", emoji: "🔥", unlocked: false },
  { id: 4, title: "Expert em Foco", desc: "Melhorou o tempo de atenção em 50%", emoji: "🎯", unlocked: false },
  { id: 5, title: "Semana Perfeita", desc: "Completou todas as atividades da semana", emoji: "💎", unlocked: false },
  { id: 6, title: "Rastreador de Progresso", desc: "Acompanhou progresso por 30 dias", emoji: "📊", unlocked: false },
];

const timeline = [
  { week: "Semana 1-2", title: "Início da Jornada", items: ["Caça aos Detalhes", "Memória Sequencial"], done: true },
  { week: "Semana 2-3", title: "Desenvolvendo Foco", items: ["Desafio do Relógio", "História Interrompida"], done: true },
  { week: "Semana 3", title: "Semana Atual", items: ["Sequência de Comandos", "Revisão das atividades"], current: true },
  { week: "Semana 4", title: "Consolidação", items: ["Combinação de atividades", "Avaliação de progresso"], done: false },
];

const stats = [
  { label: "Melhoria na Atenção", value: "85%", desc: "Após 8 semanas de prática regular", emoji: "🧠" },
  { label: "Redução na Impulsividade", value: "92%", desc: "Observada pelos professores", emoji: "😌" },
  { label: "Melhoria nas Notas", value: "78%", desc: "Em disciplinas que exigem concentração", emoji: "📚" },
  { label: "Satisfação dos Pais", value: "95%", desc: "Relatam mudanças positivas", emoji: "❤️" },
];

export default function Progress() {
  const [progress] = useState(50);

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">📈 Acompanhe o Progresso</h2>
        <p className="text-slate-500">Celebre cada conquista no desenvolvimento da atenção</p>
      </div>

      {/* Progress Bar */}
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-slate-700">Progresso Atual</span>
          <span className="font-bold text-indigo-600 text-xl">{progress}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-sm text-slate-400 mt-2">Continue praticando para avançar!</p>
      </div>

      {/* Timeline */}
      <div className="card mb-8">
        <h3 className="font-bold text-slate-800 mb-6 text-lg">🗓️ Timeline de Progresso</h3>
        <div className="space-y-4">
          {timeline.map((item, i) => (
            <div key={i} className={`flex gap-4 p-4 rounded-xl ${item.current ? "bg-indigo-50 border-2 border-indigo-200" : item.done ? "bg-green-50" : "bg-slate-50"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${item.current ? "bg-indigo-600 text-white" : item.done ? "bg-green-500 text-white" : "bg-slate-200 text-slate-400"}`}>
                {item.current ? "📍" : item.done ? "✓" : "○"}
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">{item.week}</div>
                <div className="font-semibold text-slate-700">{item.title} {item.current && <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full ml-1">Atual</span>}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.items.map((it, j) => (
                    <span key={j} className="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-600">{it}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="card mb-8">
        <h3 className="font-bold text-slate-800 mb-6 text-lg">🏅 Conquistas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((a) => (
            <div key={a.id} className={`p-4 rounded-xl text-center border-2 transition-all ${a.unlocked ? "border-indigo-200 bg-indigo-50" : "border-slate-100 bg-slate-50 opacity-60"}`}>
              <div className="text-3xl mb-2">{a.emoji}</div>
              <div className="font-semibold text-sm text-slate-700">{a.title}</div>
              <div className="text-xs text-slate-400 mt-1">{a.desc}</div>
              {a.unlocked && <div className="text-xs text-indigo-600 font-medium mt-2">✓ Desbloqueada</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="card text-center">
            <div className="text-3xl mb-1">{s.emoji}</div>
            <div className="text-3xl font-bold text-indigo-600">{s.value}</div>
            <div className="font-semibold text-slate-700 text-sm mt-1">{s.label}</div>
            <div className="text-xs text-slate-400 mt-1">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
