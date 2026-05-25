"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const GAMES = [
  { id: "caca", title: "Caça aos Detalhes", emoji: "🔍", desc: "Encontre objetos escondidos" },
  { id: "memoria", title: "Memória Sequencial", emoji: "🃏", desc: "Repita a sequência de cartas" },
  { id: "relogio", title: "Desafio do Relógio", emoji: "⏱️", desc: "Complete a tarefa no tempo" },
];

const ITEMS_CACA = ["🐱","🌟","🍎","🚗","🌈","🦋","🎈","🌸"];
const CARDS_MEM = ["🐶","🐱","🐭","🐹","🦊","🐻","🐼","🐨"];

function CacaGame({ level }: { level: string }) {
  const count = level === "facil" ? 4 : level === "medio" ? 6 : 8;
  const time = level === "facil" ? 60 : level === "medio" ? 45 : 30;
  const [items] = useState(() => [...ITEMS_CACA].sort(() => Math.random() - 0.5).slice(0, count));
  const [target] = useState(() => items[Math.floor(Math.random() * items.length)]);
  const [found, setFound] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(time);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft === 0) { setFinished(true); return; }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [started, timeLeft, finished]);

  useEffect(() => {
    if (found.includes(target)) setFinished(true);
  }, [found, target]);

  const handleClick = (item: string) => {
    if (!started || finished) return;
    if (item === target && !found.includes(item)) setFound([...found, item]);
  };

  const won = found.includes(target);

  if (!started) return (
    <div className="text-center py-8">
      <div className="text-6xl mb-4">{target}</div>
      <p className="text-slate-600 mb-4">Encontre este item! Você tem {time} segundos.</p>
      <button className="btn-primary" onClick={() => setStarted(true)}>Iniciar Jogo</button>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">Encontre: <span className="text-3xl">{target}</span></div>
        <div className={`text-lg font-bold ${timeLeft < 10 ? "text-red-500" : "text-indigo-600"}`}>⏱ {timeLeft}s</div>
      </div>
      {finished ? (
        <div className={`text-center py-8 rounded-2xl ${won ? "bg-green-50" : "bg-red-50"}`}>
          <div className="text-5xl mb-3">{won ? "🎉" : "😔"}</div>
          <p className="text-xl font-bold">{won ? "Parabéns! Você encontrou!" : "Tempo esgotado!"}</p>
          <button className="btn-primary mt-4" onClick={() => window.location.reload()}>Jogar Novamente</button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          {items.map((item, i) => (
            <button key={i} onClick={() => handleClick(item)}
              className={`text-4xl p-4 rounded-2xl border-2 transition-all ${
                found.includes(item) && item === target
                  ? "border-green-400 bg-green-50 scale-110"
                  : "border-slate-200 bg-white hover:border-indigo-300 hover:scale-105"
              }`}>{item}</button>
          ))}
        </div>
      )}
    </div>
  );
}

function MemoriaGame({ level }: { level: string }) {
  const count = level === "facil" ? 3 : level === "medio" ? 5 : 7;
  const [sequence] = useState(() => Array.from({length: count}, () => CARDS_MEM[Math.floor(Math.random() * CARDS_MEM.length)]));
  const [showing, setShowing] = useState(true);
  const [answer, setAnswer] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowing(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const handlePick = (card: string) => {
    if (finished) return;
    const newAnswer = [...answer, card];
    setAnswer(newAnswer);
    if (newAnswer.length === sequence.length) setFinished(true);
  };

  const correct = JSON.stringify(answer) === JSON.stringify(sequence);

  return (
    <div>
      {showing ? (
        <div className="text-center">
          <p className="text-slate-600 mb-4 font-medium">Memorize a sequência!</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {sequence.map((c, i) => (
              <div key={i} className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl border-2 border-indigo-300">{c}</div>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-3">Desaparecendo em 3 segundos...</p>
        </div>
      ) : finished ? (
        <div className={`text-center py-8 rounded-2xl ${correct ? "bg-green-50" : "bg-red-50"}`}>
          <div className="text-5xl mb-3">{correct ? "🎉" : "😔"}</div>
          <p className="text-xl font-bold mb-2">{correct ? "Sequência correta!" : "Sequência incorreta!"}</p>
          <p className="text-sm text-slate-500 mb-1">Sequência: {sequence.join(" ")}</p>
          <p className="text-sm text-slate-500 mb-4">Sua resposta: {answer.join(" ")}</p>
          <button className="btn-primary" onClick={() => window.location.reload()}>Jogar Novamente</button>
        </div>
      ) : (
        <div>
          <p className="text-center text-slate-600 mb-2">Reproduza a sequência ({answer.length}/{sequence.length})</p>
          <div className="flex justify-center gap-2 mb-4 min-h-12 flex-wrap">
            {answer.map((c, i) => <span key={i} className="text-3xl">{c}</span>)}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {CARDS_MEM.map((card, i) => (
              <button key={i} onClick={() => handlePick(card)}
                className="text-3xl p-3 rounded-2xl border-2 border-slate-200 bg-white hover:border-indigo-300 hover:scale-105 transition-all">{card}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RelogioGame({ level }: { level: string }) {
  const time = level === "facil" ? 60 : level === "medio" ? 40 : 25;
  const letters = "AABBCCAADDEAAFAAGAAH".split("");
  const [timeLeft, setTimeLeft] = useState(time);
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const correctIndices = letters.map((l, i) => l === "A" ? i : -1).filter(i => i !== -1);

  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft === 0) { setFinished(true); return; }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [started, timeLeft, finished]);

  const toggle = (i: number) => {
    if (!started || finished) return;
    setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const score = selected.filter(i => correctIndices.includes(i)).length;
  const wrong = selected.filter(i => !correctIndices.includes(i)).length;

  if (!started) return (
    <div className="text-center py-8">
      <p className="text-slate-600 mb-4">Clique em todas as letras <strong>A</strong> antes do tempo acabar! Você tem {time} segundos.</p>
      <button className="btn-primary" onClick={() => setStarted(true)}>Iniciar Jogo</button>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between mb-4">
        <span className="text-sm font-medium text-slate-600">✅ {score} corretas | ❌ {wrong} erradas</span>
        <span className={`font-bold ${timeLeft < 10 ? "text-red-500" : "text-indigo-600"}`}>⏱ {timeLeft}s</span>
      </div>
      {finished ? (
        <div className="text-center py-8 bg-indigo-50 rounded-2xl">
          <div className="text-5xl mb-3">🏆</div>
          <p className="text-xl font-bold">Resultado: {score}/{correctIndices.length} letras A encontradas!</p>
          <button className="btn-primary mt-4" onClick={() => window.location.reload()}>Jogar Novamente</button>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 justify-center">
          {letters.map((letter, i) => (
            <button key={i} onClick={() => toggle(i)}
              className={`w-12 h-12 rounded-xl font-bold text-lg border-2 transition-all ${
                selected.includes(i)
                  ? correctIndices.includes(i) ? "bg-green-100 border-green-400 text-green-700" : "bg-red-100 border-red-400 text-red-700"
                  : "bg-white border-slate-200 hover:border-indigo-300 text-slate-700"
              }`}>{letter}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Games() {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [level, setLevel] = useState("facil");
  const [key, setKey] = useState(0);

  const startGame = (id: string) => { setActiveGame(id); setKey(k => k + 1); };

  return (
    <section className="py-12 md:py-20 w-full bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3">🎮 Jogos Interativos</h2>
          <p className="text-slate-500 text-sm md:text-base">Versões interativas das atividades para jogar diretamente no navegador!</p>
        </div>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {[["facil","🟢 Fácil"],["medio","🟡 Médio"],["avancado","🔴 Avançado"]].map(([val, label]) => (
            <button key={val} onClick={() => setLevel(val)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${level === val ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200"}`}>
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {GAMES.map((g) => (
            <div key={g.id} className={`card text-left transition-all hover:scale-105 w-full ${activeGame === g.id ? "border-2 border-indigo-400" : ""}`}>
              <div className="text-4xl mb-2">{g.emoji}</div>
              <div className="font-bold text-slate-800">{g.title}</div>
              <div className="text-sm text-slate-500 mb-4">{g.desc}</div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => startGame(g.id)} className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
                  Jogar aqui
                </button>
                <Link href={`/jogos/${g.id}`} className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-bold">
                  Abrir página
                </Link>
              </div>
            </div>
          ))}
        </div>

        {activeGame && (
          <div className="card w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">
                {GAMES.find(g => g.id === activeGame)?.emoji} {GAMES.find(g => g.id === activeGame)?.title}
              </h3>
              <button onClick={() => setActiveGame(null)} className="text-slate-400 hover:text-slate-600 text-xl">✕</button>
            </div>
            <div key={key}>
              {activeGame === "caca" && <CacaGame level={level} />}
              {activeGame === "memoria" && <MemoriaGame level={level} />}
              {activeGame === "relogio" && <RelogioGame level={level} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
