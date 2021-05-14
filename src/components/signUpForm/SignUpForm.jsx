import React, { useEffect, useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
function SignUpForm() {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
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

  const [userSignUp, setUserSignUp] = useState(initialState);
  const [passwordCheck, setPasswordCheck] = useState(passwordVerify);

  useEffect(() => {}, [userSignUp]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserSignUp({ ...userSignUp, [name]: value });

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
        confirmPassword: userSignUp.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(userSignUp);
    e.target.reset();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">User Sign Up</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Full Name"
                name="name"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Your Phone"
                name="phone"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Company"
                name="company"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Address"
                name="address"
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
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;
