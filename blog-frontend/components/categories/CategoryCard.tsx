import type { Category } from "@/interfaces";
import { getStrapiImageUrl } from "@/lib/utils";
// import { getStrapiImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: Category;
}

export const CategoryCard = ({ category }: Props) => {
  const totalPosts = category.posts.length;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group p-6 bg-white border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{
        borderColor: `${category.color}50` || "#3178c650",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="p-4 rounded-xl group-hover:scale-110 transition-transform duration-300"
          style={{
            backgroundColor: `${category.color}15` || "#3178c615",
          }}
        >
          <Image
            src={getStrapiImageUrl(category.cover_image)}
            alt={category.name}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
              {category.name}
            </h2>
            <span
              className="font-mono font-bold"
              style={{
                color: category.color || "#3178c6",
              }}
            >
              {totalPosts}
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>
            {totalPosts} {totalPosts === 1 ? "artículo" : "artículos"}
          </span>
        </div>
      </div>
    </Link>
  );
};
