import TestRenderer from "react-test-renderer";
import Select from "./Select";

describe("Select", () => {
  test("render select", () => {
    const testRenderer = TestRenderer.create(<Select value="1" options={["1", "2", "3"]} onChange={jest.fn()}/>);
    const testInstance = testRenderer.root;
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const options = testInstance.findAllByType('option');
    expect(options.length).toBe(3);
  });
});
