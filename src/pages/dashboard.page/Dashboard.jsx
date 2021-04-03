import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadscrumbPage from "../../components/BreadscrumbPage";
import TicketTable from "../../components/TicketTable";
import dataTicket from "../../assets/data/data.json";
import { Link } from "react-router-dom";
function Dashboard() {
  const styleBtn = {
    fontSize: `2rem`,
    padding: `10px 30px`,
    backgroundColor: `#0065ff`,
    boxShadow: `#0000007a 0px 0px 10px`,
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadscrumbPage page={"Dashboard"} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button style={styleBtn}>Add New Ticket</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 50</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-2">Recently Added Tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable dataTicket={dataTicket} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
