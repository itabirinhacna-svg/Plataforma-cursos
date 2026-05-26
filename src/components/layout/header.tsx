'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/' as const, label: 'Início' },
  { href: '/#pacotes' as const, label: 'Pacotes' },
  { href: '/#metodo' as const, label: 'Método' },
  { href: '/#acompanhamento' as const, label: 'Acompanhamento' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D4AF37]/30 bg-[#071B3A]/95 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight text-white">
          <span className="text-xl font-black tracking-tight">Professor Efetivo</span>
          <span className="text-xs text-slate-200">O seu sonho. O seu futuro. A sua aprovação.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-100 transition hover:text-[#F6C453]">
              {link.label}
            </Link>
          ))}
          <Button asChild className="h-10 bg-[#F6C453] px-5 text-sm font-bold text-[#071B3A] hover:bg-[#e5b546]">
            <Link href="/login">Entrar</Link>
          </Button>
        </div>

        <button className="inline-flex items-center justify-center rounded-md border border-slate-600 p-2 md:hidden" aria-label="Abrir menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </nav>

      <div className={cn('border-t border-slate-700 bg-[#071B3A] md:hidden', open ? 'block' : 'hidden')}>
        <div className="container flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-2 py-2 text-sm font-semibold text-slate-100 hover:bg-[#0d2a55]" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full bg-[#F6C453] font-bold text-[#071B3A] hover:bg-[#e5b546]">
            <Link href="/login" onClick={() => setOpen(false)}>
              Entrar
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
