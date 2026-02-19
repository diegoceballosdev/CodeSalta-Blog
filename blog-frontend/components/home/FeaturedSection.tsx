import type { Post } from "@/interfaces";
import { CardPost } from "../shared/CardPost";
import { TitleSection } from "../shared/TitleSection";

interface Props {
  items: Post[];
}

export const FeaturedSection = ({ items }: Props) => {
  return (
    <section className="flex flex-col gap-5">
      <TitleSection title="Artículos Destacados" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8">
        {items.slice(0, 2).map((item) => (
          <CardPost key={item.id} post={item} />
        ))}
      </div>
    </section>
  );
};
