import { envVars } from "@/config/envVars";
import { StrapiImage } from "@/interfaces/shared/shared.interface";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Funcion para combinar classes:
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

export function formatDate(date: string): string {
  // Devuelve este formato: 16 febrero de 2026
  return new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

/**
 * Genera un array de breadcrumbs basado en la URL actual.
 * @param pathname La ruta actual (ej: /posts/mi-post)
 * @returns Un array de objetos con label y href
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split("/").filter((path) => path !== ""); // Divide la ruta por / y elimina los elementos vacíos

  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`; // Une los elementos desde el inicio hasta el índice actual

    // Formatear el label: reemplazar guiones por espacios y capitalizar
    const label = path
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { label, href };
  });

  return [{ label: "Inicio", href: "/" }, ...breadcrumbs];
}

/**
 * Obtiene la URL completa de una imagen de Strapi.
 * - Si la URL ya es absoluta, la retorna tal cual.
 * - Si la URL es relativa, la concatena con la baseURL de Strapi.
 */
export function getStrapiImageUrl(image: StrapiImage): string {
  if (!image?.url) return "/placeholder.jpg";

  // Si la URL ya es absoluta (empieza con http), retornarla tal cual
  if (image.url.startsWith("http")) {
    return image.url;
  }

  // Concatenar baseURL con la URL relativa
  return `${envVars.STRAPI_URL}${image.url}`;
}

/**
 * Calcula el color de texto óptimo (blanco o negro) basado en la luminosidad del fondo.
 * Usa la fórmula de luminancia relativa WCAG.
 * @param hexColor Color en formato hexadecimal (ej: #FF5733 o #FFF)
 * @returns '#ffffff' para fondos oscuros, '#000000' para fondos claros
 */
export function getContrastTextColor(hexColor: string): string {
  // Remover el # si existe
  const hex = hexColor.replace("#", "");

  // Expandir formato corto (ej: FFF -> FFFFFF)
  const fullHex =
    hex.length === 3
      ? hex
          .split("")
          .map((c) => c + c)
          .join("")
      : hex;

  // Convertir a RGB
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  // Calcular luminancia relativa (fórmula WCAG)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Si la luminancia es mayor a 0.5, el fondo es claro -> texto negro
  return luminance > 0.5 ? "#000000" : "#ffffff";
}
