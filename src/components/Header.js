import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loggedInUserSelector, logout } from "./../features/user/userSlice";
const Header = () => {
  const isLoggedIn = useSelector(loggedInUserSelector);
  const dispatch = useDispatch();
  let history = useHistory();

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div className="flex flex-row h-20 bg-indigo-700 rounded-lg flex-between">
      <Link to="/">
        <h1 className="text-3xl px-3 py-4 text-indigo-400 self-center">
          FakeIn
        </h1>
      </Link>
      {!isLoggedIn && (
        <Link to="/signup" className="self-center px-2 indigo-600">
          Signup
        </Link>
      )}
      {!isLoggedIn && (
        <Link to="/login" className="self-center px-2 indigo-600">
          Login
        </Link>
      )}
      {isLoggedIn && (
        <button onClick={onLogout} className="self-center px-2">
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
