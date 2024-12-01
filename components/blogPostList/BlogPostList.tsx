import { getLocale } from "next-intl/server";
import { BlogPost, BlogPostCard } from "../blogPostCard";
import { client } from "@/lib/sanityClient";

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

export const BlogPostList = async () => {
  const locale = await getLocale();
  const blogPosts: BlogPost[] = await client.fetch(query, { locale });

  return (
    <section className="grid grid-cols-2 gap-4 auto-rows-min">
      {blogPosts.map((postCard: BlogPost, i) => {
        return <BlogPostCard postCard={postCard} i={i} />;
      })}
    </section>
  );
};
