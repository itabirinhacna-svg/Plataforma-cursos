import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DicaImportante, EstrategiaCard, RevisaoRapida } from '@/components/pedagogical/study-cards';

export default function HomePage() {
  return (
    <section className="space-y-10 pb-8">
      <div className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm md:p-10">
        <p className="text-sm font-semibold text-orange-700">Preparação para concursos municipais, passo a passo</p>
        <h1 className="mt-3 text-3xl font-black md:text-5xl">Estude com clareza, rotina e acompanhamento de professor</h1>
        <p className="mt-4 text-lg text-amber-900/80">
          Aqui você não estuda sozinho. Organizamos seu caminho com aulas diretas, revisão guiada e questões comentadas.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="h-11 bg-orange-500 px-6 text-base hover:bg-orange-600">
            <Link href="/catalogo">Começar meus estudos</Link>
          </Button>
          <Button asChild className="h-11 border border-amber-300 bg-amber-50 px-6 text-base text-amber-950 hover:bg-amber-100">
            <Link href="/cadastro">Criar conta gratuita</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <EstrategiaCard title="48 horas antes da prova" steps={['Revise somente seus resumos essenciais.', 'Resolva 20 questões de banca parecida.', 'Durma cedo e prepare seus documentos.']} />
        <RevisaoRapida items={['Direito Administrativo: poderes e atos', 'Português: interpretação de texto', 'Matemática: porcentagem e regra de três']} />
      </div>

      <DicaImportante>
        Não tente estudar tudo em cima da hora. Foque no que mais cai e no que você já construiu durante a semana.
      </DicaImportante>
    </section>
  );
}
