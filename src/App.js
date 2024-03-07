import React from "react";

import Form from "./components/Form";
//import Header from "./components/homepagefolder/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageFunction from "./components/homepagefolder/Homepagestructure";
import ConfirmationPage from "./components/Confirmation";
const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <HomePageFunction />
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
