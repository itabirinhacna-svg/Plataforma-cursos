'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold text-red-600">Ops! Algo saiu do esperado</p>
      <h2 className="mt-2 text-2xl font-black">Não foi possível carregar esta página</h2>
      <p className="mt-3 text-slate-600">Tente novamente. Se o erro persistir, revise as configurações do ambiente.</p>
      <Button className="mt-6" onClick={() => reset()}>
        Tentar novamente
      </Button>
    </section>
  );
}
