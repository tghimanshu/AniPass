import React from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { MultiSelect } from "../Select/CategorySelect.Component";
import { useDispatch } from "react-redux";
import {
  addPasswordActions,
  passwordActions,
} from "../../Redux/Actions/actions";

export function AddPasswordModal(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.categories === undefined) {
      data.categories = [];
    } else {
      data.categories = data.categories.map((c) => c.value);
    }
    // const userId = localStorage.getItem("userId");
    // await axios.post(`http://localhost:5000/u/${userId}/passwords`, data);
    Promise.resolve(dispatch(addPasswordActions(data))).then(() => {
      props.onHide();
      dispatch(passwordActions());
      // navigate("/passwords");
    });
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add Password</Modal.Title>
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
            <Form.Group className="mb-3">
              <Form.Label>Categories</Form.Label>
              <MultiSelect name={"categories"} control={control} />
            </Form.Group>
            <hr />
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
