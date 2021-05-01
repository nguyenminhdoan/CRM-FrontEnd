import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../../pages/ticketList.page/ticketAction";

function SearchForm() {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(filterSearchTicket(value));
    // console.log(name, value);
  };
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Search:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="searchStr"
              placeholder="Search..."
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchForm;
