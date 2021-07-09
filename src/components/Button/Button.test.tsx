import TestRenderer from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {
  test("render button", () => {
    const testRenderer = TestRenderer.create(<Button />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
