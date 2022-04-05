import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Card, Col, Container, Row } from "react-bootstrap";
import { InviteUserModal } from "../../Components/Modals/InviteUser.Modal";

export const TeamProfile = () => {
  const [users, setUsers] = useState(null);
  const [showInviteUser, setShowInviteUser] = useState(false);
  const myTeam = [
    {
      username: "tghimanshu",
      accepted: true,
    },
    {
      username: "ratnesh2002",
      email: "himanshugohil234@gmail.com",
      accepted: false,
    },
    {
      username: "prajushirkar",
      email: "himanshugohil234@gmail.com",
      accepted: true,
    },
    {
      username: "shreyaskamat",
      email: "himanshugohil234@gmail.com",
      accepted: true,
    },
    {
      username: "haarishussain",
      email: "himanshugohil234@gmail.com",
      accepted: false,
    },
  ];

  useEffect(() => {
    const getUsers = async () => {
      const data = await axios.get("http://localhost:5000/users");
      setUsers(data.data.body);
    };
    getUsers();
  }, []);
  console.log(users);

  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "E Mail",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "E Mail",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.accepted,
      sortable: true,
    },
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Team Profile</Card.Title>
              <button
                className="btn btn-success"
                onClick={() => setShowInviteUser(true)}
              >
                Invite User
              </button>
            </Card.Header>
            <Card.Body>
              {users && (
                <DataTable
                  columns={columns}
                  data={myTeam.map((team) => ({
                    username: team.username,
                    email: team.email,
                    accepted: team.accepted ? (
                      <div className="badge bg-success p-2">Accepted</div>
                    ) : (
                      <div className="badge bg-warning p-2">Pending</div>
                    ),
                  }))}
                  pagination
                  striped
                  responsive
                />
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <img
                src="https://github.com/mdo.png"
                width={100}
                height={100}
                alt="team logo"
                className="d-block rounded-circle mx-auto mb-2"
              />
              <h4 className="text-center">TG Himanshu</h4>
              <p className="text-center">
                A Team for Development team of TG Himanshu.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <InviteUserModal
        show={showInviteUser}
        onHide={() => setShowInviteUser(false)}
      />
    </Container>
  );
};
