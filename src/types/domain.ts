export type UserRole = 'student' | 'admin' | 'teacher';

export type CourseLevel = 'Iniciante' | 'Intermediário' | 'Avançado';

export type TeachingMaterialType =
  | 'sequencia_didatica'
  | 'plano_aula'
  | 'slide'
  | 'apostila_questoes'
  | 'gabarito'
  | 'material_complementar';

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

export interface TeachingMaterial {
  id: string;
  courseId: string;
  lessonId?: string;
  title: string;
  description: string;
  type: TeachingMaterialType;
  audience: 'teacher' | 'student' | 'both';
  format: 'pdf' | 'ppt' | 'doc' | 'link';
  url: string;
  isPublished: boolean;
}
