import React from "react";
import "./Select.css";

interface SelectProps {
  value: string;
  options: Array<string>;
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

function Select(props: SelectProps) {
  const { value, options, onChange } = props;

  return (
    <select onChange={onChange} value={value} className="select">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
