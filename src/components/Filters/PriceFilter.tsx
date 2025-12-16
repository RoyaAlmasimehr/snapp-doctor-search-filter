interface Props {
  min?: number;
  max?: number;
  onChange: (min?: number, max?: number) => void;
}

export const PriceFilter=({ min, max, onChange }: Props)=>{
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value ? Number(value) : undefined, max);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(min, value ? Number(value) : undefined);
  };

  return (
    <div>
      <label>Price Range</label>

      <div style={{ display: "flex", gap: 8, paddingTop:"8px"}}>
        <input
          type="number"
          placeholder="Min"
          value={min ?? ""}
          onChange={handleMinChange}
          style={{ width: 80 }}
        />
        <input
          type="number"
          placeholder="Max"
          value={max ?? ""}
          onChange={handleMaxChange}
          style={{ width: 80 }}
        />
      </div>
    </div>
  );
}
