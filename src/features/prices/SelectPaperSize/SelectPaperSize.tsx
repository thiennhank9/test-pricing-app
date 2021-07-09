import React, { useState } from "react";
import Select from "components/Select";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { initialState, selectPaperSize } from "../pricesSlice";
import "./SelectPaperSize.css";

const paperSizes = ["A4", "A5", "B4", "B5"];

function SelectPaperSize() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialState.paperSize);
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value);
  const onClick = () => dispatch(selectPaperSize(value));

  return (
    <div className="select-paper-size">
      <h3>Select paper size</h3>
      <div>
        <Select value={value} options={paperSizes} onChange={onChange} />
      </div>
      <div className="row-button-apply">
        <Button onClick={onClick}>Apply</Button>
      </div>
    </div>
  );
}

export default SelectPaperSize;
