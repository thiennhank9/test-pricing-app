import TestRenderer from "react-test-renderer";
import Table from "./Table";

describe("Table", () => {
  test("render table", () => {
    const testRenderer = TestRenderer.create(
      <Table
        topHeaders={["1", "2", "3"]}
        leftHeaders={["1", "2", "3"]}
        data={[
          ["1", "2"],
          ["1", "2"],
          ["1", "2"],
        ]}
        renderCell={(cell, rowIndex, colIndex) => (
          <td key={`${rowIndex}-${colIndex}`}>{cell}</td>
        )}
        onMouseOutTableBody={jest.fn()}
      />
    );
    const testInstance = testRenderer.root;
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const headers = testInstance.findAllByType("th");
    const cells = testInstance.findAllByType("td");
    expect(headers.length).toBe(6);
    expect(cells.length).toBe(6);
  });
});
