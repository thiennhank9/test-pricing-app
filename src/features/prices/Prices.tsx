import React from "react";
import SelectPaperSize from "./SelectPaperSize";
import TablePrices from "./TablePrices";
import Cart from "./Cart";
import "./Prices.css";

function Prices() {
  return (
    <div className="row">
      <div className="section">
        <SelectPaperSize />
      </div>
      <div className="section">
        <TablePrices />
        <div className="bottom">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Prices;
