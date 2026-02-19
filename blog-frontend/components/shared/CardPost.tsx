import type { Post } from "@/interfaces";
import {
  formatDate,
  getContrastTextColor,
  getStrapiImageUrl,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

export const CardPost = ({ post }: Props) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex flex-col gap-2 md:gap-3 group"
    >
      <div className="relative overflow-hidden rounded-lg md:rounded-xl">
        <Image
          src={getStrapiImageUrl(post.cover_image)}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-48 sm:h-56 md:52 lg:h-64 object-cover rounded-lg md:rounded-xl group-hover:scale-105 transition-all duration-500"
        />

        <span
          className="rounded-full absolute top-2 left-2 md:top-3 md:left-3 px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium"
          style={{
            backgroundColor: post.category?.color || "#00000080",
            color: getContrastTextColor(post.category?.color || "#000000"),
          }}
        >
          {post.category?.name}
        </span>
      </div>

      <div className="flex flex-col gap-0.5 md:gap-1">
        <div className="flex items-center gap-1 5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm text-[#333]">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="size-0.5 sm:size-1 rounded-full bg-gray-500"></span>
          <span>{post.read_time} min de lectura</span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};
