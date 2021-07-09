export interface PriceData {
  price?: number;
  businessDay?: number;
  quantity?: number;
}

export type PricesFromResponse = Array<
  Array<{ price?: number; business_day?: number; quantity?: number }>
>;

export type PricesData = Array<
  Array<{ price?: number; businessDay?: number; quantity?: number }>
>;
