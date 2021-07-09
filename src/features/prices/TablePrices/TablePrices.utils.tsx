import { PriceData } from "../pricesTypes";
import { isNil } from "utils";

export interface CellInfo {
  cell: PriceData;
  rowIndex?: number;
  colIndex?: number;
}

export const topHeaders = [
  "Quantity",
  "Day 1",
  "Day 2",
  "Day 3",
  "Day 4",
  "Day 5",
];

export const defaultCellInfo: CellInfo = {
  cell: {},
  rowIndex: undefined,
  colIndex: undefined,
};

const defaultDisplayData = new Array(5).fill(new Array(5).fill({}));

export const getDisplayPrices = (
  prices: Array<any>,
  showAll: boolean
): Array<any> => {
  if (!prices.length) {
    return defaultDisplayData;
  }
  return showAll ? prices : prices.slice(0, 5);
};

export const getLeftHeaders = (prices: Array<Array<PriceData>>) =>
  prices.map((prices: Array<PriceData>) => prices[0].quantity);

export const defaultPriceData: PriceData = {
  price: undefined,
  businessDay: undefined,
  quantity: undefined,
};

export function getCellClassName(
  cellInfo: CellInfo,
  hover: CellInfo,
  selected: CellInfo
): string {
  if (isNil(hover.rowIndex) && isNil(selected.rowIndex)) {
    return "";
  }
  const isSelected =
    selected.colIndex === cellInfo.colIndex &&
    selected.rowIndex === cellInfo.rowIndex;
  if (isSelected) {
    return "high-light";
  }
  const isHover =
    hover.colIndex === cellInfo.colIndex &&
    hover.rowIndex === cellInfo.rowIndex;
  if (isHover) {
    return "high-light";
  }
  const isSameColumnOrRowWithHoverCell =
    hover.colIndex === cellInfo.colIndex ||
    hover.rowIndex === cellInfo.rowIndex;
  if (isSameColumnOrRowWithHoverCell) {
    return "weak";
  }
  return "";
}
