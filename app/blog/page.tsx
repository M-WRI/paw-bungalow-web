import { BlogPostList } from "@/components/blogPostList";
import { client } from "@/lib/sanityClient";
import { getLocale } from "next-intl/server";

export interface Category {
  language: string;
  title: string;
}

const query = `*[_type == "category" && language == $locale] {
  language,
  title
}`;

const Blog = async () => {
  const locale = await getLocale();
  const categories: Category[] = await client.fetch(query, { locale });

  return (
    <main className="grid grid-cols-[1fr_2fr] gap-4 px-4 py-4">
      <aside className="h-screen sticky top-0">
        <div className="w-full border-gray-100 border-t-2 pt-4 grid gap-4">
          <p className="text-xl text-center">Categories</p>
          <ul>
            {categories.map((category: Category) => (
              <li
                key={category.title}
                className="hover:bg-gray-100 transition-all duration-300 ease-in-out py-2 px-4 cursor-pointer rounded-lg"
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <BlogPostList />
    </main>
  );
};

export default Blog;
