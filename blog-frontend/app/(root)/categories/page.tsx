import { CategoryCard, Separator } from "@/components";
import { getAllCategories } from "@/lib/api";

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  const totalPosts = categories.reduce(
    (acc, category) => acc + category.posts.length,
    0,
  );

  return (
    <>
      <div className="mt-24 flex flex-col items-center justify-center gap-6 container">
        <h1 className="text-4xl md:text-5xl text-center font-bold">
          Todas las
          <span className="text-primary ml-3">Categorías</span>
        </h1>
        <p className="text-lg">
          {categories.length} categorías con {totalPosts} artículos para
          explorar
        </p>
      </div>

      <Separator className="my-24" />

      <div className="container my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
