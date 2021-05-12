import React, { useEffect, useState } from "react";
import {
  Jumbotron,
  Form,
  Button,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addNewTicketAction } from "./addTicketAction";

import { refreshMsg } from "./addTicketSlice";

function AddTicketForm() {
  const initialFormData = {
    subject: "",
    issueDate: "",
    message: "",
  };

  // const initialFormError = {
  //   subject: false,
  //   issueDate: false,
  //   message: false,
  // };

  const [formData, setFormData] = useState(initialFormData);
  // const [formDataError, setFormDataError] = useState(initialFormError);

  const dispatch = useDispatch();

  const { isLoading, error, msgSuccess } = useSelector(
    (state) => state.addNewTicket
  );
  const {
    user: { name },
  } = useSelector((state) => state.user);

  useEffect(() => {
    return () => {
      msgSuccess && dispatch(refreshMsg());
    };
  }, [dispatch, formData]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(name, value);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch(addNewTicketAction({ ...formData, sender: name }));
    setFormData(initialFormData);
  };

  const styleForm = {
    maxWidth: "550px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: `0px 0px 15px -5px black`,
  };
  return (
    <Jumbotron className=" mt-3" style={styleForm}>
      <h1 className="text-center text-info ">ADD NEW TICKET </h1>
      <hr />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {msgSuccess && <Alert variant="primary">{msgSuccess}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>

      <Form onSubmit={handleOnsubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              minLength="3"
              maxLength="100"
              value={formData.subject}
              placeholder="Subject"
              required
              onChange={handleOnchange}
            ></Form.Control>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              required
              onChange={handleOnchange}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>message</Form.Label>
          <Form.Control
            rows="5"
            as="textarea"
            name="message"
            value={formData.message}
            required
            onChange={handleOnchange}
          ></Form.Control>
        </Form.Group>

        <Button block variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
}

export default AddTicketForm;
