import { client } from "@/lib/sanityClient";
import { getLocale } from "next-intl/server";
import { Image } from "next-sanity/image";

const query = `*[_type == "blogPost" && language == $locale]{
  _id,
  "categories": categories[]->title,
  title,
  mainImage {
    asset-> {
      url
    }
  },
  language
}`;

const Blog = async () => {
  const locale = await getLocale();
  const blogPosts = await client.fetch(query, { locale });

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center relative font-primary bg-secondary">
      <div className="grid gap-4">
        <h1 className="font-medium text-primary text-5xl text-center">Blog</h1>
        {Array.isArray(blogPosts) && blogPosts.length > 0 ? (
          blogPosts.map((post: any) => (
            <div key={post._id} className="p-4 border rounded">
              <h2 className="text-2xl">{post.title}</h2>
              <p>{post.language}</p>
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={100}
                height={100}
              />
              <div>{post.categories.join(", ")}</div>
            </div>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </main>
  );
};

export default Blog;
