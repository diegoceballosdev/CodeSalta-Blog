import { Category } from "../category/category.interface";

export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured: boolean;
  views: number | null;
  read_time: number | null;
  cover_image: any;
  seo: null | any;
  category: Category;
  //   cover_image: StrapiImage;
  //   seo: null | SEO;
  //   category: Category;
}
