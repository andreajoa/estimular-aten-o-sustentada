import Link from "next/link";
import { activities } from "../../data/appData";

const detail: Record<string, string[]> = {
  "caca-aos-detalhes": ["Observe a cena com calma.", "Procure os itens pedidos.", "Marque cada item encontrado.", "Repita aumentando a dificuldade."],
  "memoria-sequencial": ["Observe a sequência.", "Espere ela desaparecer.", "Repita na mesma ordem.", "Tente novamente se errar."],
  "desafio-relogio": ["Veja a tarefa.", "Inicie o cronômetro.", "Clique nos itens corretos.", "Confira o resultado."],
  "historia-interrompida": ["Leia o trecho.", "Pause em pontos importantes.", "Responda perguntas simples.", "Continue a história."],
  "sequencia-comandos": ["Leia o comando.", "Execute uma etapa por vez.", "Aumente o número de etapas.", "Registre o progresso."],
};

export default async function AtividadeDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const activity = activities.find((a) => a.id === id);

  if (!activity) {
    return (
      <main className="section-container py-16">
        <h1 className="text-3xl font-bold">Atividade não encontrada</h1>
        <Link href="/atividades" className="btn-primary mt-6 inline-block">Voltar</Link>
      </main>
    );
  }

  return (
    <main className="section-container py-12 md:py-20">
      <Link href="/atividades" className="text-indigo-600 font-bold">← Voltar</Link>
      <section className="card mt-6">
        <div className="text-6xl mb-4">{activity.emoji}</div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800">{activity.title}</h1>
        <p className="text-slate-500 mt-3">{activity.level} • {activity.time}</p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {(detail[id] || []).map((step, i) => (
            <div key={step} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <div className="font-bold text-indigo-600 mb-1">Passo {i + 1}</div>
              <p className="text-slate-700">{step}</p>
            </div>
          ))}
        </div>

        <Link href="/jogos" className="btn-primary mt-8 inline-block">
          Abrir jogos interativos
        </Link>
      </section>
    </main>
  );
}
