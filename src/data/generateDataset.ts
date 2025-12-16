import { categories } from "../constants/categories";
import type { Item } from "../types/item";
export function generateDataset(count = 5000): Item[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    category: categories[i % categories.length],
    price: Math.floor(Math.random() * 1000),
    status: Math.random() > 0.5 ? "active" : "inactive",
  }));
}
