import React from "react";
import { Form, Row, Col } from "react-bootstrap";
function SearchForm(props) {
  const { handleOnChange, str } = props;
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
              value={str}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchForm;
