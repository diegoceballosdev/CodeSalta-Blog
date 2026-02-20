"use client";

import toast from "react-hot-toast";
import { CgCheck } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

const benefits = [
  "Contenido exclusivo de desarrollo web",
  "Actualizaciones semanales",
  "Tips y trucos",
  "Sin spam, solo contenido de calidad",
];

export const NewsletterSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Gracias por suscribirte!");
  };

  return (
    <section className="relative border boder-black/20 text-white min-h-100 rounded-3xl py-8 md:py-12 px-8 md:px-16 mt-20 mb-5 overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-linear-to-br from-black to-primary/90" />

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 z-10 relative">
        <div className="flex flex-col gap-3 flex-1">
          <div className="bg-white rounded-xl size-14 flex items-center justify-center">
            <MdEmail className="size-10 text-primary" />
          </div>

          <h2 className="text-3xl gradient-text font-bold">
            Únete a nuestro boletín
          </h2>

          <p className="text-lg font-light mb-4 text-gray-300">
            Recibe contenido exclusivo de desarrollo web directamente en tu
            bandeja de entrada.
          </p>

          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full size-5 flex items-center justify-center">
                  <CgCheck className="size-5 text-primary" />
                </div>

                <p className="text-gray-300">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 gap-4 md:my-10 my-5 bg-blue-500/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-lg"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="tu@correo.com"
            className="p-4 border bg-linear-to-br from-black/50 to-black/50 border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />

          <button
            type="submit"
            className="p-4 from-sky-500 to-blue-600 bg-linear-to-br rounded-xl text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suscribirse Gratis
          </button>

          <p className="text-sm text-gray-300 text-center w-3/4 mx-auto">
            Al suscribirte, aceptas recibir correos electrónicos. Puedes
            cancelar tu suscripción en cualquier momento.
          </p>
        </form>
      </div>
    </section>
  );
};
