import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import "./ShowSecureNote.css";

export const ShowSecureNote = () => {
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
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Note Data</Form.Label>
                <div className="hideTextArea">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    defaultValue="This is the note and this data will be later replaced with actual data when ready"
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
