import { AxiosResponse } from "axios";
import api from 'api';
import { PricesFromResponse } from "./pricesTypes";

export function fetchPrices(
  paperSize: string
): Promise<AxiosResponse<{ paper_size?: string; prices: PricesFromResponse }>> {
  return api.get("/prices", { params: { paper_size: paperSize } });
}
