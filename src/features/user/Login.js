import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login, loggedInUserSelector } from "./userSlice";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userLoggedIn = useSelector(loggedInUserSelector);
  let history = useHistory();

  useEffect(() => {
    if (userLoggedIn) {
      console.log("Effect: ", userLoggedIn);
      history.push("/employeeview");
    }
    //TODO; redirect to user history page
  }, [userLoggedIn]);

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();

  const onLogin = () => {
    console.log({ username, password });
    dispatch(login({ username, password }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={onUserNameChange}
        className="bg-white mx-2 px-2 text-black placeholder-gray-400"
      ></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        className="bg-white mx-2 px-2 text-black placeholder-gray-400"
      ></input>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
