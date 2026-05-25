"use client";

const tips = [
  {
    title: "Tempo Ideal", emoji: "⏰", color: "from-blue-400 to-cyan-500",
    items: ["Comece com 5-10 minutos por sessão","Aumente gradualmente conforme o progresso","Faça pausas a cada 15-20 minutos","Respeite os sinais de cansaço"],
  },
  {
    title: "Ambiente Acolhedor", emoji: "🏠", color: "from-green-400 to-emerald-500",
    items: ["Elimine distrações visuais e sonoras","Use iluminação adequada","Tenha materiais organizados","Crie um espaço confortável"],
  },
  {
    title: "Motivação", emoji: "🌟", color: "from-yellow-400 to-orange-500",
    items: ["Celebre pequenos progressos","Use reforço positivo constante","Adapte às preferências da criança","Mantenha expectativas realistas"],
  },
  {
    title: "Consistência", emoji: "🔁", color: "from-pink-400 to-rose-500",
    items: ["Pratique diariamente, mesmo que pouco","Mantenha rotina estruturada","Use mesmos horários quando possível","Seja paciente com os resultados"],
  },
  {
    title: "Foco nos Objetivos", emoji: "🎯", color: "from-indigo-400 to-purple-500",
    items: ["Defina metas claras e alcançáveis","Trabalhe uma habilidade por vez","Registre o progresso visualmente","Ajuste a dificuldade conforme necessário"],
  },
  {
    title: "Colaboração", emoji: "🤝", color: "from-violet-400 to-fuchsia-500",
    items: ["Envolva toda a família no processo","Comunique-se com a escola","Busque apoio profissional quando necessário","Conecte-se com outros pais"],
  },
];

const faqs = [
  { q: "Quanto tempo por dia devo dedicar às atividades?", a: "Recomendamos começar com 10-15 minutos diários. O importante é a consistência, não a duração. Conforme a criança se adapta, você pode aumentar gradualmente para 20-30 minutos, sempre respeitando os sinais de cansaço mental." },
  { q: "Minha criança se frustra facilmente. O que fazer?", a: "É normal! Comece com o nível mais fácil e celebre cada pequeno progresso. Se houver frustração, faça uma pausa, use reforço positivo e lembre que o objetivo é o treino, não a perfeição." },
  { q: "Quando vou ver resultados?", a: "Os primeiros sinais aparecem geralmente após 2-3 semanas de prática regular. Melhorias significativas são observadas após 6-8 semanas. Lembre-se: cada criança tem seu próprio ritmo de desenvolvimento." },
  { q: "Posso usar essas atividades junto com medicação?", a: "Sim! Estas atividades são complementares ao tratamento médico. Muitos estudos mostram que a combinação de intervenções comportamentais com medicação quando necessária oferece os melhores resultados. Sempre consulte o médico da criança." },
  { q: "Servem para crianças sem TDAH também?", a: "Absolutamente! Essas atividades beneficiam qualquer criança, desenvolvendo habilidades importantes como concentração, memória de trabalho e controle inibitório." },
];

export default function Tips() {
  return (
    <section className="py-12 md:py-20 w-full bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3">💡 Dicas Essenciais para o Sucesso</h2>
          <p className="text-slate-500 text-sm md:text-base">Estratégias práticas baseadas em evidências científicas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tips.map((tip, i) => (
            <div key={i} className="card">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tip.color} flex items-center justify-center text-2xl mb-3`}>
                {tip.emoji}
              </div>
              <h3 className="font-bold text-slate-800 mb-3">{tip.title}</h3>
              <ul className="space-y-1.5">
                {tip.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">❓ Perguntas Frequentes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="card">
              <h4 className="font-bold text-slate-800 mb-2">🔹 {faq.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center w-full">
          <div className="text-4xl mb-3">💜</div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Lembre-se: o mais importante não é a perfeição</h3>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            O treino contínuo em um ambiente acolhedor e motivador é o que realmente faz a diferença
            no desenvolvimento da atenção em crianças com TDAH.
          </p>
          <div className="mt-4 text-sm text-white/60">Feito com carinho para famílias e educadores 💙</div>
        </div>
      </div>
    </section>
  );
}
