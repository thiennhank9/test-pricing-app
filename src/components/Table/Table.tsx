import React from "react";
import "./Table.css";

interface TableProps {
  topHeaders: Array<any>;
  leftHeaders: Array<any>;
  data: Array<Array<any>>;
  renderCell(cell: any, rowIndex: number, colIndex: number): JSX.Element;
  onMouseOutTableBody(event: React.MouseEvent): void;
}

function Table(props: TableProps) {
  const {
    topHeaders,
    data,
    renderCell,
    onMouseOutTableBody,
    leftHeaders,
  } = props;

  return (
    <table>
      <thead>
        <tr>
          {topHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody onMouseOut={onMouseOutTableBody}>
        {data.map((row: Array<any>, rowIndex: number) => (
          <tr key={rowIndex}>
            <th>{leftHeaders[rowIndex]}</th>
            {row.map((cell: any, colIndex: number) =>
              renderCell(cell, rowIndex, colIndex)
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
