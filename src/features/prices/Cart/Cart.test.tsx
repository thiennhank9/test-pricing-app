import React from 'react';
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import { mockStore } from "__mocks__";
import Cart from "./Cart";

describe("Cart", () => {
  test("render cart", () => {
    const store = mockStore({
      prices: {
        price: 1000,
      },
    });
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const text = testInstance.findByType("span");
    expect(text.props.children).toEqual("¥ 1,000");
  });
});
