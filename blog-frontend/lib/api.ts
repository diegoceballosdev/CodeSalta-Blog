// POSTS

import type { Category, Post } from "@/interfaces";
import { fetchStrapi } from "./strapi";

export async function getAllPosts(
  page: number = 1,
): Promise<{ posts: Post[]; hasMore: boolean }> {
  const data = await fetchStrapi("/posts", {
    populate: "*",
    sort: ["publishedAt:desc"],
    pagination: {
      page,
      pageSize: 9,
    },
  });

  console.log(data);
  return {
    posts: data.data,
    hasMore: page < data.meta.pagination.pageCount,
  };
}

export async function getFeaturedPost(): Promise<Post[]> {
  const data = await fetchStrapi("/posts", {
    populate: "*",
    filters: {
      featured: true,
    },
    sort: ["publishedAt:desc"],
    pagination: {
      pageSize: 5,
    },
  });

  return data.data;
}

export async function getLastPost(): Promise<Post[]> {
  const data = await fetchStrapi("/posts", {
    populate: "*",
    sort: ["publishedAt:desc"],
    pagination: {
      pageSize: 5,
    },
  });

  return data.data;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await fetchStrapi("/posts", {
    populate: {
      category: {
        populate: {
          posts: {
            populate: "*",
          },
        },
      },
      cover_image: true,
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  return data.data[0];
}

// CATEGORIES

export async function getAllCategories(): Promise<Category[]> {
  const data = await fetchStrapi("/categories", {
    populate: "*", // populate: "*" es para traer todos los datos de la categoria (incluye imagenes y posts)
    sort: ["name:asc"],
  });

  return data.data;
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const data = await fetchStrapi("/categories", {
    populate: {
      posts: {
        populate: "*",
      },
      cover_image: true,
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  return data.data[0];
}

// SEARCH

export async function searchPosts(queryTerm: string): Promise<Post[]> {
  const data = await fetchStrapi("/posts", {
    populate: "*",
    filters: {
      // Esto es una busqueda simple por titulo:
      //   title: {
      //     $containsi: queryTerm,
      //   },

      //   Y esto es una busqueda ampliada con OR:
      $or: [
        {
          title: {
            $containsi: queryTerm,
          },
        },
        {
          excerpt: {
            $containsi: queryTerm,
          },
        },
      ],
    },
    sort: ["publishedAt:desc"],
  });

  return data.data;
}
