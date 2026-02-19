import type { Post } from "../post/post.interface";
// import type { StrapiImage } from '../shared/shared.interface';

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: null | string;
  color: null | string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  posts: Post[];
  cover_image: any;
  //   cover_image: StrapiImage;
}
