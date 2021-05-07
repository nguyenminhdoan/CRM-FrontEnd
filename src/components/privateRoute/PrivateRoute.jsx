import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { loginSuccess } from "../login/loginSlice";
import { fetchNewJWT } from "../../api/userLoginAPI";
import { getUserProfile } from "../../pages/dashboard.page/userAction";

function PrivateRoute(props) {
  const { children, ...rest } = props;
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewJWT();
      result && dispatch(loginSuccess());
    };
    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmSite") &&
      updateAccessJWT();

    !user._id && dispatch(getUserProfile());

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth]);

  return (
    <Route
      {...rest}
      render={() => {
        return isAuth ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}

export default PrivateRoute;
