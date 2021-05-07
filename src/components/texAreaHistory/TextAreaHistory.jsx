import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { replyOnTicket } from "../../pages/ticketList.page/ticketAction";

function TextAreaHistory() {
  const { user } = useSelector((state) => state.user);
  const { selectedTicket } = useSelector((state) => state.tickets);
  const { msgStatusReply } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  const [repMessage, setRepMessage] = useState("");
  const handleOnChange = (e) => {
    setRepMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      message: repMessage,
      sender: user.name,
    };
    dispatch(replyOnTicket(selectedTicket._id, msgObj));

    setRepMessage("");
  };

  return (
    <div>
      {msgStatusReply && <Alert variant="success">{msgStatusReply}</Alert>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Text>Please type your reply here **</Form.Text>
        <Form.Control
          onChange={handleOnChange}
          value={repMessage}
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
    </div>
  );
}

export default TextAreaHistory;
