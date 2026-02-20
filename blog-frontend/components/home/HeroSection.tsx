"use client";

import toast from "react-hot-toast";
import { GiSparkles } from "react-icons/gi";

export const HeroSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Gracias por suscribirte!");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black to-primary/90 bg-fixed"
        style={{ backgroundImage: "url('/hero-img.png')" }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8">
            <GiSparkles className="size-4" />
            <span className="text-sm font-medium">
              Contenido nuevo cada semana
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight text-shadow-black text-shadow-lg">
            Mejora tus habilidades{" "}
            <span className="gradient-text">como programador</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto drop-shadow-lg text-shadow-black text-shadow-md">
            Domina el desarrollo web moderno con tutoriales expertos, mejores
            prácticas y proyectos del mundo real.
          </p>

          <div className="rounded-2xl p-2 max-w-lg mx-auto bg-white">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="flex-1 h-12 border-0 px-5 focus:outline-none"
                required
              />
              <button className="h-12 px-8 bg-linear-to-r from-sky-500 to-blue-600 rounded-xl text-white font-semibold cursor-pointer">
                Suscribirse
              </button>
            </form>
          </div>

          <p className="text-sm text-white mt-6 drop-shadow-lg text-shadow-black text-shadow-md">
            Únete a{" "}
            <span className="text-white font-semibold drop-shadow-lg">
              1,000+
            </span>{" "}
            desarrolladores aprendiendo con nosotros
          </p>
        </div>
      </div>
    </section>
  );
};
