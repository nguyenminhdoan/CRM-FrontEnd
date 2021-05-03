import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import {userLogin} from "../../api/userLoginAPI";
import { useHistory } from "react-router";
import { getUserProfile } from "../../pages/dashboard.page/userAction";
// LoginForm.propTypes = {
//   handleOnchange: PropTypes.func.isRequired,
//   handleOnsubmit: PropTypes.func.isRequired,
//   handleFormSwitcher: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

function LoginForm(props) {
  const { handleFormSwitcher } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FUNCTION
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("please fill in the form");
    }

    dispatch(loginPending());
    try {
      const isAuth = await userLogin({ email, password });
      // console.log(isAuth);
      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      dispatch(loginFail());
    }
    // console.log("email:" + email, "passwod:" + password);

    // setEmail("");
    // setPassword("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
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
            {isLoading && <Spinner variant="primary" animation="border" />}
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
