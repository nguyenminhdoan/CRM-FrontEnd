import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import LoginForm from "../../components/login/LoginForm";
import "./entry.style.css";

function Entry() {
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <LoginForm />
      </Jumbotron>
    </div>
  );
}

export default Entry;
