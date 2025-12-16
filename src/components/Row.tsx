import type { RowComponentProps } from "react-window";
import type { Item } from "../types/item";

interface RowProps {
  items: Item[];
}

export function Row({ index, style, items }: RowComponentProps<RowProps>) {
  const item = items[index];
  

  return (
    <div style={style}>
      
      <div className="card">
        <div className="card-header">
          <span className="name">{item.name}</span>
          <span className="category">{item.category}</span>
        </div>

        <div className="card-footer">
          <span className="price">{item.price}</span>
        </div>
      </div>
    </div>
  );
}
