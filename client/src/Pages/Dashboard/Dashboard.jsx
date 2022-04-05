import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import http from "../../Utils/http";

export const Dashboard = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const data = await http.get("/users");
      setUsers(data.data.body);
    };
    getUsers();
  }, []);
  console.log(users);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "E Mail",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
  ];

  return (
    <div>
      {users && (
        <DataTable
          columns={columns}
          data={users}
          selectableRows
          pagination
          selectableRowsHighlight
          striped
          responsive
        />
      )}
    </div>
  );
};
