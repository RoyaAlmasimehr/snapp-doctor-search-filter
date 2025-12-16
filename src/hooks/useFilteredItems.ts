import { useMemo } from "react";
import { applyFilters } from "../utils/applyFilters";
import type { Filters } from "../types/Filters";
import type { Item } from "../types/item";

export function useFilteredItems(
  items: Item[],
  query: string,
  filters: Filters
) {
  return useMemo(() => {
    
    return applyFilters(items, query, filters);
    
  }, [items, query, filters]);
}
