import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../api/userLoginAPI";
import { getUserProfile } from "../../pages/dashboard.page/userAction";
import { loginFail, loginPending, loginSuccess } from "./loginSlice";

function LoginForm(props) {
  const { handleFormSwitcher } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  useEffect(() => {
    sessionStorage.getItem("accessJWT") && history.push("/dashboard");
  }, [history, isAuth]);

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
    setPassword("");
    if (!email || !password) {
      alert("please fill in the form");
    }

    dispatch(loginPending());
    try {
      const isAuth = await userLogin({ email: email, password: password });
      if (isAuth.status === "failed") {
        return dispatch(loginFail(isAuth.message));
      }
      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      dispatch(loginFail());
    }
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
