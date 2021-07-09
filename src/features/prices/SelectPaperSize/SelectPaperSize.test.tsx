import Select from "components/Select";
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import SelectPaperSize from "./SelectPaperSize";
import { store } from "app/store";

describe("SelectPaperSize", () => {
  test("render select paper size", () => {
    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <SelectPaperSize />
      </Provider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance = testRenderer.root;
    const select = testInstance.findByType(Select);
    expect(select.props.options).toEqual(["A4", "A5", "B4", "B5"]);
  });
});
