export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  author: string;
  coverImage: string;
  tags: string[];
}