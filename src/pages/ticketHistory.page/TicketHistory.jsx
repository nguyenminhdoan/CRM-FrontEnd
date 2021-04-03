import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadscrumbPage from "../../components/BreadscrumbPage";
import data from "../../assets/data/data.json";
import MessageHistory from "../../components/MessageHistory";
import TextAreaHistory from "../../components/TextAreaHistory";

function TicketHistory() {
  // fake data until get data from API
  const ticket = data[0];

  const [repMessage, setRepMessage] = useState("");

  useEffect(() => {}, [repMessage]);

  const handleOnChange = (e) => {
    setRepMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadscrumbPage page={"ticket history"} />
        </Col>
      </Row>

      <Row>
        <Col className="font-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket Open: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>

        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <MessageHistory ticketHistory={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <TextAreaHistory
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketHistory;
