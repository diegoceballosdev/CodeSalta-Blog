import { CardPost } from "@/components";
import { searchPosts } from "@/lib/api";

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";

  const results = query ? await searchPosts(query) : [];

  return (
    <div className="container px-4 py-8 mt-20">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Resultados de búsqueda</h1>
        {query && (
          <p className="text-gray-600 mt-2">
            Mostrando resultados para: <strong>{query}</strong>
          </p>
        )}
      </div>

      {!query ? (
        <p className="text-gray-500">Escribe algo para buscar...</p>
      ) : results.length === 0 ? (
        <p className="text-gray-500">
          No se encontraron resultados para {query}
        </p>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4">
            {results.length} resultado
            {results.length !== 1 ? "s" : ""} encontrado
            {results.length !== 1 ? "s" : ""}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {results.map((result) => (
              <CardPost key={result.id} post={result} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
