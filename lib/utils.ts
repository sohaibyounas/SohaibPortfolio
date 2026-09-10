import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(idOrHref: string) {
  if (typeof window === "undefined") return;
  const id = idOrHref.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const navHeight = 64;
  const container = el.querySelector(".container") || el;
  const containerRect = container.getBoundingClientRect();
  const targetY = window.pageYOffset + containerRect.top - navHeight - 20;

  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: "smooth",
  });
}

