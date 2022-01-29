import React from "react";
import { Datatable } from "../../Components/DataTable/DataTable.component";
import axios from "axios";

export const SecureNotes = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getNotes = async () => {
      const { data } = await axios.get("http://localhost:5000/secureNotes");
      setData(data.body);
    };
    getNotes();
  }, []);

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

  return (
    <div>
      {data && (
        <Datatable
          columns={columns}
          data={data.map((note) => ({
            title: note.title,
            expires: note.expiresAt
              ? new Date(note.expiresAt).toDateString() +
                " - " +
                new Date(note.expiresAt).toLocaleTimeString()
              : "Never Expires",
            actions: (
              <button className="btn btn-link">
                <i className="bi bi-eye text-primary"></i>
              </button>
            ),
          }))}
        />
      )}
    </div>
  );
};
