// src/lib/utils.js

/**
 * Combines multiple class names into a single string.
 * Removes falsy values (null, undefined, false, 0).
 * 
 * Example:
 * cn('btn', isActive && 'btn-active', size === 'lg' && 'btn-lg')
 * -> "btn btn-active btn-lg"
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a date to a readable string (optional utility)
 */
export function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Returns a random ID string.
 * Example: randomId("toast") -> "toast-82713"
 */
export function randomId(prefix = "id") {
  return `${prefix}-${Math.floor(Math.random() * 100000)}`;
}
