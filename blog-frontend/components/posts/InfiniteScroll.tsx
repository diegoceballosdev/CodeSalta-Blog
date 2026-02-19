"use client";

import type { Post } from "@/interfaces";
import { CardPost } from "../shared/CardPost";
import { useEffect, useRef, useState } from "react";

interface Props {
  initialPosts: Post[];
  initialHasMore: boolean;
}

export const InfiniteScrollPosts = ({
  initialPosts,
  initialHasMore,
}: Props) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMore = async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const nextPage = page + 1;

    const res = await fetch(`/api/posts?page=${nextPage}`);
    const data = await res.json();

    setPosts((prev) => [...prev, ...data.posts]);
    setHasMore(data.hasMore);
    setPage(nextPage);
    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoading, page]);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </section>

      {hasMore && (
        <div ref={observerRef} className="py-8 text-center">
          {isLoading && <p>Cargando...</p>}
        </div>
      )}
    </>
  );
};
