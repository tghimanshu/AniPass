/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { AddPasswordModal } from "../Modals/Password.compmonent";
import { AddSecureNoteModal } from "../Modals/SecureNote.compmonent";
import "./sidebar.css";

export const Sidebar = () => {
  const [showSNModal, setShowSNModal] = React.useState(false);
  const [showPModal, setShowPModal] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("/signIn");
    }
  }, []);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "240px", height: "100%", overflow: "auto" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">AniPass</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="mb-4">
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-primary btn-block"
              as="a"
              id="create-btn"
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              <i className="bi bi-plus fw-bold me-2"></i>
              <strong>Create</strong>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item as="button" onClick={setShowPModal}>
                Password
              </Dropdown.Item>{" "}
              <Dropdown.Item as="button" onClick={setShowSNModal}>
                Secure Note
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <span className="mb-2">Main</span>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/passwords"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link text-white"
            }
          >
            Passwords
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/secureNotes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link text-white"
            }
          >
            Secure Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/password-generator"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link text-white"
            }
          >
            Password Generator
          </NavLink>
        </li>
        <hr />
        <span className="mb-2">Teams</span>
        <li>
          <NavLink
            to="/team/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link text-white"
            }
          >
            Team Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/passwords"
            className={({ isActive }) =>
              isActive ? "nav-link " : "nav-link text-white"
            }
          >
            Passwords
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/secureNotes"
            className={({ isActive }) =>
              isActive ? "nav-link " : "nav-link text-white"
            }
          >
            Secure Notes
          </NavLink>
        </li>
        <hr />
        <span className="mb-2">Organizations</span>
        <li>
          <NavLink
            to="/organization/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link text-white"
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/passwords"
            className={({ isActive }) =>
              isActive ? "nav-link " : "nav-link text-white"
            }
          >
            Passwords
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/secureNotes"
            className={({ isActive }) =>
              isActive ? "nav-link " : "nav-link text-white"
            }
          >
            Secure Notes
          </NavLink>
        </li>
      </ul>
      <hr />
      <AddSecureNoteModal
        show={showSNModal}
        onHide={() => setShowSNModal(false)}
      />
      <AddPasswordModal show={showPModal} onHide={() => setShowPModal(false)} />
    </div>
  );
};
