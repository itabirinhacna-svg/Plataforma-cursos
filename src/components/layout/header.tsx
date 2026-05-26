'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/' as const, label: 'Início' },
  { href: '/catalogo' as const, label: 'Cursos' },
  { href: '/aluno' as const, label: 'Meu estudo' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200 bg-amber-50/95 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-tight text-amber-950">
          Aprova Município
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-amber-900 hover:text-amber-700">
              {link.label}
            </Link>
          ))}
          <Button asChild className="h-9 bg-orange-500 px-4 text-sm hover:bg-orange-600">
            <Link href="/login">Entrar</Link>
          </Button>
        </div>

        <button className="inline-flex items-center justify-center rounded-md border border-amber-300 p-2 md:hidden" aria-label="Abrir menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5 text-amber-900" /> : <Menu className="h-5 w-5 text-amber-900" />}
        </button>
      </nav>

      <div className={cn('border-t border-amber-200 bg-amber-50 md:hidden', open ? 'block' : 'hidden')}>
        <div className="container flex flex-col gap-1 py-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-2 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full bg-orange-500 hover:bg-orange-600">
            <Link href="/login" onClick={() => setOpen(false)}>
              Entrar
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
