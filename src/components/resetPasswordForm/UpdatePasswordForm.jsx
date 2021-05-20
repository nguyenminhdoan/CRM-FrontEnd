import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "./resetPasswordAction";

function UpdatePasswordForm() {
  const initialState = {
    pin: "",
    password: "",
    confirmPassword: "",
  };

  const passwordVerify = {
    isLengthy: false,
    isUpper: false,
    isLower: false,
    isNumber: false,
    isSpecialChar: false,
    confirmPassword: false,
  };

  const [newPassword, setNewPassword] = useState(initialState);
  const [passwordCheck, setPasswordCheck] = useState(passwordVerify);

  const dispatch = useDispatch();
  const { isLoading, status, message, email } = useSelector(
    (state) => state.resetPassword
  );

  useEffect(() => {}, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewPassword({ ...newPassword, [name]: value });

    if (name === "password") {
      const isLengthy = value.length > 8;
      const isUpper = /[A-Z]/.test(value);
      const isLower = /[a-z]/.test(value);
      const isNumber = /[0-9]/.test(value);
      const isSpecialChar = /[@ # % ^ & *.]/.test(value);

      setPasswordCheck({
        ...passwordCheck,
        isLengthy,
        isUpper,
        isLower,
        isNumber,
        isSpecialChar,
      });
    }

    if (name === "confirmPassword") {
      setPasswordCheck({
        ...passwordCheck,
        confirmPassword: newPassword.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { pin, password } = newPassword;
    const newPassObj = {
      pin: pin,
      newPassword: password,
      email: email,
    };
    dispatch(updatePassword(newPassObj));

    e.target.reset();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">Update Password</h1>
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="number"
                placeholder="OTP"
                name="pin"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Text>
              {!passwordCheck.confirmPassword && (
                <div className="text-danger mb-5">password doesn't match</div>
              )}
            </Form.Text>

            <div className="mb-5">
              <ul>
                <li
                  className={
                    passwordCheck.isLengthy ? "text-success" : "text-danger"
                  }
                >
                  Password must contain at least 8 characters.
                </li>
                <li
                  className={
                    passwordCheck.isUpper ? "text-success" : "text-danger"
                  }
                >
                  Password must contain at least 1 uppercase character.
                </li>
                <li
                  className={
                    passwordCheck.isLower ? "text-success" : "text-danger"
                  }
                >
                  Password must contain at least 1 lowercase character.
                </li>
                <li
                  className={
                    passwordCheck.isNumber ? "text-success" : "text-danger"
                  }
                >
                  Password must contain at least 1 number.
                </li>
                <li
                  className={
                    passwordCheck.isSpecialChar ? "text-success" : "text-danger"
                  }
                >
                  Password must contain at least 1 special character i.e @ # % ^
                  & *.
                </li>
              </ul>
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={Object.values(passwordCheck).includes(false)}
            >
              Submit
            </Button>
            <Row>
              {isLoading && <Spinner variant="info" animation="border" />}
            </Row>

            <Col>
              <Row>
                <a className="text-info mt-3" href="/">
                  Login Now
                </a>
              </Row>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdatePasswordForm;
