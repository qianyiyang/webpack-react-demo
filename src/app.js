import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import List from "./List";
// import { flatten } from "./common";

// let arr = [1, [3, [4, 5]], [2, [20]]];
// console.log(flatten(arr));

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/list' component={List} />
    </Switch>
  </HashRouter>,
  document.getElementById("app")
);
