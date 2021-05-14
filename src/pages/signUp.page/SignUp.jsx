import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css";
import SignUpForm from "../../components/signUpForm/SignUpForm";

function SignUp() {
  return (
    <div className="singUp-page bg-info">
      <div className="mt-5">
        <Jumbotron className="form-box">
          <SignUpForm />
        </Jumbotron>
      </div>
    </div>
  );
}

export default SignUp;
