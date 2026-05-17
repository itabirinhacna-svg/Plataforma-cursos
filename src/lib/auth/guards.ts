import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/supabase/server';

export async function requireAuth() {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getSession();
  if (!data.session) redirect('/login');
  return data.session;
}
