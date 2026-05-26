# Plataforma de Cursos (MVP Base)

Stack: Next.js App Router + TypeScript + Tailwind + shadcn/ui + Supabase.

## Módulos atuais
- Home e catálogo com identidade pedagógica
- Login e cadastro
- Área do aluno protegida
- Área administrativa básica
- Componentes de estratégia, revisão, dica e questão comentada
- Base de schema no Supabase com cursos, aulas, compras e materiais didáticos

## Materiais para professores e apoio didático
A base já está preparada para comportar:
- sequência didática
- plano de aula
- slides
- apostila de questões
- gabaritos

> Estrutura inicial no banco: tabela `teaching_materials` (relacionada com curso/aula).

## Rodar localmente
1. Copie `.env.example` para `.env.local` e preencha suas chaves do Supabase
2. Instale dependências: `npm install`
3. Rode: `npm run dev`
4. Acesse: `http://localhost:3000`

## O que o projeto já cobre (parte técnica finalizada)
- Estrutura de UI e autenticação
- Rotas protegidas para aluno/admin
- Tipos de domínio para materiais didáticos
- Exibição inicial de materiais no dashboard do aluno

## Próxima etapa (sua parte)
- Criar/organizar os arquivos reais dos materiais (PDF, PPT, DOC)
- Definir fluxo editorial (quem cria/publica)
- Subir os materiais no storage do Supabase
- Publicar versão web em produção
