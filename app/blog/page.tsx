import { BlogPost, BlogPostCard } from "@/components/blogPostCard";
import { client } from "@/lib/sanityClient";
import { getLocale } from "next-intl/server";

const query = `*[_type == "blogPost" && language == $locale]{
  _id,
  "categories": categories[]->title,
  title,
  _createdAt,
  previewText,
  mainImage {
    asset-> {
      url
    }
  },
  language
}`;

const Blog = async () => {
  const locale = await getLocale();
  const blogPosts: BlogPost[] = await client.fetch(query, { locale });

  return (
    <main className="grid grid-cols-[1fr_2fr] gap-4">
      <aside className="bg-lime-100 h-screen sticky top-0">
        <h1>this will be the aside</h1>
      </aside>
      <section className="grid grid-cols-2 gap-4 auto-rows-min">
        {blogPosts.map((postCard: BlogPost) => {
          return <BlogPostCard postCard={postCard} />;
        })}
      </section>
    </main>
  );
};

export default Blog;
