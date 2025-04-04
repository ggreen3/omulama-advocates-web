
export interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  image: string;
  date: string;
  content: string;
  excerpt: string;
  tags?: string[];
  views?: number;
  liked?: boolean;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  email: string;
  content: string;
  date: string;
  approved: boolean;
}
