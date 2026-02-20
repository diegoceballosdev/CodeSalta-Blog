"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";

export const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Gracias por suscribirte!");
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <Logo />
          <p>
            CodeSalta es una plataforma informativa del mundo de la
            programación.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">Enlaces</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-all hover:underline"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="hover:text-primary transition-all hover:underline"
              >
                Todos los posts
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-primary transition-all hover:underline"
              >
                Categorías
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-primary transition-all hover:underline"
              >
                Acerca de
              </Link>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <p>Recibe Actualizaciones</p>
          <div className="flex flex-col lg:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Ingresa tu correo"
              className="rounded border border-gray-600 p-2"
            />
            <button className="bg-primary p-2 rounded">Suscribirse</button>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 justify-center mt-4">
            <a
              href="https://www.facebook.com/"
              className="hover:text-primary transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebook className="size-6" />
            </a>
            <a
              href="https://www.x.com/"
              className="hover:text-primary transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
            >
              <FaXTwitter className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-primary transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:text-primary transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              title="Linkedin"
            >
              <FaLinkedin className="size-6" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="hover:text-primary transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              title="Youtube"
            >
              <FaYoutube className="size-6" />
            </a>
          </div>
        </form>

        <p className="md:col-span-3 text-center">
          &copy; {new Date().getFullYear()} CodeSalta. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
