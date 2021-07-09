import {
  getDisplayPrices,
  getLeftHeaders,
  getCellClassName,
  defaultCellInfo,
} from "./TablePrices.utils";

describe("get display prices", () => {
  test("display all prices", () => {
    let prices = new Array(10);
    expect(getDisplayPrices(prices, true).length).toBe(10);
  });
  test("display maximum 5 prices", () => {
    let prices = new Array(4);
    expect(getDisplayPrices(prices, false).length).toBe(4);
    prices = new Array(10);
    expect(getDisplayPrices(prices, false).length).toBe(5);
  });
});
test("get left headers from display prices", () => {
  let prices = [[{ quantity: 1 }], [{ quantity: 2 }], [{ quantity: 3 }]];
  expect(getLeftHeaders(prices)).toEqual([1, 2, 3]);
});
describe("get cell class name", () => {
  test("cell class name is empty", () => {
    const hover = defaultCellInfo;
    const selected = defaultCellInfo;
    const cellInfo = defaultCellInfo;
    expect(getCellClassName(hover, selected, cellInfo)).toBe("");
  });
  test("cell class name is selected", () => {
    const hover = defaultCellInfo;
    const selected = { cell: {}, colIndex: 1, rowIndex: 1 };
    const cellInfo = { cell: {}, colIndex: 1, rowIndex: 1 };
    expect(getCellClassName(cellInfo, hover, selected)).toBe("high-light");
  });
  test("cell class name is hover", () => {
    const hover = { cell: {}, colIndex: 1, rowIndex: 1 };
    const selected = defaultCellInfo;
    const cellInfo = { cell: {}, colIndex: 1, rowIndex: 1 };
    expect(getCellClassName(cellInfo, hover, selected)).toBe("high-light");
  });
  test("cell class name is weak", () => {
    const hover = { cell: {}, colIndex: 1, rowIndex: 1 };
    const selected = defaultCellInfo;
    const cellInfo = { cell: {}, colIndex: 1, rowIndex: 2 };
    expect(getCellClassName(cellInfo, hover, selected)).toBe("weak");
  });
});
