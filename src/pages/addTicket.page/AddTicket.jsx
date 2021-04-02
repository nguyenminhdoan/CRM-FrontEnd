import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbPage from "../../components/BreadscrumbPage";
import AddTicketForm from "../../components/AddTicketForm";

function AddTicket() {
  const [formData, setFormData] = useState({
    subject: "",
    issueDate: "",
    detail: "",
  });

  useEffect(() => {}, [formData]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(name, value);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    console.log("received value: ", formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page={"New Ticket"} />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            formData={formData}
            handleOnchange={handleOnchange}
            handleOnsubmit={handleOnsubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AddTicket;
