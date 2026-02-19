import { Breadcrumb, InfiniteScrollPosts } from "@/components";
import { getAllPosts } from "@/lib/api";

export default async function PostsPage() {
  const { posts, hasMore } = await getAllPosts();

  return (
    <div className="container my-24">
      {/* BreadCrumb */}
      <Breadcrumb />

      <section className="space-y-3">
        <h1 className="text-4xl font-bold">
          Explora todos los
          <span className="text-primary ml-2">Artículos</span>
        </h1>
        <p className="text-gray-500 text-lg">
          Encuentra tutoriales, guías y recursos para ayudarte a aprender y
          crecer como desarrollador.
        </p>
      </section>

      <InfiniteScrollPosts initialPosts={posts} initialHasMore={hasMore} />
    </div>
  );
}
