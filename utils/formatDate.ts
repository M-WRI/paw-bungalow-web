import { format } from "date-fns";

export const formattedDate = ({ date }: { date: Date }) => {
  return date ? format(new Date(date), "dd.MM.yyyy") : "";
};
