export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  status: "active" | "inactive";
}
