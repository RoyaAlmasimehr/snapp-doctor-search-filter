

import { searchItems } from "./searchItems";
import type { Filters } from "../types/Filters";
import type { Item } from "../types/item";
import { filterItems } from "./filterItems";

export function applyFilters(
  items: Item[],
  query: string,
  filters: Filters
): Item[] {
  const searched = searchItems(items, query);
  return filterItems(searched, filters);
}
