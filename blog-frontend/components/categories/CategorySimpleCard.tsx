"use client";

import type { Category } from "@/interfaces";
import { getStrapiImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: Category;
}

export const CategorySimpleCard = ({ category }: Props) => {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="border rounded-2xl p-4 flex flex-col items-center justify-center gap-2"
      style={{
        borderColor: `${category.color}70` || "#3178c615",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor =
          `${category.color}40` || "#3178c615")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <Image
        src={getStrapiImageUrl(category.cover_image)}
        alt={category.name}
        width={50}
        height={50}
        className="object-contain"
      />

      <p>{category.name}</p>
    </Link>
  );
};
