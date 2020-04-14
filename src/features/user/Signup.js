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
        className="bg-white mx-2 px-2 text-black placeholder-gray-400"
      ></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="bg-white mx-2 px-2 text-black placeholder-gray-400"
        onChange={onPasswordChange}
      ></input>
      <button className="px-2 py-3 rounded-lg" onClick={onSignup}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
