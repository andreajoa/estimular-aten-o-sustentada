import Link from "next/link";
import { games } from "../../data/appData";
import GameClient from "./GameClient";

export default async function JogoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <main className="section-container py-16">
        <h1 className="text-3xl font-bold">Jogo não encontrado</h1>
        <Link href="/jogos" className="btn-primary mt-6 inline-block">Voltar</Link>
      </main>
    );
  }

  return (
    <main className="section-container py-12 md:py-20">
      <Link href="/jogos" className="text-indigo-600 font-bold">← Voltar</Link>
      <section className="card mt-6">
        <div className="text-6xl mb-4">{game.emoji}</div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800">{game.title}</h1>
        <p className="text-slate-500 mt-2">Jogo interativo para criança praticar atenção.</p>
        <GameClient gameId={id} />
      </section>
    </main>
  );
}
