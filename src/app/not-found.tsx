import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold text-blue-600">Erro 404</p>
      <h1 className="mt-2 text-3xl font-black">Página não encontrada</h1>
      <p className="mt-3 text-slate-600">Essa rota não existe ou foi movida. Você pode voltar para a página inicial.</p>
      <Button asChild className="mt-6">
        <Link href="/">Voltar ao início</Link>
      </Button>
    </section>
  );
}
