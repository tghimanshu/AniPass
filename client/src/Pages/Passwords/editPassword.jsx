import React, { useState } from "react";
import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";

export const EditPassword = () => {
  const [name, setName] = useState("");
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h5">Passwords</Card.Title>
        <form className="row">
          <div className="form-group has-success col-12 col-md-6">
            <label className="form-label mt-4" htmlFor="inputValid">
              Title
              {/* <i className="bi bi-info-circle-fill"></i> */}
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
                (name.length !== 0 &&
                  (name.length > 5 ? "is-valid" : "is-invalid"))
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group has-success col-12 col-md-6">
            <label className="form-label mt-4" htmlFor="inputValid">
              Title
              {/* <i className="bi bi-info-circle-fill"></i> */}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                  >
                    <i className="bi bi-info-circle-fill"></i>
                  </Button>
                )}
              </OverlayTrigger>
            </label>
            <input
              type="text"
              placeholder="Enter Title....."
              className={
                "form-control " +
                (name.length !== 0 &&
                  (name.length > 5 ? "is-valid" : "is-invalid"))
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};
