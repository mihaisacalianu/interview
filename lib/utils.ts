import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getIdFromUrl = (url: string): number => {
  const parsedUrl = url.split('/').filter(Boolean).pop();
  return parsedUrl ? parseInt(parsedUrl, 10) : 0;
};
