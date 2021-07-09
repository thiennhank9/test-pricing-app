import Spinner from "components/Spinner";
import React from "react";
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import { mockStore } from "__mocks__";
import TablePrices from "./TablePrices";

describe("TablePrices", () => {
  test("render table prices with correct paper size", () => {
    const store = mockStore({
      prices: {
        paperSize: "A4",
        prices: [],
      },
    });
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <TablePrices />
      </Provider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const text = testInstance.findByType("p");
    expect(text.props.children.includes("A4")).toBe(true);
  });
  test("table prices has loading", () => {
    const store = mockStore({
      prices: {
        paperSize: "A4",
        prices: [],
        loading: true
      },
    });
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <TablePrices />
      </Provider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const spinner = testInstance.findByType(Spinner);
    expect(spinner).toBeDefined();
  });
  test("table prices has error", () => {
    const store = mockStore({
      prices: {
        paperSize: "A4",
        prices: [],
        error: "error"
      },
    });
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <TablePrices />
      </Provider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const errorText = testInstance.findByProps({className: "error-text"});
    expect(errorText.props.children).toBe("error");
  });
});
