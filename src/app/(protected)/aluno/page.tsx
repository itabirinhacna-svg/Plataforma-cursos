import { requireAuth } from '@/lib/auth/guards';
import { DicaImportante, EstrategiaCard, QuestaoComentada, RevisaoRapida } from '@/components/pedagogical/study-cards';
import { teachingMaterials } from '@/lib/mock-data';

const materialTypeLabels = {
  sequencia_didatica: 'Sequência didática',
  plano_aula: 'Plano de aula',
  slide: 'Slides',
  apostila_questoes: 'Apostila de questões',
  gabarito: 'Gabarito',
  material_complementar: 'Material complementar'
};

export default async function StudentAreaPage() {
  const session = await requireAuth();

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black">Olá, {session.user.email}</h1>
        <p className="mt-2 text-amber-900/80">Seu plano de estudo de hoje já está pronto. Vamos avançar com calma e foco.</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">Progresso da semana</p>
            <p className="mt-1 text-2xl font-black text-amber-950">68%</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-800">Aulas concluídas</p>
            <p className="mt-1 text-2xl font-black text-emerald-950">14</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <p className="text-xs font-semibold text-sky-800">Questões resolvidas</p>
            <p className="mt-1 text-2xl font-black text-sky-950">97</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <EstrategiaCard title="Hoje à noite (90 minutos)" steps={['30 min: Aula de Português', '30 min: Questões de Matemática', '30 min: Revisão dos erros do simulado']} />
        <RevisaoRapida items={['Lei Orgânica: princípios gerais', 'Raciocínio lógico: proposições', 'Atualidades locais: serviços públicos']} />
      </div>

      <section className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-black">Materiais didáticos disponíveis</h2>
        <p className="mt-1 text-sm text-amber-900/80">Conteúdos de apoio para professores e estudantes: planos, apostilas e sequência didática.</p>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {teachingMaterials.map((material) => (
            <article key={material.id} className="rounded-xl border border-amber-100 bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">{materialTypeLabels[material.type]}</p>
              <h3 className="mt-1 font-bold text-amber-950">{material.title}</h3>
              <p className="mt-1 text-sm text-amber-900/80">{material.description}</p>
              <p className="mt-2 text-xs text-amber-800">Formato: {material.format.toUpperCase()} • Público: {material.audience}</p>
            </article>
          ))}
        </div>
      </section>

      <QuestaoComentada
        question="Em uma prefeitura, qual princípio administrativo exige atendimento igual para todos os cidadãos?"
        comment="A resposta correta é impessoalidade. Lembre: o serviço público não pode favorecer pessoas específicas."
      />

      <DicaImportante>Quando errar, anote o motivo do erro. Esse hábito acelera sua evolução e reduz repetição de falhas.</DicaImportante>
    </section>
  );
}
