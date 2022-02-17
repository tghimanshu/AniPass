import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Datatable } from "../../Components/DataTable/DataTable.component";
import { useDispatch } from "react-redux";
import { passwordActions } from "../../Redux/Actions/actions";
import { useSelector } from "react-redux";

export const Passwords = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(passwordActions());
  }, [dispatch]);

  const data = useSelector((state) => state.passwords.passwords);

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
