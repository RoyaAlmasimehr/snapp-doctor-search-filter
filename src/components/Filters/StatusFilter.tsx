type Status = "active" | "inactive";

interface Props {
  value?: Status;
  onChange: (value?: Status) => void;
}

export const StatusFilter=({ value, onChange }: Props) =>{
  return (
    <>
      <label>
        Status
      </label>

      <label>
        <input
          type="radio"
          checked={value === "active"}
          onChange={() => onChange("active")}
        />
        Active
      </label>

      <label>
        <input
          type="radio"
          checked={value === "inactive"}
          onChange={() => onChange("inactive")}
        />
        Inactive
      </label>
    </>
  );
}
