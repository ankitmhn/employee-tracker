import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { loggedInUserSelector } from "./userSlice";

const EmployeeView = () => {
  const userLoggedIn = useSelector(loggedInUserSelector);
  const history = useHistory();
  return userLoggedIn === true ? <p>Employee View</p> : <Redirect to="/" />;
};

export default EmployeeView;
