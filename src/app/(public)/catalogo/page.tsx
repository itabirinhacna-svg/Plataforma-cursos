import { CourseCard } from '@/components/course/course-card';
import { courses } from '@/lib/mock-data';

export default function CatalogPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black">Cursos para concursos municipais</h1>
        <p className="mt-2 text-amber-900/80">Trilhas organizadas para iniciantes, com linguagem simples e foco no que realmente cai na prova.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
