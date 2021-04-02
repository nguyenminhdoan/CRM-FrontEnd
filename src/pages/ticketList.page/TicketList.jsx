import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadscrumbPage from "../../components/BreadscrumbPage";
import SearchForm from "../../components/SearchForm";
import TicketTable from "../../components/TicketTable";
import dataTicket from "../../assets/data/data.json";

function TicketList() {
  const [str, setStr] = useState("");
  const [ticketResFilter, setTicketResFilter] = useState(dataTicket);

  useEffect(() => {}, [str, ticketResFilter]);
  const handleOnChange = (e) => {
    // console.log(e.target.value);
    setStr(e.target.value);
    searchTicket(e.target.value);
  };

  const searchTicket = (string) => {
    const ticketRes = dataTicket.filter((ticket) => {
      return ticket.subject.toLowerCase().includes(string.toLowerCase());
    });
    console.log(ticketRes);
    setTicketResFilter(ticketRes);
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadscrumbPage page={"Ticket List"} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button className="mt-4" variant="info">
            Add New Form
          </Button>
        </Col>
        <Col className="text-right">
          {" "}
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable dataTicket={ticketResFilter} />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketList;
