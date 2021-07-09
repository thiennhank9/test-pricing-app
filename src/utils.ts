export function isNil(value: any): boolean {
  return typeof value === "undefined" || value === null;
}

export function formatAmount(amount?: number | string): string {
  if (typeof amount === "undefined" || Number.isNaN(amount)) {
    return "";
  }
  let strAmount = amount.toString();
  // Check if has sign character
  const hasSign = strAmount.startsWith("+") || strAmount.startsWith("-");
  const sign = hasSign ? strAmount.charAt(0) : "";
  // Remove if has sign
  strAmount = hasSign ? strAmount.substring(1) : strAmount;
  const digits = strAmount.split(".");
  let arr3Digits = [];
  // Create array of every 3 digits
  for (let i = digits[0].length; i > 0; i = i - 3) {
    arr3Digits.push(digits[0].substring(i - 3, i));
  }
  digits[0] = arr3Digits.reverse().join(",");
  return sign + digits.join(".");
}

export function formatCurrency(amount?: number | string): string {
  if (typeof amount === "undefined" || Number.isNaN(amount)) {
    return "";
  }

  return `¥ ${formatAmount(amount)}`;
}
