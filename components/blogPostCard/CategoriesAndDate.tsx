import { formattedDate } from "@/utils";

export const CategoriesAndDate = ({
  date,
  categories,
}: {
  date: Date;
  categories: string[];
}) => {
  return (
    <div>
      <p className="text-sm">
        {`${categories.join(", ")} - ${formattedDate({ date })}`}
      </p>
    </div>
  );
};
