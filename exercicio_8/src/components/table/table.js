import React from "react";
import "./table.css";

const Table = (props) => (
  <table>
    <tbody>{props.children}</tbody>
  </table>
);

export default Table;
