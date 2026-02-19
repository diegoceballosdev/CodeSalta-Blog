"use client";

import { generateBreadcrumbs } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight, FaHome } from "react-icons/fa";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  if (pathname === "/" || breadcrumbs.length <= 1) return null;

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center gap-y-2 flex-wrap text-sm">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1; // Verifica si es el último elemento

          return (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && ( // Si no es el primer elemento, se muestra el separador
                <FaChevronRight className="mx-1.5 sm:mx-3 text-gray-300 text-[10px]" />
              )}

              {isLast ? ( // Si es el último elemento, se muestra como texto plano
                <span className="font-bold text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10 shadow-sm transition-all duration-300">
                  {breadcrumb.label}
                </span>
              ) : (
                // Si no es el último elemento, se muestra como un enlace
                <Link
                  href={breadcrumb.href}
                  className="group flex items-center gap-1.5 text-gray-500 hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {index === 0 ? ( // Si es el primer elemento, se muestra el icono de home
                    <div className="p-2 bg-gray-50 group-hover:bg-primary/10 rounded-xl transition-all duration-300 border border-gray-100 group-hover:border-primary/10 shadow-sm">
                      <FaHome
                        size={14}
                        className="text-gray-500 group-hover:text-primary"
                      />
                    </div>
                  ) : (
                    // Si no es el primer elemento, se muestra como texto plano
                    <span className="font-medium hover:underline decoration-primary/30 underline-offset-4 decoration-2">
                      {breadcrumb.label}
                    </span>
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
