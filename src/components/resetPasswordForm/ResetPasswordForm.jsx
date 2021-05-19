import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendReqOtp } from "./resetPasswordAction";

function ResetPasswordForm() {
  const dispatch = useDispatch();
  const { isLoading, status, message } = useSelector(
    (state) => state.resetPassword
  );
  const [email, setEmail] = useState("");
  const handleOnchange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    dispatch(sendReqOtp(email));
    setEmail("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
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
          {isLoading && <Spinner variant="primary" animation="border" />}
          <hr />
        </Col>
      </Row>
      <Col>
        <a href="/">Login Now</a>
      </Col>
    </Container>
  );
}

export default ResetPasswordForm;
