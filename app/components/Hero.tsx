"use client";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white py-16 md:py-24 px-4 w-full">
      <div className="section-container text-center">
        <div className="inline-block bg-white/20 backdrop-blur rounded-full px-4 py-1 text-sm font-medium mb-6">
          Baseado em evidências científicas
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Atividades para<br />
          <span className="text-cyan-300">Estimular a Atenção</span>
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-8">
          Material interativo desenvolvido para pais e educadores, com 5 atividades práticas
          que fortalecem a atenção sustentada e dirigida em crianças do Ensino Fundamental 1.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { value: "5", label: "Atividades" },
            { value: "🎮", label: "Jogos Online" },
            { value: "🧠", label: "Base Científica" },
          ].map((item, i) => (
            <div key={i} className="bg-white/20 backdrop-blur rounded-xl px-6 py-4 text-center min-w-[100px]">
              <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
              <div className="text-sm text-white/80">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-4 inline-block text-sm md:text-base text-white/90 max-w-2xl">
          💡 O mais importante não é a perfeição, mas o treino contínuo em um ambiente acolhedor.
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36 pointer-events-none" />
    </section>
  );
}
