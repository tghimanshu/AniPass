import React from "react";
import DataTable from "react-data-table-component";

export const Datatable = ({ columns, data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows
      pagination
      selectableRowsHighlight
      striped
      responsive
    />
  );
};
