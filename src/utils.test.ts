import { isNil, formatAmount, formatCurrency } from "./utils";

describe("test is nil", () => {
  test("is nil", () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });
  test("is not nil", () => {
    expect(isNil(new Date())).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil(1)).toBe(false);
    expect(isNil("test")).toBe(false);
  });
});
describe("test format currency", () => {
  test("invalid input", () => {
    expect(formatCurrency()).toBe("");
    expect(formatCurrency(undefined)).toBe("");
  });
  test("valid number", () => {
    expect(formatCurrency(1)).toBe("¥ 1");
    expect(formatCurrency(100)).toBe("¥ 100");
    expect(formatCurrency(1000)).toBe("¥ 1,000");
  });
  test("valid string convertible number", () => {
    expect(formatCurrency("1")).toBe("¥ 1");
    expect(formatCurrency("100")).toBe("¥ 100");
    expect(formatCurrency("1000")).toBe("¥ 1,000");
  });
});
describe("test format amount", () => {
  test("invalid input", () => {
    expect(formatAmount()).toBe("");
    expect(formatAmount(undefined)).toBe("");
  });

  test("input valid number", () => {
    // Less than 3 digits
    expect(formatAmount(1)).toBe("1");
    expect(formatAmount(100)).toBe("100");
    // Equal, more than 3 digits
    expect(formatAmount(1000)).toBe("1,000");
    expect(formatAmount(10000)).toBe("10,000");
    expect(formatAmount(100000)).toBe("100,000");
    expect(formatAmount(23456789)).toBe("23,456,789");
    // Have dot
    expect(formatAmount(1000.0001)).toBe("1,000.0001");
    // Negative
    expect(formatAmount(-1234)).toBe("-1,234");
    expect(formatAmount(-12345)).toBe("-12,345");
    expect(formatAmount(-1234.0001)).toBe("-1,234.0001");
  });

  test("input string convertible to number", () => {
    // Less than 3 digits
    expect(formatAmount("1")).toBe("1");
    expect(formatAmount("100")).toBe("100");
    // Equal, more than 3 digits
    expect(formatAmount("1000")).toBe("1,000");
    expect(formatAmount("10000")).toBe("10,000");
    expect(formatAmount("100000")).toBe("100,000");
    expect(formatAmount("23456789")).toBe("23,456,789");
    // Have dots
    expect(formatAmount("1000.0001")).toBe("1,000.0001");
    // Long string
    expect(formatAmount("123456789123456789")).toBe("123,456,789,123,456,789");
    // Negative
    expect(formatAmount("-1234")).toBe("-1,234");
    expect(formatAmount("-12345")).toBe("-12,345");
    expect(formatAmount("-1234.0001")).toBe("-1,234.0001");
  });
});
