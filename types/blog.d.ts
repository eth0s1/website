export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  files?: Array<{
    name: string;
    url: string;
    size: string;
  }>;
  hazirlayanlar?: string;
  pdf?: string;
} 