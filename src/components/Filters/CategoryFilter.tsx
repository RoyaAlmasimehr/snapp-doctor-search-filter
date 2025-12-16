import { categories } from "../../constants/categories";

interface Props {
  value?: string;
  onChange: (value?: string) => void;
}

export const CategoryFilter=({ value, onChange }: Props) =>{
  return (
    <>
      <label>Category</label>
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || undefined)}
        style={{ width: 180 }}
      >
        <option value="">All</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </>
  );
}
