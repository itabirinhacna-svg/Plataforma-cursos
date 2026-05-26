import Link from 'next/link';
import { AuthForm } from '@/components/auth/auth-form';

export default function SignupPage() {
  return (
    <section className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Criar conta</h1>
      <AuthForm mode="signup" />
      <p className="text-sm text-slate-600">
        Já tem conta?{' '}
        <Link href="/login" className="font-medium text-blue-600 hover:underline">
          Entrar
        </Link>
      </p>
    </section>
  );
}
