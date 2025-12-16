import type { Filters } from "../types/Filters";
import type { Item } from "../types/item";
export function filterItems(items: Item[], filters: Filters): Item[] {
  return items.filter((item) => {
    const { category, status, minPrice, maxPrice } = filters;
    if (category && item.category !== category) return false;
    if (status && item.status !== status) return false;
    if (minPrice != null && item.price < minPrice) return false;
    if (maxPrice != null && item.price > maxPrice) return false;

    return true;
  });
}

