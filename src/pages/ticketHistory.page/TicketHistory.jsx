import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import BreadscrumbPage from "../../components/breadScrum/BreadscrumbPage";
import MessageHistory from "../../components/messageHistory/MessageHistory";
import TextAreaHistory from "../../components/texAreaHistory/TextAreaHistory";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleTicket } from "../../pages/ticketList.page/ticketAction";

function TicketHistory() {
  const { isLoading, error, selectedTicket } = useSelector(
    (state) => state.tickets
  );
  const { tId } = useParams();
  const dispatch = useDispatch();

  const [repMessage, setRepMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
  }, [tId, repMessage, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadscrumbPage page={"ticket history"} />
        </Col>
      </Row>

      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error} </Alert>}
        </Col>
      </Row>

      <Row>
        <Col className="font-weight-bolder text-secondary mt-4">
          {tId}
          <div className="subject">Subject: {selectedTicket.subject}</div>
          <div className="date">
            Ticket Open:{" "}
            {selectedTicket.openAt &&
              new Date(selectedTicket.openAt).toLocaleString()}
          </div>
          <div className="status">Status: {selectedTicket.status}</div>
        </Col>

        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <MessageHistory ticketHistory={selectedTicket.conversation} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <TextAreaHistory />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketHistory;
