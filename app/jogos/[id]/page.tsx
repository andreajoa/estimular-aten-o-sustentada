import Link from "next/link";
import { Nav, games } from "../../components/HomeClient";
import GameClient from "./GameClient";

export default async function JogoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = games.find(g => g.id === id);

  if (!game) {
    return <main className="min-h-screen bg-[#f6f8ff]"><Nav /><div className="mx-auto max-w-3xl px-4 py-20"><h1 className="text-3xl font-black">Jogo não encontrado</h1><Link href="/jogos" className="mt-6 inline-block rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white">Voltar</Link></div></main>;
  }

  return (
    <main className="min-h-screen bg-[#f6f8ff]">
      <Nav />
      <section className="mx-auto max-w-4xl px-4 py-14 md:px-8">
        <Link href="/jogos" className="font-bold text-indigo-600">← Voltar para jogos</Link>
        <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-xl md:p-10">
          <div className="text-5xl">{game.emoji}</div>
          <h1 className="mt-4 text-4xl font-black text-slate-950 md:text-6xl">{game.title}</h1>
          <p className="mt-3 text-lg text-slate-600">{game.desc}</p>
          <GameClient title={game.title} />
        </div>
      </section>
    </main>
  );
}
