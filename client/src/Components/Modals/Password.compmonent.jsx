import React from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

export function AddPasswordModal(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:5000/passwords", data);
    props.onHide();
    // navigate("/passwords");
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add Secure Note</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter title"
                {...register("title", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Url"
                {...register("url", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                {...register("username", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
            </Form.Group>
            <button className="btn btn-success mt-4" type="submit">
              Submit
            </button>
          </form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
