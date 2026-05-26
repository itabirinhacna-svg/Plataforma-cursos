import Link from 'next/link';
import { BookOpen, CheckCircle2, GraduationCap, Rocket, ShieldCheck, WalletCards } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offers = [
  {
    title: 'Pacote 1 — Conhecimentos Pedagógicos',
    price: 'R$ 179,90',
    highlight: 'Com videoaulas',
    items: ['Videoaulas de Conhecimentos Pedagógicos', 'Apostila completa + mapas mentais + exercícios', 'Acompanhamento até a prova']
  },
  {
    title: 'Pacote 2 — MaPB e AEE',
    price: 'R$ 229,90',
    highlight: 'Com videoaulas',
    items: ['Videoaulas de MaPB e AEE', 'Apostila completa + mapas mentais + exercícios', 'Acompanhamento até a prova']
  },
  {
    title: 'Pacote 3 — Pedagogo e MaPA',
    price: 'R$ 289,90',
    badge: '2 disciplinas com videoaulas',
    highlight: 'Com videoaulas',
    items: ['Videoaulas de Pedagogo e MaPA', 'Apostila completa + mapas mentais + exercícios', 'Acompanhamento até a prova']
  }
];

export default function HomePage() {
  return (
    <section className="space-y-8 pb-10 text-white md:space-y-10">
      <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#071B3A]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B3A]/95 via-[#071B3A]/90 to-[#071B3A]/65" />

        <div className="p-6 md:p-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#0b2c5d] px-4 py-2 text-xs font-semibold text-[#F6C453]">
            <GraduationCap className="h-4 w-4" />
            Professor Efetivo
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">Transforme seu estudo na sua aprovação.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-100 md:text-xl">O caminho mais completo para você conquistar seu cargo efetivo no magistério municipal.</p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full border border-[#D4AF37]/60 bg-[#0d2a55] px-4 py-2 text-[#F6C453]">Concurso Prefeitura de Água Doce do Norte/ES</span>
            <span className="rounded-full border border-[#D4AF37]/60 bg-[#0d2a55] px-4 py-2 text-[#F6C453]">Foco no Magistério</span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 bg-[#F6C453] px-7 text-base font-bold text-[#071B3A] hover:bg-[#e5b546]">
              <Link href="/catalogo">Quero garantir minha vaga</Link>
            </Button>
            <Button asChild className="h-12 border border-slate-400 bg-[#0d2a55]/80 px-7 text-base font-semibold text-white hover:bg-[#123a75]">
              <Link href="#pacotes">Ver pacotes</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#D4AF37]/50 bg-[#F6C453] px-6 py-4 text-center text-xl font-black text-[#071B3A] md:text-3xl">Seu sonho é efetivar. Nosso propósito é te levar até lá!</div>

      <div id="pacotes" className="grid gap-5 lg:grid-cols-3">
        {offers.map((offer) => (
          <article key={offer.title} className="rounded-2xl border border-[#D4AF37]/40 bg-[#071B3A] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            {offer.badge && <p className="mb-3 inline-flex rounded-full bg-[#f97316] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">{offer.badge}</p>}
            <h2 className="text-2xl font-black text-white">{offer.title}</h2>
            <p className="mt-2 inline-flex rounded-md bg-[#0f356b] px-3 py-1 text-sm font-semibold text-[#F6C453]">{offer.highlight}</p>
            <p className="mt-4 text-4xl font-black text-[#F6C453]">{offer.price}</p>
            <ul className="mt-5 space-y-3 text-slate-100">
              {offer.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F6C453]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div id="metodo" className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#D4AF37]/40 bg-[#071B3A] p-5">
          <WalletCards className="h-8 w-8 text-[#F6C453]" />
          <h3 className="mt-3 text-xl font-black">Pagamento único</h3>
          <p className="text-slate-200">Sem mensalidade.</p>
        </div>
        <div className="rounded-2xl border border-[#D4AF37]/40 bg-[#071B3A] p-5">
          <Rocket className="h-8 w-8 text-[#F6C453]" />
          <h3 className="mt-3 text-xl font-black">Acesso imediato</h3>
          <p className="text-slate-200">Comece hoje mesmo.</p>
        </div>
        <div id="acompanhamento" className="rounded-2xl border border-[#D4AF37]/40 bg-[#071B3A] p-5">
          <ShieldCheck className="h-8 w-8 text-[#F6C453]" />
          <h3 className="mt-3 text-xl font-black">Acompanhamento até a prova</h3>
          <p className="text-slate-200">Você não estuda sozinho.</p>
        </div>
      </div>

      <div className="grid gap-4 rounded-3xl border border-[#D4AF37]/40 bg-[#071B3A] p-6 md:grid-cols-[1.5fr_1fr] md:p-8">
        <div>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">A sua aprovação não é questão de sorte. É questão de decisão.</h2>
          <p className="mt-3 text-lg text-slate-200">Disciplina hoje. Estabilidade amanhã. Orgulho para sempre.</p>
        </div>
        <div className="flex items-center md:justify-end">
          <Button asChild className="h-12 w-full bg-[#F6C453] text-base font-bold text-[#071B3A] hover:bg-[#e5b546] md:w-auto md:px-8">
            <Link href="/catalogo">Quero garantir minha vaga</Link>
          </Button>
        </div>
      </div>

      <footer className="rounded-2xl border border-[#D4AF37]/40 bg-[#071B3A] p-5">
        <p className="mb-4 text-center text-lg font-black text-[#F6C453]">Conteúdos que geram resultados</p>
        <div className="grid gap-3 text-sm text-slate-100 sm:grid-cols-2 lg:grid-cols-3">
          <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F6C453]" />Aulas objetivas e atualizadas</p>
          <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F6C453]" />Materiais completos e organizados</p>
          <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F6C453]" />Questões comentadas</p>
          <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F6C453]" />Simulados estratégicos</p>
          <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F6C453]" />Professor especialista</p>
          <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F6C453]" />Foco total no edital</p>
        </div>
      </footer>
    </section>
  );
}
