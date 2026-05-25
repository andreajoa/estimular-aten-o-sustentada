import Link from "next/link";
import { Nav, activities } from "../../components/HomeClient";

export default async function AtividadeDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return <main className="min-h-screen bg-[#f6f8ff]"><Nav /><div className="mx-auto max-w-3xl px-4 py-20"><h1 className="text-3xl font-black">Atividade não encontrada</h1><Link href="/atividades" className="mt-6 inline-block rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white">Voltar</Link></div></main>;
  }

  return (
    <main className="min-h-screen bg-[#f6f8ff]">
      <Nav />
      <section className="mx-auto max-w-4xl px-4 py-14 md:px-8">
        <Link href="/atividades" className="font-bold text-indigo-600">← Voltar para atividades</Link>
        <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-xl md:p-10">
          <div className={`mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br ${activity.color} text-4xl text-white`}>{activity.emoji}</div>
          <h1 className="text-4xl font-black text-slate-950 md:text-6xl">{activity.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{activity.desc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-black text-indigo-700">{activity.level}</span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600">{activity.time}</span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Preparar ambiente sem distrações", "Explicar a regra com calma", "Registrar como a criança respondeu"].map(step => (
              <div key={step} className="rounded-2xl bg-slate-50 p-5 font-bold text-slate-700">✓ {step}</div>
            ))}
          </div>
          <Link href={`/jogos/${activity.id}`} className="mt-8 inline-block rounded-2xl bg-slate-950 px-7 py-4 font-black text-white">Abrir versão interativa</Link>
        </div>
      </section>
    </main>
  );
}
