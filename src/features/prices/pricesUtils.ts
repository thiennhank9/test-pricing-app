import { PricesData, PricesFromResponse } from "./pricesTypes";

export const transformPricesFromResponse = (
  pricesResponse: PricesFromResponse
): PricesData => {
  const price = pricesResponse.map(
    (
      pricesRow: Array<{
        price?: number;
        business_day?: number;
        quantity?: number;
      }>
    ) =>
      pricesRow.map((priceData) => ({
        businessDay: priceData.business_day,
        price: priceData.price,
        quantity: priceData.quantity,
      }))
  );
  return price;
};
