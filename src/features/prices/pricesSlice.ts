import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { PriceData, PricesData } from "./pricesTypes";
import { fetchPrices } from "./pricesAPI";
import { transformPricesFromResponse } from "./pricesUtils";

interface PricesState {
  paperSize: string;
  prices: PricesData;
  quantity?: number;
  businessDay?: number;
  price?: number;
  error?: string;
  loading: boolean;
}

export const initialState: PricesState = {
  paperSize: "A4",
  prices: [],
  quantity: undefined,
  businessDay: undefined,
  price: undefined,
  error: undefined,
  loading: false,
};

export const pricesSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {
    selectPaperSize: (state, action: PayloadAction<string>) => {
      const paperSize = action.payload;
      state.paperSize = paperSize;
      state.quantity = undefined;
      state.businessDay = undefined;
      state.price = undefined;
    },
    setPrices: (state, action: PayloadAction<Array<any>>) => {
      const prices = action.payload;
      state.prices = prices;
      state.error = undefined;
    },
    selectPrice: (state, action: PayloadAction<PriceData>) => {
      const { quantity, businessDay, price } = action.payload;
      state.quantity = quantity;
      state.businessDay = businessDay;
      state.price = price;
    },
    setError: (state, action: PayloadAction<string>) => {
      const error = action.payload;
      state.prices = [];
      state.error = error;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      const loading = action.payload;
      state.loading = loading;
    },
  },
});

export const { selectPaperSize, setPrices, selectPrice, setError, setLoading } =
  pricesSlice.actions;

// Async actions
export const getPrices =
  (paperSize: string): any =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchPrices(paperSize);
      const prices = transformPricesFromResponse(response.data.prices);
      dispatch(setPrices(prices));
    } catch (_error) {
      dispatch(setError("Sorry, we can't get data. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  };

export default pricesSlice.reducer;
