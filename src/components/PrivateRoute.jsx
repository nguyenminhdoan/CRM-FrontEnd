import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

function PrivateRoute(props) {
  const { children, ...rest } = props;

  const isLogIn = true;
  return (
    <Route
      {...rest}
      render={() => {
        return isLogIn ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}

export default PrivateRoute;
