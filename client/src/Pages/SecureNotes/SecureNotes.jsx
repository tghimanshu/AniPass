import React from "react";
import { Datatable } from "../../Components/DataTable/DataTable.component";
export const SecureNotes = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Expires At",
      selector: (row) => row.expires,
      sortable: true,
    },
    { name: "", selector: (row) => row.actions },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      expires: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      expires: "1984",
    },
  ];

  return (
    <div>
      <Datatable
        columns={columns}
        data={data.map((note) => ({
          title: note.title,
          expires: note.expires,
          actions: (
            <button className="btn btn-link">
              <i className="bi bi-eye text-primary"></i>
            </button>
          ),
        }))}
      />
    </div>
  );
};
