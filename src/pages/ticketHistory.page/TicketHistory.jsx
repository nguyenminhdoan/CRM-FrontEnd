import React, { useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import BreadscrumbPage from "../../components/breadScrum/BreadscrumbPage";
import MessageHistory from "../../components/messageHistory/MessageHistory";
import TextAreaHistory from "../../components/texAreaHistory/TextAreaHistory";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleTicket,
  closeTicket,
} from "../../pages/ticketList.page/ticketAction";

import { refreshMsg } from "../ticketList.page/ticketsSlice";

function TicketHistory() {
  const { isLoading, selectedTicket, replyTicketError, msgStatusReply } =
    useSelector((state) => state.tickets);

  const { tId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
    return () => {
      (replyTicketError || msgStatusReply) && dispatch(refreshMsg());
    };
  }, [tId, dispatch]);

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
          <div className="subject">Subject: {selectedTicket.subject}</div>
          <div className="date">
            Ticket Open:{" "}
            {selectedTicket.openAt &&
              new Date(selectedTicket.openAt).toLocaleString()}
          </div>
          <div className="status">Status: {selectedTicket.status}</div>
        </Col>

        <Col className="text-right">
          <Button
            variant="outline-info"
            onClick={() => dispatch(closeTicket(tId))}
            disabled={selectedTicket.status === "closed"}
          >
            Close Ticket
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {replyTicketError && (
            <Alert variant="danger">{replyTicketError} </Alert>
          )}
          {msgStatusReply && <Alert variant="success">{msgStatusReply}</Alert>}
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
