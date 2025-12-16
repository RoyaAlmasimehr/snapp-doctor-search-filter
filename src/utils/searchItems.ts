import type { Item } from "../types/item";

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, "");
}

export function searchItems(items: Item[], query: string): Item[] {
  const q = normalize(query);
  if (!q) return items;

  return items.filter((item) => normalize(item.name).includes(q));
}
