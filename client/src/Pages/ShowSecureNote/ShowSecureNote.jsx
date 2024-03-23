import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./ShowSecureNote.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSecureNoteAction } from "../../Redux/Actions/actions";
import { useParams } from "react-router";
import axios from "axios";
import http from "../../Utils/http";

export const ShowSecureNote = () => {
  const [showNote, setShowNote] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleSecureNoteAction(id));
  }, [dispatch]);

  const note = useSelector((state) => state.secureNote.secureNote);
  const displayNote = async () => {
    const { data } = await http.post(
      "/u/" +
        localStorage.getItem("userId") +
        "/secureNotes/" +
        id +
        "/password",
      {
        password: password,
      }
    );
    console.log(data.success);
    if (data.success) {
      setShowNote(true);
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };
  return (
    <Container className="h-100">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title className="text-center">Secure Note</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Note Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password Here..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn-success mt-4 w-100"
                  onClick={displayNote}
                >
                  Unlock
                </button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                {showError && (
                  <Alert variant="danger">
                    Invalid Password, Please try again!
                  </Alert>
                )}
                <Form.Label>Note Title</Form.Label>
                <Form.Control value={note ? note.title : "Title"} disabled />
                <Form.Label>Note Data</Form.Label>
                <div className={showNote ? "" : "hideTextArea"}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={
                      showNote
                        ? note?.note
                        : "This is the note and this data will be later replaced with actual data when ready"
                    }
                    readOnly
                  />
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
