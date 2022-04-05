import React, { useEffect, useState } from "react";
import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Datatable } from "../../Components/DataTable/DataTable.component";
import { AddSecureNoteModal } from "../../Components/Modals/SecureNote.compmonent";
import {
  deleteSecureNoteAction,
  secureNoteAction,
} from "../../Redux/Actions/actions";

export const SecureNotes = () => {
  const [showPModal, setShowPModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(secureNoteAction());
  }, [dispatch]);

  const data = useSelector((state) => state.secureNotes.secureNotes);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Expires At",
      selector: (row) => row.expires,
      sortable: true,
    },
    {
      name: "Views Left",
      selector: (row) => row.views,
      sortable: true,
    },
    { name: "", selector: (row) => row.actions },
  ];

  return (
    <Card className="container">
      <Card.Body>
        <Card.Title
          as="h5"
          className="d-flex justify-content-between align-items-center"
        >
          <div>Secure Notes</div>
          <button className="btn btn-success" onClick={setShowPModal}>
            Add New
          </button>
        </Card.Title>
        {data && (
          <Datatable
            columns={columns}
            data={data.map((note) => ({
              title: note.title,
              expires: note.expiresAt
                ? new Date(note.expiresAt).toDateString() +
                  " - " +
                  new Date(note.expiresAt).toLocaleTimeString()
                : "Never Expires",
              views: (
                <span>
                  {note.totalViews === -1 ? (
                    <span>Unlimited</span>
                  ) : (
                    `${note.views}/${note.totalViews}`
                  )}
                </span>
              ),
              actions: (
                <div>
                  <button className="btn btn-link">
                    <i className="bi bi-eye text-primary"></i>
                  </button>
                  <CopyToClipboard
                    text={window.location.host + "/secureNote/" + note._id}
                  >
                    <Button variant="light">
                      <IoCopyOutline fontWeight={"bold"} fontSize={"1.2rem"} />
                    </Button>
                  </CopyToClipboard>
                  <Link to="/editPassword" className="btn btn-link">
                    <i className="bi bi-pencil text-primary"></i>
                  </Link>
                  <button
                    className="btn btn-link"
                    onClick={() => {
                      Promise.resolve(
                        dispatch(deleteSecureNoteAction(note._id))
                      ).then(() => {
                        dispatch(secureNoteAction());
                      });
                    }}
                  >
                    <i className="bi bi-trash text-danger"></i>
                  </button>
                  <AddSecureNoteModal
                    show={showPModal}
                    onHide={() => setShowPModal(false)}
                  />
                </div>
              ),
            }))}
          />
        )}
      </Card.Body>
    </Card>
  );
};
