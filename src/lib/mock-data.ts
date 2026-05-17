import { Course } from '@/types/domain';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'nextjs-do-zero-ao-deploy',
    title: 'Next.js do Zero ao Deploy',
    description: 'Crie produtos modernos com App Router e TypeScript.',
    longDescription:
      'Aprenda arquitetura de aplicações modernas, SSR, rotas protegidas, autenticação e deploy em produção.',
    level: 'Iniciante',
    priceCents: 19700,
    lessons: 24,
    category: 'Desenvolvimento',
    instructor: 'Time EduStack',
    coverImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&q=80'
  },
  {
    id: '2',
    slug: 'arquitetura-saas-escalavel',
    title: 'Arquitetura SaaS Escalável',
    description: 'Boas práticas para crescer com segurança e performance.',
    longDescription:
      'Do monolito modular ao crescimento com filas, observabilidade e governança de acesso em plataformas digitais.',
    level: 'Intermediário',
    priceCents: 29700,
    lessons: 18,
    category: 'Arquitetura',
    instructor: 'Especialistas convidados',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80'
  }
];
