"use client";

import { useEffect, useRef, useState } from "react";
import { TitleSection } from "../shared/TitleSection";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/interfaces";
import { getStrapiImageUrl } from "@/lib/utils";

interface Props {
  categories: Category[];
}

export const CategoriesSection = ({ categories }: Props) => {
  //* Referencia al contenedor del carrusel:
  const scrollRef = useRef<HTMLDivElement>(null);
  //* Estado para saber si se puede scrollear a la izquierda:
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  //* Estado para saber si se puede scrollear a la derecha:
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll); //

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 304; //* Ancho de una tarjeta (280px) + espacio entre tarjetas (24px)
      const targetScroll =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <TitleSection title="Categorías" />

      <div className="relative w-full">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg backdrop-blur-sm hover:bg-white transition-colors cursor-pointer"
          >
            <BiChevronLeft className="size-8" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg backdrop-blur-sm hover:bg-white transition-colors cursor-pointer"
          >
            <BiChevronRight className="size-8" />
          </button>
        )}

        {/* CARRUSEL  */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="overflow-x-auto overflow-y-hidden py-8 scrollbar-hide"
        >
          <div className="flex gap-6 snap-x snap-mandatory">
            {categories.map((category) => (
              <Link
                href={`/categories/${category.slug}`}
                key={category.id}
                className="shrink-0 group snap-center"
              >
                <div
                  className="w-70 h-48 rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    backgroundColor: category.color || "#333333",
                  }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1">
                    {category.name}
                  </h3>

                  {category.cover_image && (
                    <div className="flex justify-end">
                      <div className="size-20 bg-white rounded-full backdrop-blur-sm flex items-center justify-center">
                        <Image
                          src={getStrapiImageUrl(category.cover_image)}
                          alt={category.name}
                          width={80}
                          height={80}
                          className="object-contain size-15"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
