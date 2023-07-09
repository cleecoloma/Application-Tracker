import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EditIcon from "@mui/icons-material/Edit";

function EditModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [job, setJob] = useState({
    id: props.changeId,
    title: props.changeTitle,
    company: props.changeCompany,
    location: props.changeLocation,
    link: props.changeLink,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setJob((prevJob) => {
      return {
        ...prevJob,
        [name]: value,
      };
    });
  }

  function submitJob(event) {
    props.onEdit(job);
    handleClose();
    event.preventDefault();
  }

  return (
    <>
      <EditIcon color="primary" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Title"
                value={job.title}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={handleChange}
                name="company"
                type="text"
                placeholder="Company"
                value={job.company}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={handleChange}
                name="location"
                type="text"
                placeholder="Location"
                value={job.location}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={handleChange}
                name="link"
                type="url"
                placeholder="Link"
                value={job.link}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={submitJob}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
