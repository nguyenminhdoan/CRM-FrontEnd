import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";

function AddTicketForm(props) {
  const { handleOnchange, handleOnsubmit, formData } = props;
  console.log(formData);

  const styleForm = {
    maxWidth: "550px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: `0px 0px 15px -5px black`,
  };
  return (
    <Jumbotron className=" mt-3" style={styleForm}>
      <h1 className="text-center text-info ">ADD NEW FORM </h1>
      <hr />
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
              value={formData.isseDate}
              required
              onChange={handleOnchange}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            rows="5"
            as="textarea"
            name="detail"
            value={formData.details}
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
