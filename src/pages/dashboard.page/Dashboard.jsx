import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadscrumbPage from "../../components/breadScrum/BreadscrumbPage";
import TicketTable from "../../components/ticketTable/TicketTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTicket } from "../ticketList.page/ticketAction";

function Dashboard() {
  const styleBtn = {
    fontSize: `2rem`,
    padding: `10px 30px`,
    backgroundColor: `#0065ff`,
    boxShadow: `#0000007a 0px 0px 10px`,
  };

  const { tickets } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTicket());
    }
  }, [dispatch, tickets]);

  const pendingTickets = tickets.filter((ticket) => ticket.status !== "closed");
  const totalTickets = tickets.length;
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
          <div>Total Tickets: {totalTickets}</div>
          <div>Pending Tickets: {pendingTickets.length}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-2">Recently Added Tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
