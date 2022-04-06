import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="mainContent">
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-between">
          {/* <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form> */}

          <div className="text-end"></div>
          <Dropdown>
            <Dropdown.Toggle
              className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
              as="a"
              style={{ cursor: "pointer", userSelect: "none" }}
              id="sidebar-profile"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>TG Himanshu</strong>
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>{" "}
              <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                as="button"
                onClick={() => {
                  localStorage.removeItem("user");
                  localStorage.removeItem("userId");
                  navigate("/signIn");
                }}
              >
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
