import React from "react";
import "./table-row.css";

const TableRow = (props) => (
  <tr>
    <td>{props.col1}</td>
    <td>
      {props.col2.map(function (item, index) {
        return (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        );
      })}
    </td>
  </tr>
);

export default TableRow;
