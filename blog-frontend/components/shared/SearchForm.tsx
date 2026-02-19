"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  isInMobile?: boolean;
  className?: string;
  onSearch?: () => void;
}

export const SearchForm = ({
  isInMobile = false,
  className = "",
  onSearch,
}: Props) => {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("q") as string;

    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.toLowerCase())}`);

      onSearch?.();
    }
  }

  return (
    <form
      className={cn(
        "flex-1 items-center gap-2 bg-white rounded-md py-1 px-4 shadow-sm",
        isInMobile ? "md:hidden flex" : "hidden md:flex",
        className,
      )}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="q"
        placeholder="Buscar posts..."
        className="w-full py-1 focus:outline-none"
      />

      <button type="submit" className="focus:outline-none cursor-pointer">
        <FaSearch size={16} />
      </button>
    </form>
  );
};
