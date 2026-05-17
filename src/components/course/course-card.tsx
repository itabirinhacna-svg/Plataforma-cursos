import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/types/domain';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden">
        <Image src={course.coverImage} alt={course.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">{course.level}</span>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">{course.category}</p>
        <h3 className="line-clamp-2 text-lg font-black leading-tight">{course.title}</h3>
        <p className="line-clamp-2 text-sm text-amber-900/80">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-amber-900/80">
          <span>{course.lessons} aulas</span>
          <span className="text-lg font-black text-amber-950">R$ {(course.priceCents / 100).toFixed(2)}</span>
        </div>

        <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
          <Link href={`/curso/${course.slug}`}>Quero estudar esse curso</Link>
        </Button>
      </div>
    </article>
  );
}
