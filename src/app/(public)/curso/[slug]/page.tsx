import { notFound } from 'next/navigation';
import { courses } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <section className="grid gap-8 md:grid-cols-[2fr_1fr]">
      <article className="space-y-4">
        <p className="text-sm font-medium text-blue-600">{course.category}</p>
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-slate-600">{course.longDescription}</p>
      </article>

      <aside className="space-y-4 rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-600">Instrutor: {course.instructor}</p>
        <p className="text-sm text-slate-600">Nível: {course.level}</p>
        <p className="text-sm text-slate-600">Aulas: {course.lessons}</p>
        <p className="text-2xl font-bold">R$ {(course.priceCents / 100).toFixed(2)}</p>
        <Button className="w-full">Comprar em breve</Button>
      </aside>
    </section>
  );
}
