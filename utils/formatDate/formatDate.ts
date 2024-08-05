import { format, parseISO } from "date-fns";

export const formatDate = (dateString: string) => {
  try {
    console.log(dateString);
    const date = parseISO(dateString);
    return format(date, "d MMMM yyyy"); // e.g., "6 August 2024"
  } catch (error) {
    console.error("Invalid date format:", dateString, error);
    return "Invalid date";
  }
};
