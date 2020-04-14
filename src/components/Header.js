import React from "react";
import { useHistory } from "react-router-dom";
const Header = () => {
  let history = useHistory();
  return (
    <div className="flex flex-row h-20 bg-indigo-700 rounded-lg ">
      <h1 className="text-3xl px-3 py-2 text-indigo-400 self-center">Header</h1>
      <button onClick={() => history.push("/login")}>Login</button>
    </div>
  );
};

export default Header;
