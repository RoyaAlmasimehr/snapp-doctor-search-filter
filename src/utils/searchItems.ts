import type { Item } from "../types/item";
export function searchItems(items: Item[], query: string):Item[] {
  if (!query.trim()) return items;

  const lower = query.toLowerCase();

  return items.filter((item) => item.name.toLowerCase().includes(lower));
}
