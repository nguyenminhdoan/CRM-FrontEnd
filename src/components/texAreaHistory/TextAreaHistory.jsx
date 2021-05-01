import React from "react";
import { Form, Button } from "react-bootstrap";

function TextAreaHistory(props) {
  const { handleOnChange, handleOnSubmit } = props;
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please type your reply here **</Form.Text>
      <Form.Control
        onChange={handleOnChange}
        as="textarea"
        row="5"
        name="detail"
      ></Form.Control>
      <div className="text-right mt-4 mb-4">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
}

export default TextAreaHistory;
