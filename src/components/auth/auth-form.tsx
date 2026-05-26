'use client';

import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const supabase = createBrowserClient();
    const method = mode === 'login' ? supabase.auth.signInWithPassword : supabase.auth.signUp;
    const { error } = await method({ email, password });

    setMessage(error ? error.message : 'Operação realizada com sucesso.');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          className="w-full rounded-md border p-2"
          placeholder="voce@exemplo.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium" htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          className="w-full rounded-md border p-2"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button className="w-full" disabled={loading} type="submit">
        {loading ? 'Carregando...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
      </Button>

      {message && <p className="text-xs text-slate-600">{message}</p>}
    </form>
  );
}
