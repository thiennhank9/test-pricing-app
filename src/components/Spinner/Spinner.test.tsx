import TestRenderer from "react-test-renderer";
import Spinner from "./Spinner";

describe("Spinner", () => {
  test("render spinner", () => {
    const testRenderer = TestRenderer.create(<Spinner />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
