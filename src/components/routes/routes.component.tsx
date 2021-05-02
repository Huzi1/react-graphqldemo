import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../home/home.component";
import AllCharacters from "../characters/all.characters.component";
import AllEpisodes from "../episodes/all.episodes.component";

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/Characters"} component={AllCharacters} exact />
          <Route path={"/Episodes"} component={AllEpisodes} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
