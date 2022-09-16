import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ListEmployeesComponent from "./components/ListEmployeesComponent";
import HeaderComponent from "./components/HeaderComponent";
import CreateEmployeesComponent from "./components/CreateEmployeesComponent";
import UpdateEmployeesComponent from "./components/UpdateEmployeesComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeesComponent}></Route>
            <Route
              path="/employees"
              exact
              component={ListEmployeesComponent}
            ></Route>
            <Route
              path="/add-employee"
              exact
              component={CreateEmployeesComponent}
            ></Route>
            <Route
              path="/update-employee/:id"
              component={UpdateEmployeesComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
            <Redirect to="/" />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
