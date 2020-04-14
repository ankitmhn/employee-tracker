import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployersView from "./features/employers/EmployersView";
import "./app/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployerDetail from "./components/EmployerDetails";
import Login from "./features/user/Login";
import Signup from "./features/user/Signup";
import EmployeeView from "./features/user/EmployeeView";

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="container flex mx-auto justify-between bg-gray-300 flex-col min-h-screen ">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={EmployersView} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/org/:name" component={EmployerDetail} />
          <Route path="/employeeview" component={EmployeeView} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
