export interface CourseModule {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  role: string;
  text: string;
  avatar: string;
}