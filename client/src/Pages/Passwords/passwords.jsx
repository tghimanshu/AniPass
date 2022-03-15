import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Datatable } from "../../Components/DataTable/DataTable.component";
import { useDispatch } from "react-redux";
import {
  passwordActions,
  deletePasswordActions,
} from "../../Redux/Actions/actions";
import { useSelector } from "react-redux";
import { AddPasswordModal } from "../../Components/Modals/Password.compmonent";

export const Passwords = () => {
  const [showPModal, setShowPModal] = useState(false);
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
    <Card className="container">
      <Card.Body>
        <Card.Title
          as="h5"
          className="d-flex justify-content-between align-items-center"
        >
          <div>Passwords</div>
          <button className="btn btn-success" onClick={setShowPModal}>
            Add New
          </button>
        </Card.Title>
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
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      dispatch(deletePasswordActions(password._id));
                      dispatch(passwordActions());
                    }}
                  >
                    <i className="bi bi-trash text-danger"></i>
                  </button>
                  <AddPasswordModal
                    show={showPModal}
                    onHide={() => setShowPModal(false)}
                  />
                </div>
              ),
            }))}
          />
        )}
      </Card.Body>
    </Card>
  );
};
