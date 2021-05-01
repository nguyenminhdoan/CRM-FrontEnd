import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import LoginForm from "../../components/login/LoginForm";
import ResetPasswordForm from "../../components/resetPasswordForm/ResetPasswordForm";
import "./entry.style.css";

function Entry() {
  // USE STATE
  const [formLoad, setFormLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const handleFormSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <LoginForm handleFormSwitcher={handleFormSwitcher} />
        )}
        {formLoad === "reset" && (
          <ResetPasswordForm
            handleFormSwitcher={handleFormSwitcher}
            handleOnResetSubmit={handleOnResetSubmit}
          />
        )}
      </Jumbotron>
    </div>
  );
}

export default Entry;
