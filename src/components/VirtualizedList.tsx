import { List } from "react-window";
import type { Item } from "../types/item";
import { Row } from "./Row";

interface Props {
  items: Item[];
}

export const VirtualizedList = ({ items }: Props) => {
  return (
    <List
      rowComponent={Row}
      rowCount={items.length}
      rowHeight={80}
      rowProps={{ items }}
      style={{ height: 500 }}
    />
  );
};
