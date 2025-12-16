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

      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="number"
          placeholder="Min"
          value={min ?? ""}
          onChange={handleMinChange}
        />
        <input
          type="number"
          placeholder="Max"
          value={max ?? ""}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
}
