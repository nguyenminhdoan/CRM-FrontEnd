import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadscrumbPage from "../../components/breadScrum/BreadscrumbPage";
import data from "../../assets/data/data.json";
import MessageHistory from "../../components/messageHistory/MessageHistory";
import TextAreaHistory from "../../components/texAreaHistory/TextAreaHistory";
import { useParams } from "react-router-dom";

function TicketHistory() {
  // fake data until get data from API
  // const ticket = data[0];

  const { tId } = useParams();

  const [repMessage, setRepMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    data.filter((ticket) => {
      return ticket.id === tId ? setTicket(ticket) : "";
      
    });
  }, [tId, repMessage]);

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
        <Col className="font-weight-bolder text-secondary mt-4">
          {tId}
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
