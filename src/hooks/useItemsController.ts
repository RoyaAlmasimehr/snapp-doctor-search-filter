import { useState, useMemo, useCallback } from "react";
import { generateDataset } from "../data/generateDataset";
import { useFilteredItems } from "./useFilteredItems";
import { useDebouncedValue } from "./useDebouncedValue";
import type { Filters } from "../types/Filters";
import type { Item } from "../types/item";

interface UseItemsControllerResult {
  items: Item[];
  rawQuery: string;
  setRawQuery: (value: string) => void;
  filters: Filters;
  updateFilters: (partial: Partial<Filters>) => void;
}

export function useItemsController(
  initialCount = 5000
): UseItemsControllerResult {
 
  const items = useMemo(() => generateDataset(initialCount), [initialCount]);

  
  const [rawQuery, setRawQuery] = useState("");
  const query = useDebouncedValue(rawQuery, 300);


  const [filters, setFilters] = useState<Filters>({});

  const filteredItems = useFilteredItems(items, query, filters);

  const updateFilters = useCallback((partial: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  }, []);

  return {
    items: filteredItems,
    rawQuery,
    setRawQuery,
    filters,
    updateFilters,
  };
}
