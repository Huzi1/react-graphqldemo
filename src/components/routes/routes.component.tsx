import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../home/home.component";
import Characters from "../characters/characters.component";
import Episodes from "../episodes/episodes.component";

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/Characters"} component={Characters} exact />
          <Route path={"/Episodes"} component={Episodes} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
