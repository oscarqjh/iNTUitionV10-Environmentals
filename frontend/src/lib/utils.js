import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
