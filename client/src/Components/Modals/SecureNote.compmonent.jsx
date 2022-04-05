import React from "react";
import {
  Container,
  Form,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export function AddSecureNoteModal(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [canExpire, setCanExpire] = React.useState(false);
  const [canLimitedViews, setCanLimitedViews] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    if (data.expiresAt && data.expiresAt === "") {
      delete data.expiresAt;
    }
    const userId = localStorage.getItem("user");
    await axios.post(`http://localhost:5000/u/${userId}/secureNotes`, data);
    props.onHide();
    navigate("/secureNotes");
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add Secure Note</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group has-success">
              <label className="form-label mt-4" htmlFor="inputValid">
                Title
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      Tooltip on <strong>top</strong>.
                    </Tooltip>
                  }
                >
                  <i className="bi bi-info-circle-fill ms-2"></i>
                </OverlayTrigger>
              </label>
              <input
                type="text"
                placeholder="Enter Title....."
                className={
                  "form-control " +
                  (watch("title") === ""
                    ? ""
                    : errors.title
                    ? "is-invalid"
                    : "is-valid")
                }
                {...register("title", {
                  required: true,
                  minLength: 5,
                })}
              />
            </div>
            <div className="form-group has-success">
              <Form.Check
                type="switch"
                onChange={() => setCanExpire(!canExpire)}
                className="mt-4"
                label={
                  <label className="form-label" htmlFor="inputValid">
                    Expires At
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Tooltip on <strong>top</strong>.
                        </Tooltip>
                      }
                    >
                      <i className="bi bi-info-circle-fill ms-2"></i>
                    </OverlayTrigger>
                  </label>
                }
              />
              {canExpire && (
                <input
                  type="datetime-local"
                  placeholder="Enter Title....."
                  className={
                    "form-control " +
                    (watch("title") === ""
                      ? ""
                      : errors.title
                      ? "is-invalid"
                      : "is-valid")
                  }
                  {...register("expiresAt", {
                    required: { value: true, message: "Title Is Required" },
                  })}
                />
              )}
            </div>
            <div className="form-group has-success">
              <Form.Check
                type="switch"
                onChange={() => setCanLimitedViews(!canLimitedViews)}
                className="mt-4"
                label={
                  <label className="form-label" htmlFor="inputValid">
                    Has Limited Views
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Tooltip on <strong>top</strong>.
                        </Tooltip>
                      }
                    >
                      <i className="bi bi-info-circle-fill ms-2"></i>
                    </OverlayTrigger>
                  </label>
                }
              />
              {canLimitedViews && (
                <input
                  type="number"
                  placeholder="Number Of Views..."
                  className={
                    "form-control " +
                    (watch("totalViews") === ""
                      ? ""
                      : errors.title
                      ? "is-invalid"
                      : "is-valid")
                  }
                  {...register("totalViews", {
                    required: { value: true },
                  })}
                />
              )}
            </div>
            <div className="form-group has-success">
              <label className="form-label mt-4" htmlFor="inputValid">
                Password
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      Tooltip on <strong>top</strong>.
                    </Tooltip>
                  }
                >
                  <i className="bi bi-info-circle-fill ms-2"></i>
                </OverlayTrigger>
              </label>
              <input
                type="text"
                placeholder="Enter Note....."
                className={
                  "form-control " +
                  (watch("password") === ""
                    ? ""
                    : errors.title
                    ? "is-invalid"
                    : "is-valid")
                }
                {...register("password", {
                  required: { value: true, message: "Password Is Required" },
                })}
              />
            </div>
            <div className="form-group has-success">
              <label className="form-label mt-4" htmlFor="inputValid">
                Note
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      Tooltip on <strong>top</strong>.
                    </Tooltip>
                  }
                >
                  <i className="bi bi-info-circle-fill ms-2"></i>
                </OverlayTrigger>
              </label>
              <input
                type="text"
                placeholder="Enter Note....."
                className={
                  "form-control " +
                  (watch("note") === ""
                    ? ""
                    : errors.title
                    ? "is-invalid"
                    : "is-valid")
                }
                {...register("note", {
                  required: { value: true, message: "Title Is Required" },
                  minLength: {
                    value: 5,
                    message: "Title should be of length 5 ",
                  },
                })}
              />
            </div>
            <button className="btn btn-success mt-4" type="submit">
              Submit
            </button>
          </form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
