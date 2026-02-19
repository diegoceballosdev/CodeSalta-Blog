import Link from "next/link";
import { FaLayerGroup } from "react-icons/fa";

export const NotFoundCategory = () => {
  return (
    <div className="container my-12 flex flex-col items-center justify-center h-[50dvh] gap-4">
      <div className="bg-primary/10 p-6 rounded-full mb-4 animate-bounce">
        <FaLayerGroup size={60} className="text-primary" />
      </div>

      <h2 className="text-4xl text-stone-700 font-bold">
        Categoría no encontrada
      </h2>

      <p className="text-stone-500 text-lg max-w-md text-center">
        La categoría que buscas no existe o ha sido movida. ¡Intenta explorar
        nuestras otras categorías!
      </p>

      <Link
        href="/categories"
        className="flex items-center gap-2 mt-5 text-white font-medium bg-primary rounded-2xl px-8 py-3 hover:bg-primary/80 transition-all duration-300 shadow-lg hover:text-black hover:shadow-primary/20"
      >
        <FaLayerGroup size={20} />
        Ver todas las categorías
      </Link>
    </div>
  );
};
