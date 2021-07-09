import pricesReducer, {
  initialState,
  selectPaperSize,
  setPrices,
  selectPrice,
  setError,
  setLoading,
  getPrices,
} from "./pricesSlice";
import { mockApi, mockStore } from "__mocks__";

describe("prices slice", () => {
  test("should handle when fetching prices successfully", async () => {
    mockApi.onGet("/prices").reply(200, {
      prices: [[{ price: 1, quantity: 1, business_day: 1 }]],
    });
    const store = mockStore();
    await store.dispatch(getPrices("A5"));
    expect(store.getActions()).toEqual([
      setLoading(true),
      setPrices([[{ price: 1, quantity: 1, businessDay: 1 }]]),
      setLoading(false),
    ]);
  });
  test("should handle when fetching prices fail", async () => {
    mockApi.onGet("/prices").networkError();
    const store = mockStore();
    await store.dispatch(getPrices("A5"));
    expect(store.getActions()).toEqual([
      setLoading(true),
      setError("Sorry, we can't get data. Please try again."),
      setLoading(false),
    ]);
  });
  test("should handle when selecting a paper size", () => {
    const previousState = {
      paperSize: "A4",
      prices: [],
      quantity: 1,
      businessDay: 1,
      price: 1,
      error: undefined,
      loading: false,
    };
    expect(pricesReducer(previousState, selectPaperSize("A5"))).toEqual({
      ...previousState,
      paperSize: "A5",
      quantity: undefined,
      businessDay: undefined,
      price: undefined,
    });
  });
  test("should handle when set prices", () => {
    expect(
      pricesReducer(
        initialState,
        setPrices([[{ price: 1, businessDay: 1, quantity: 1 }]])
      )
    ).toEqual({
      ...initialState,
      prices: [[{ price: 1, businessDay: 1, quantity: 1 }]],
      error: undefined,
    });
  });
  test("should handle when select price data", () => {
    expect(
      pricesReducer(
        initialState,
        selectPrice({ price: 1, businessDay: 1, quantity: 1 })
      )
    ).toEqual({
      ...initialState,
      price: 1,
      businessDay: 1,
      quantity: 1,
    });
  });
  test("should set error", () => {
    expect(pricesReducer(initialState, setError("Error"))).toEqual({
      ...initialState,
      error: "Error",
    });
  });
  test("should set loading", () => {
    expect(pricesReducer(initialState, setLoading(true))).toEqual({
      ...initialState,
      loading: true,
    });
    expect(pricesReducer(initialState, setLoading(false))).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
