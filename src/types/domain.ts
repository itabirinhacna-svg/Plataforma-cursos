export type UserRole = 'student' | 'admin';

export type CourseLevel = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  level: CourseLevel;
  priceCents: number;
  lessons: number;
  category: string;
  instructor: string;
  coverImage: string;
}
