import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import ResetPasswordForm from "../../components/resetPasswordForm/ResetPasswordForm";
import UpdatePasswordForm from "../../components/resetPasswordForm/UpdatePasswordForm";
import "./resetPassword.style.css";

function ResetPasswordPage() {
  const { showUpdatePassForm } = useSelector((state) => state.resetPassword);
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {showUpdatePassForm ? <UpdatePasswordForm /> : <ResetPasswordForm />}
      </Jumbotron>
    </div>
  );
}

export default ResetPasswordPage;
