import Link from 'next/link';
import { AuthForm } from '@/components/auth/auth-form';

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Entrar</h1>
      <AuthForm mode="login" />
      <p className="text-sm text-slate-600">
        Não tem conta?{' '}
        <Link href="/cadastro" className="font-medium text-blue-600 hover:underline">
          Cadastre-se
        </Link>
      </p>
    </section>
  );
}
