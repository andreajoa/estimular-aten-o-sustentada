"use client";
import { useState } from "react";

const activities = [
  {
    id: 1,
    title: "Caça aos Detalhes",
    level: "Fácil",
    time: "10-15 min",
    description: "Imprima ou desenhe uma cena com muitos elementos (praça, zoológico, sala bagunçada). Peça para a criança encontrar determinados itens em um tempo estipulado.",
    brain: "Córtex Parietal",
    skill: "Atenção Visual",
    emoji: "🔍",
    color: "from-green-400 to-emerald-500",
    badge: "badge-facil",
    tips: [
      "Comece com cenas simples e aumente a complexidade gradualmente",
      "Use cronômetro para tornar mais desafiador",
      "Celebre cada item encontrado com entusiasmo",
      "Adapte o número de itens à idade da criança",
    ],
    benefits: [
      "Melhora a atenção dirigida e seletiva",
      "Fortalece o córtex parietal responsável pela atenção espacial",
      "Desenvolve habilidade de varredura visual sistemática",
    ],
  },
  {
    id: 2,
    title: "Memória Sequencial com Cartas",
    level: "Médio",
    time: "8-12 min",
    description: "Use baralhos simples ou figuras em cartões. Mostre 3 a 5 cartas em sequência, depois esconda. Peça que a criança repita na ordem.",
    brain: "Córtex Pré-frontal",
    skill: "Memória de Trabalho",
    emoji: "🃏",
    color: "from-blue-400 to-indigo-500",
    badge: "badge-medio",
    tips: [
      "Comece com 3 cartas e aumente gradualmente",
      "Use figuras coloridas e atrativas",
      "Permita que a criança faça o mesmo com você",
      "Faça pausas se houver frustração",
    ],
    benefits: [
      "Fortalece a memória de trabalho",
      "Ativa o córtex pré-frontal e funções executivas",
      "Melhora a capacidade de sequenciamento",
    ],
  },
  {
    id: 3,
    title: "Desafio do Relógio",
    level: "Médio",
    time: "5-10 min",
    description: "Proponha tarefas com tempo cronometrado (ex.: 'circule todas as letras A nesta folha em 2 minutos'). Esse exercício ajuda a manter o foco em um objetivo específico.",
    brain: "Controle Executivo",
    skill: "Atenção Sustentada",
    emoji: "⏱️",
    color: "from-orange-400 to-amber-500",
    badge: "badge-medio",
    tips: [
      "Use um timer visual para a criança acompanhar",
      "Varie os tipos de tarefas para manter o interesse",
      "Aumente o tempo gradualmente",
      "Registre os resultados para mostrar evolução",
    ],
    benefits: [
      "Desenvolve atenção sustentada e controle executivo",
      "Melhora a capacidade de trabalhar sob pressão leve",
      "Fortalece o senso de tempo e autorregulação",
    ],
  },
  {
    id: 4,
    title: "História Interrompida",
    level: "Fácil",
    time: "10-20 min",
    description: "Leia uma história em voz alta e, de repente, pare. Peça que a criança complete a frase ou detalhe o que aconteceu.",
    brain: "Córtex Temporal",
    skill: "Atenção Auditiva",
    emoji: "📖",
    color: "from-pink-400 to-rose-500",
    badge: "badge-facil",
    tips: [
      "Use histórias do interesse da criança",
      "Varie os momentos de pausa para surpreender",
      "Encoraje respostas criativas",
      "Leia com entonação expressiva para manter atenção",
    ],
    benefits: [
      "Estimula a atenção auditiva e processamento temporal",
      "Desenvolve compreensão e memória auditiva",
      "Fortalece o córtex temporal e habilidades narrativas",
    ],
  },
  {
    id: 5,
    title: "Sequência de Comandos",
    level: "Avançado",
    time: "5-15 min",
    description: "Dê instruções em sequência (ex.: 'pegue um lápis azul, desenhe um círculo e depois escreva seu nome dentro dele'). Aumente gradualmente a quantidade de passos.",
    brain: "Córtex Pré-frontal",
    skill: "Controle Executivo",
    emoji: "📋",
    color: "from-violet-400 to-purple-500",
    badge: "badge-avancado",
    tips: [
      "Comece com 2 comandos e vá aumentando",
      "Fale em tom calmo e claro",
      "Não repita os comandos — estimule a memória",
      "Use atividades do cotidiano como base",
    ],
    benefits: [
      "Fortalece o planejamento e controle executivo",
      "Melhora a memória de trabalho verbal",
      "Desenvolve a capacidade de seguir instruções complexas",
    ],
  },
];

export default function Activities() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  const toggle = (id: number) => setExpanded(expanded === id ? null : id);
  const toggleComplete = (id: number) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">5 Atividades Essenciais</h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Cada atividade foi desenvolvida para trabalhar aspectos específicos da atenção,
          adaptáveis conforme a idade e interesse da criança.
        </p>
        <div className="mt-4 flex justify-center gap-2 text-sm">
          <span className="badge-facil px-3 py-1 rounded-full font-medium">🟢 Fácil</span>
          <span className="badge-medio px-3 py-1 rounded-full font-medium">🟡 Médio</span>
          <span className="badge-avancado px-3 py-1 rounded-full font-medium">🔴 Avançado</span>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((act) => (
          <div key={act.id} className={`card border-l-4 ${completed.includes(act.id) ? "border-green-400 opacity-80" : "border-indigo-400"}`}>
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${act.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                {act.emoji}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-800">{act.title}</h3>
                  <span className={`${act.badge} text-xs px-2 py-0.5 rounded-full font-medium`}>{act.level}</span>
                  <span className="text-xs text-slate-400">⏱ {act.time}</span>
                </div>
                <div className="flex gap-3 text-xs text-slate-500 mb-2">
                  <span>🧠 {act.brain}</span>
                  <span>🎯 {act.skill}</span>
                </div>
                <p className="text-slate-600 text-sm">{act.description}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => toggle(act.id)}
                className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                {expanded === act.id ? "▲ Ocultar dicas" : "▼ Ver benefícios e dicas"}
              </button>
              <button
                onClick={() => toggleComplete(act.id)}
                className={`ml-auto text-sm px-4 py-1.5 rounded-full font-medium transition-all ${
                  completed.includes(act.id)
                    ? "bg-green-100 text-green-700"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
              >
                {completed.includes(act.id) ? "✓ Concluída" : "Marcar como concluída"}
              </button>
            </div>

            {expanded === act.id && (
              <div className="mt-4 grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">💡 Dicas</h4>
                  <ul className="space-y-1">
                    {act.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-indigo-400 mt-0.5">•</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">✅ Benefícios</h4>
                  <ul className="space-y-1">
                    {act.benefits.map((b, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-green-400 mt-0.5">•</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
