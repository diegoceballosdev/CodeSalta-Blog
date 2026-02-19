import {
  AuthorCard,
  Breadcrumb,
  MarkdownRenderer,
  NotFoundPost,
  RelatedPosts,
  Separator,
} from "@/components";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { posts } from "@/data";
import { getPostBySlug } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { BiCalendar } from "react-icons/bi";
import { BsClock, BsEye } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return <NotFoundPost />;

  return (
    <div className="my-24 container">
      <Breadcrumb />

      <article className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-stone-500 text-lg"> {post.excerpt}</p>

        <div className="flex gap-5 items-center-text-stone-500">
          <div className="flex items-center gap-2">
            <FaUser size={15} />
            <span>CodeCraft Master</span>
          </div>
          <div className="flex items-center gap-2">
            <BiCalendar size={18} />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsClock size={18} />
            <span>{post.read_time} min</span>
          </div>
          <div className="flex items-center gap-2">
            <BsEye size={18} />
            <span>{post.views} views</span>
          </div>
        </div>

        <Separator className="my-5" />

        {/* markdown contenido */}
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={post.content} />
        </div>

        <Separator className="my-5" />

        <AuthorCard />

        <RelatedPosts posts={posts} slug={post.slug} />

        <NewsletterSection />
      </article>
    </div>
  );
}
