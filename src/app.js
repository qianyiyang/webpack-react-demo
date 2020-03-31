import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import asyncComponent from "./AsyncComponent";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/list' component={asyncComponent(() => import("./List"))} />
      <Route
        path='/table'
        component={asyncComponent(() => import("./Table"))}
      />
    </Switch>
  </HashRouter>,
  document.getElementById("app")
);
