import { format } from "date-fns";

export function formatDateFriendly(date: Date) {
  return format(date, "d MMMM yyyy, HH:mm");
}
