import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";
import ResetPasswordForm from "../../components/ResetPasswordForm";
import "./entry.style.css";

function Entry() {
  // USE STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  // FUNCTION
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }

    // console.log(name, value);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("please fill in the form");
    }
    // console.log("email:" + email, "passwod:" + password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("please fill in the form");
    }
    console.log("email:" + email);
  };

  const handleFormSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <LoginForm
            email={email}
            password={password}
            handleOnchange={handleOnchange}
            handleOnsubmit={handleOnsubmit}
            handleFormSwitcher={handleFormSwitcher}
          />
        )}
        {formLoad === "reset" && (
          <ResetPasswordForm
            email={email}
            handleOnchange={handleOnchange}
            handleOnResetSubmit={handleOnResetSubmit}
            handleFormSwitcher={handleFormSwitcher}
          />
        )}
      </Jumbotron>
    </div>
  );
}

export default Entry;
