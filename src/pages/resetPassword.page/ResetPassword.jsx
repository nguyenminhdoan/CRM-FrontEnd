import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import ResetPasswordForm from "../../components/resetPasswordForm/ResetPasswordForm";
import "./resetPassword.style.css";

function ResetPassword() {
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <ResetPasswordForm />
      </Jumbotron>
    </div>
  );
}

export default ResetPassword;
