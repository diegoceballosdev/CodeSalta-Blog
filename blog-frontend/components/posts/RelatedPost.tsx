import type { Post } from "@/interfaces";
import { CardPost } from "../shared/CardPost";

interface Props {
  posts: Post[];
  slug: string;
}

export const RelatedPosts = ({ posts, slug }: Props) => {
  if (!posts || posts.length === 0) return null; // Si no hay posts o no hay posts disponibles, no se muestra nada

  const filteredPosts = posts.filter((post) => post.slug !== slug); // Evita que el post actual aparezca en la lista de posts relacionados

  if (filteredPosts.length === 0) return null; // Si no hay posts relacionados, no se muestra nada

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-8">Artículos Relacionados</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPosts.slice(0, 2).map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
