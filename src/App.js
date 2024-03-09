import React from "react";
import Navbar from "./components/homepagefolder/Navbar";
import Home from "./components/homepagefolder/Home";
import Form from "./components/Form";
//import Header from "./components/homepagefolder/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConfirmationPage from "./components/Confirmation";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pizza">
            <Form />
          </Route>
          <Route path="/confirmation">
            <ConfirmationPage  />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
