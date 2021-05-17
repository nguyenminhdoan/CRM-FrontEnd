import React, { useEffect, useState } from "react";
import { Jumbotron, Spinner, Alert } from "react-bootstrap";
import "./style.css";
import { verifyUserSignUp } from "../../api/userLoginAPI";
import { useParams } from "react-router-dom";

const initialState = {
  status: "",
  message: "",
};

function Verify() {
  const { _id, email } = useParams();
  const data = { _id, email };
  console.log(data);

  const [response, setNewResponse] = useState(initialState);

  useEffect(() => {
    const callApi = async () => {
      const result = await verifyUserSignUp(data);
      setNewResponse(result);
      console.log(response);
    };
    !response.status && callApi();
  }, [response]);
  return (
    <div className="singUp-page bg-info">
      <div className="mt-5">
        <Jumbotron className="form-box">
          {!response.status && <Spinner variant="info" animation="border" />}
          {response.status && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
          <a href="/">Back to log in</a>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Verify;
