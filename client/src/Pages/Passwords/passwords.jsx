import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Datatable } from "../../Components/DataTable/DataTable.component";
import axios from "axios";

export const Passwords = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getPasswords = async () => {
      const { data } = await axios.get("http://localhost:5000/passwords");
      setData(data.body);
    };
    getPasswords();
  }, []);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Categories",
      selector: (row) => row.categories,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
    },
  ];

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h5">Passwords</Card.Title>
        {data && (
          <Datatable
            columns={columns}
            data={data.map((password) => ({
              title: (
                <div className="d-flex align-items-center text-decoration-none">
                  <img
                    // src={`https://thumbs.dreamstime.com/b/print-204672012.jpg`}
                    src={password.image_url}
                    alt="facebook"
                    width="40"
                    height="40"
                    className="rounded-circle me-2"
                  />
                  <div className="d-flex flex-column">
                    <strong>{password.title}</strong>
                    <small>
                      <a href={password.url}>{password.url}</a>
                    </small>
                  </div>
                </div>
              ),
              username: password.username,
              categories: password.categories.map((category, catIndex) => (
                <span
                  className={`badge bg-${category.color} rounded-pill`}
                  key={catIndex}
                >
                  {category.title}
                </span>
              )),
              actions: (
                <div>
                  <button className="btn btn-link">
                    <i className="bi bi-eye text-primary"></i>
                  </button>
                  <Link to="/editPassword" className="btn btn-link">
                    <i className="bi bi-pencil text-primary"></i>
                  </Link>
                  <button className="btn btn-link">
                    <i className="bi bi-trash text-danger"></i>
                  </button>
                </div>
              ),
            }))}
          />
        )}
      </Card.Body>
    </Card>
  );
};
