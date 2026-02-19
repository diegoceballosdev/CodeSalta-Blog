import {
  Breadcrumb,
  CardPost,
  CategorySimpleCard,
  NotFoundCategory,
  Separator,
} from "@/components";
import { getAllCategories, getCategoryBySlug } from "@/lib/api";
import { getStrapiImageUrl } from "@/lib/utils";
import Image from "next/image";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) return <NotFoundCategory />;

  const totalReadingTime = category?.posts.reduce(
    (acc, post) => acc + (post.read_time || 0),
    0,
  );

  const categories = await getAllCategories();

  return (
    <>
      <div className="my-12 container">
        <Breadcrumb />

        <section className="flex flex-col items-center justify-center gap-4 mt-12">
          <div className="flex gap-6 w-full">
            <div
              className="p-4 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: `${category.color}30` || "#3178c615",
              }}
            >
              <Image
                src={getStrapiImageUrl(category.cover_image)}
                alt={category.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="flex-1 flex flex-col gap-3 my-3">
              <h1 className="text-4xl font-bold">{category.name}</h1>
              <p className="text-gray-500 line-clamp-2">
                {category.description}
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-10 w-full">
            <p className="flex items-center gap-2 text-gray-500">
              <span className="font-bold text-3xl text-yellow-500">
                {category.posts.length}
              </span>
              <span>Artículos</span>
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              <span className="font-bold text-3xl text-yellow-500">
                {totalReadingTime}
              </span>
              <span>min de lectura</span>
            </p>
          </div>
        </section>
      </div>

      <Separator className="bg-yellow-500/50" />

      {category.posts.length > 0 ? (
        <section className="container my-12">
          <h2 className="text-2xl font-bold mb-6">
            Los últimos artículos en{" "}
            <span
              style={{
                color: category.color || "#3178c6",
              }}
            >
              {category.name}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.posts.map((post) => (
              <CardPost key={post.id} post={post} />
            ))}
          </div>
        </section>
      ) : (
        <section className="container my-12 flex items-center justify-center">
          <h2 className="text-2xl font-bold mb-6">
            No se encontraron artículos para esta categoría
          </h2>
        </section>
      )}

      <Separator className="bg-yellow-500/50" />

      <section className="container my-12">
        <h2 className="text-2xl font-bold mb-6">Explorar otras categorías</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories
            .filter((c) => c.slug !== slug)
            .slice(0, 4)
            .map((category) => (
              <CategorySimpleCard key={category.id} category={category} />
            ))}
        </div>
      </section>
    </>
  );
}
