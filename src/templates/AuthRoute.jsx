import React, { useContext, Fragment } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default ({ Component }) => {
  const {
    auth: { isAuth },
  } = useContext(AuthContext);

  return (
    <Fragment>
      {isAuth !== null && (isAuth ? <Redirect to="/" /> : <Component />)}
    </Fragment>
  );
};
