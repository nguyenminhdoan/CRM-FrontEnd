import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

ResetPasswordForm.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  handleFormSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

function ResetPasswordForm(props) {
  const {
    handleOnchange,
    email,
    handleOnResetSubmit,
    handleFormSwitcher,
  } = props;

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
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

            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Col>
        <a onClick={() => handleFormSwitcher("login")} href="#">
          Login Now
        </a>
      </Col>
    </Container>
  );
}

export default ResetPasswordForm;
