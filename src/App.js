import React from "react";
import EmployersView from "./features/employers/EmployersView";
import "./app/main.css";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="container flex flex-col items-center">
      <EmployersView />
    </div>
  );
}

export default App;
