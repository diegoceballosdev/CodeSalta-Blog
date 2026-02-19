import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

export const NotFoundPost = () => {
  return (
    <section className="container mt-48 flex flex-col items-center h-[50dvh] gap-4">
      <div className="bg-primary/10 p-6 rounded-full mb-4 animate-bounce">
        <MdArticle size={60} className="text-primary" />
      </div>

      <h2 className="text-4xl text-stone-700 font-bold mb-2">
        No se encontró el artículo
      </h2>
      <p className="text-stone-500 text-lg">
        El artículo que buscas no existe.
      </p>

      <Link
        href={"/"}
        className="flex items-center gap-2 mt-5 text-white font-medium bg-primary rounded-2xl px-6 py-3 hover:bg-primary/80 hover:text-black transition-colors"
      >
        <FaHome size={22} />
        Volver al Inicio
      </Link>
    </section>
  );
};
