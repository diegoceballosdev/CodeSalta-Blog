import { FeaturedSection, HeroSection } from "@/components";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { getAllCategories, getFeaturedPost } from "@/lib/api";

export default async function Home() {
  const categories = await getAllCategories();
  const featuredPosts = await getFeaturedPost();

  return (
    <>
      <HeroSection />
      <div className="container py-10 space-y-12">
        <FeaturedSection items={featuredPosts} />
        <CategoriesSection categories={categories} />
        <NewsletterSection />
      </div>
    </>
  );
}
