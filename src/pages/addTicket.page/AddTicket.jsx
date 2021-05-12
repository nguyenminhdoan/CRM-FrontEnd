import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbPage from "../../components/breadScrum/BreadscrumbPage";
import AddTicketForm from "../../components/addTicketForm/AddTicketForm";

function AddTicket() {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page={"New Ticket"} />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
}

export default AddTicket;
