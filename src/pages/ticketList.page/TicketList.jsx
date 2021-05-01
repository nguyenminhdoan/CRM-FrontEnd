import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadscrumbPage from "../../components/breadScrum/BreadscrumbPage";
import SearchForm from "../../components/searchForm/SearchForm";
import TicketTable from "../../components/ticketTable/TicketTable";
// import dataTicket from "../../assets/data/data.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTicket } from "./ticketAction";

function TicketList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTicket());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadscrumbPage page={"Ticket List"} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Link to="/add-ticket">
            <Button className="mt-4" variant="info">
              Add New Ticket
            </Button>
          </Link>
        </Col>
        <Col className="text-right">
          {" "}
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketList;
