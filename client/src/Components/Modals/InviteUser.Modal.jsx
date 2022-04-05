import React, { useEffect, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Select from "react-select";
import http from "../../Utils/http";

export function InviteUserModal(props) {
  const [users, setUsers] = useState(null);
  const [userValue, setUserValue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await http.get("/users");
      setUsers(data.data.body);
    };
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userValue.value);
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Invite User</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <form className="row">
            <div className="form-group has-success">
              <label className="form-label mt-4" htmlFor="inputValid">
                Select User
              </label>
              {users && (
                <Select
                  options={users.map((user) => ({
                    value: user._id,
                    label: user.username,
                  }))}
                  onChange={(value) => setUserValue(value)}
                />
              )}
            </div>
            <button className="btn btn-success mt-4" onClick={handleSubmit}>
              Invite
            </button>
          </form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
