import { format, parseISO } from "date-fns";

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  // @ts-ignore
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
}
