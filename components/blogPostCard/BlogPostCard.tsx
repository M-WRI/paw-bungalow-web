import { Image } from "./Image";
import { CategoriesAndDate } from "./CategoriesAndDate";
import { Body } from "./Body";

export interface BlogPost {
  _id: string;
  categories: string[];
  title: string;
  _createdAt: Date;
  mainImage: {
    asset: {
      url: string;
    };
  };
  language: string;
  previewText: string;
}

export const BlogPostCard = ({ postCard }: { postCard: BlogPost }) => {
  return (
    <div className="overflow-hidden grid gap-2 rounded-xl cursor-pointer">
      <Image src={postCard.mainImage.asset.url} alt={postCard.title} />
      <CategoriesAndDate
        date={postCard._createdAt}
        categories={postCard.categories}
      />
      <Body title={postCard.title} previewText={postCard.previewText} />
    </div>
  );
};
