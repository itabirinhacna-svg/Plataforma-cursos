import { AlertCircle, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export function EstrategiaCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-amber-900">
        <Target className="h-5 w-5" />
        <h3 className="text-lg font-bold">Estratégia de prova: {title}</h3>
      </div>
      <ol className="list-decimal space-y-2 pl-5 text-sm text-amber-900/90">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export function DicaImportante({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-sky-200 bg-sky-50 p-5 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-sky-900">
        <Lightbulb className="h-5 w-5" />
        <h3 className="font-bold">Dica importante do professor</h3>
      </div>
      <p className="text-sm text-sky-900/90">{children}</p>
    </section>
  );
}

export function RevisaoRapida({ items }: { items: string[] }) {
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-emerald-900">
        <CheckCircle2 className="h-5 w-5" />
        <h3 className="font-bold">Revisão rápida</h3>
      </div>
      <ul className="space-y-2 text-sm text-emerald-900/90">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}

export function QuestaoComentada({ question, comment }: { question: string; comment: string }) {
  return (
    <section className="rounded-2xl border border-rose-200 bg-rose-50 p-5 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-rose-900">
        <AlertCircle className="h-5 w-5" />
        <h3 className="font-bold">Questão comentada</h3>
      </div>
      <p className="text-sm font-semibold text-rose-950">{question}</p>
      <p className="mt-2 text-sm text-rose-900/90">{comment}</p>
    </section>
  );
}
