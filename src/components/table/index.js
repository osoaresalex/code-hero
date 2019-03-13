import React from 'react';
import "./table.css";
import HeroCard from "../hero-card";

function Table({columns, registers, onRowClick}) {

  function renderRow(register, columns, registerIndex) {
    return columns
      .map((column, index) => {
        return (
          <td key={index + registerIndex} className="color-black roboto-regular">
            {column.renderFunction ? column.renderFunction(register) : register[column.field]}
          </td>
        );
      });
  }

  return (
    <table className="table">
      <thead>
      <tr>
        {
          columns.map((column, index) => <th key={Math.floor(Math.random() * 10000) + 1}
                                             className="background-red color-white roboto-regular">{column.label}</th>)
        }
      </tr>
      </thead>
      <tbody>
      {
        registers.map((register, index) => <tr key={Math.floor(Math.random() * 10000) + 1}
                                               onClick={() => onRowClick(register)}>{renderRow(register, columns, index)}</tr>)
      }
      </tbody>
    </table>
  );
}

export default Table;
