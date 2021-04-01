import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

LoginForm.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  handleOnsubmit: PropTypes.func.isRequired,
  handleFormSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

function LoginForm(props) {
  const {
    handleOnchange,
    email,
    password,
    handleOnsubmit,
    handleFormSwitcher,
  } = props;

  // FUNCTION

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleOnsubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email "
                required
                onChange={handleOnchange}
              ></Form.Control>
            </Form.Group>
            {/*  */}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                name="password"
                placeholder="Enter Password "
                required
                onChange={handleOnchange}
              ></Form.Control>
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Col>
        <a onClick={() => handleFormSwitcher("reset")} href="#">
          Forgot Password
        </a>
      </Col>
    </Container>
  );
}

export default LoginForm;
