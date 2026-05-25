"use client";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-white/20 backdrop-blur rounded-full px-4 py-1 text-sm font-medium mb-6">
          Baseado em evidências científicas
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Atividades para<br />
          <span className="text-cyan-300">Estimular a Atenção</span>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Material interativo desenvolvido para pais e educadores, com 5 atividades práticas
          que fortalecem a atenção sustentada e dirigida em crianças do Ensino Fundamental 1.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur rounded-xl px-5 py-3 text-center">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-white/80">Atividades</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-5 py-3 text-center">
            <div className="text-2xl font-bold">🎮</div>
            <div className="text-sm text-white/80">Jogos Online</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-5 py-3 text-center">
            <div className="text-2xl font-bold">🧠</div>
            <div className="text-sm text-white/80">Base Científica</div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-4 inline-block text-sm text-white/90">
          💡 O mais importante não é a perfeição, mas o treino contínuo em um ambiente acolhedor.
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
    </section>
  );
}
