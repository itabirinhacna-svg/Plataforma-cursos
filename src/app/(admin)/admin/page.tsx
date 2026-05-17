import { requireAuth } from '@/lib/auth/guards';

export default async function AdminPage() {
  await requireAuth();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Painel Administrativo</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Cursos publicados</p>
          <p className="text-2xl font-semibold">2</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Alunos ativos</p>
          <p className="text-2xl font-semibold">0</p>
        </div>
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Receita</p>
          <p className="text-2xl font-semibold">R$ 0,00</p>
        </div>
      </div>
    </section>
  );
}
