"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchForm } from "./SearchForm";
import { Logo } from "./Logo";
import { FaGlobe, FaSearch, FaTimes } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="py-5 container flex justify-between items-center gap-7">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Logo />

          {/*  Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-5">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categorias
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search */}
        <SearchForm />

        {/* <div className="hidden md:flex items-center gap-1">
          <FaGlobe size={24} color="#333" />

          <select name="" id="" className="bg-transparent">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div> */}

        <div className="flex items-center md:hidden gap-6">
          <button
            aria-label="Abrir busqueda"
            aria-expanded={isSearchOpen}
            onClick={toggleSearch}
          >
            <FaSearch size={24} color="#333" />
          </button>

          <button
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <FaBarsStaggered size={24} color="#333" />
          </button>
        </div>
      </div>

      {/* Search in Mobile */}
      {isSearchOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 m-4 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Buscar Publicaciones</h3>
              <button
                aria-label="Cerrar busqueda"
                aria-expanded={isSearchOpen}
                onClick={toggleSearch}
                className="p-2"
              >
                <FaXmark size={20} color="#333" />
              </button>
            </div>

            <SearchForm isInMobile onSearch={toggleSearch} />
          </div>
        </div>
      )}

      {/* Menu responsive */}
      <div
        className={cn(
          "md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="p-2"
              aria-label="Cerrar menú"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Todos los posts
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="block py-2 hover:text-blue-600 transition-colors"
                  onClick={closeMenu}
                >
                  Categorías
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language Selector */}
          {/* <div className="flex items-center gap-2 pt-4 border-t">
            <FaGlobe size={20} color="#333" />
            <select className="bg-transparent flex-1 py-2">
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>
          </div> */}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};
