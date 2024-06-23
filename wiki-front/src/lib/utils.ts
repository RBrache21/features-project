import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const formattedDate = date.toISOString().split("T")[0];
  const [year, month, day] = formattedDate.split("-");
  return `${year}/${month}/${day}`;
}
