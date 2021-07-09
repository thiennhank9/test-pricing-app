/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { selectPrice, getPrices } from "../pricesSlice";
import Button from "components/Button";
import Table from "components/Table";
import { PriceData } from "../pricesTypes";
import {
  topHeaders,
  getDisplayPrices,
  getLeftHeaders,
  getCellClassName,
  CellInfo,
  defaultCellInfo,
  defaultPriceData,
} from "./TablePrices.utils";
import "./TablePrices.css";
import Spinner from "components/Spinner";
import { formatCurrency } from "utils";

function TablePrices() {
  const dispatch = useDispatch();
  const { prices, paperSize, error, loading } = useSelector(
    (state: RootState) => state.prices
  );
  const [selected, setSelected] = useState(defaultCellInfo);
  const [hover, setHover] = useState(defaultCellInfo);
  const [showAll, setShowAll] = useState(false);
  const disabledHoverAndSelect = useMemo(
    () => prices.length === 0,
    [prices.length]
  );
  const displayPrices = useMemo(
    () => getDisplayPrices(prices, showAll),
    [prices, showAll]
  );
  const leftHeaders = useMemo(
    () => getLeftHeaders(displayPrices),
    [displayPrices]
  );

  // Functions
  const clearHover = useCallback(() => setHover(defaultCellInfo), []);
  const clearSelected = useCallback(() => setSelected(defaultCellInfo), []);
  const unSelectCell = useCallback(() => {
    clearSelected();
    dispatch(selectPrice(defaultPriceData));
  }, []);
  const onClickCell = (cellInfo: CellInfo) => {
    const isSelected =
      cellInfo.rowIndex === selected.rowIndex &&
      cellInfo.colIndex === selected.colIndex;
    if (isSelected) {
      unSelectCell();
      return;
    }
    dispatch(selectPrice(cellInfo.cell));
    setSelected(cellInfo);
  };
  const renderCell = (cell: PriceData, rowIndex: number, colIndex: number) => {
    const cellInfo = { cell, rowIndex, colIndex };
    const cellKey = `${rowIndex}-${colIndex}`;
    const onClick = () => onClickCell(cellInfo);
    const onMouseOver = () => setHover(cellInfo);
    const cellClassName = disabledHoverAndSelect
      ? ""
      : getCellClassName(cellInfo, hover, selected);
    return (
      <td
        key={cellKey}
        onClick={onClick}
        onMouseOver={onMouseOver}
        className={cellClassName}
      >
        {formatCurrency(cell.price)}
      </td>
    );
  };

  // Effects
  useEffect(() => {
    clearHover();
    clearSelected();
    dispatch(getPrices(paperSize));
  }, [paperSize]);

  return (
    <div className="table-prices">
      <h3>Price table</h3>
      <p>Paper size: {paperSize}</p>
      <div className="table-container">
        <Table
          topHeaders={topHeaders}
          leftHeaders={leftHeaders}
          data={displayPrices}
          renderCell={renderCell}
          onMouseOutTableBody={clearHover}
        />
        {loading && (
          <div className="table-spinner">
            <Spinner />
          </div>
        )}
      </div>
      <div className="row-button-see-more">
        <Button onClick={() => setShowAll(!showAll)}>
          {showAll ? "See less" : "See more"}
        </Button>
      </div>
      <div className="error-text">{error}</div>
    </div>
  );
}

export default TablePrices;
