import './globals.css';
import { Header } from '@/components/layout/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.08),_transparent_30%)]" />
          <Header />
          <main className="container py-8 md:py-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
