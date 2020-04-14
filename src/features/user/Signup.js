import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signup } from "./userSlice";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();

  const onSignup = () => {
    console.log({ username, password });
    dispatch(signup({ username, password }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={onUserNameChange}
      ></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      ></input>
      <button onClick={onSignup}>Signup</button>
    </div>
  );
};

export default Signup;
