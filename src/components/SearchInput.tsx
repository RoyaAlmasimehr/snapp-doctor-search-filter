interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name"
    />
  );
}
