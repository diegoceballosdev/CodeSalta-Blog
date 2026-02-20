import { FeaturedSection, HeroSection } from "@/components";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { LastSection } from "@/components/home/LastSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { getAllCategories, getFeaturedPost, getLastPost } from "@/lib/api";

export default async function Home() {
  const categories = await getAllCategories();
  const featuredPosts = await getFeaturedPost();
  const lastPosts = await getLastPost();

  return (
    <>
      <HeroSection />
      <div className="container py-10 space-y-12">
        <FeaturedSection items={featuredPosts} />
        <CategoriesSection categories={categories} />
        <LastSection items={lastPosts} />
        <NewsletterSection />
      </div>
    </>
  );
}
