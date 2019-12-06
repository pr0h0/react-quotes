import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Quotes from "./components/quotes/Quotes";

import Navbar from "./components/misc/Navbar";
import NotFound from "./components/misc/NotFound";
import CSSHolder from "./components/misc/CSSHolder";

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          {routes.routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}

          {routes.switch.map((swt, idx) => (
            <Switch key={idx}>
              {swt.map((sw, index) => (
                <Route key={index ** swt} {...sw} />
              ))}
            </Switch>
          ))}
        </>
      </Router>
    );
  }
}

const routes = {
  routes: [
    { path: "/", component: Navbar },
    { path: "/", component: CSSHolder }
  ],
  switch: [
    [
      { path: "/quotes", component: Quotes, exact: true },
      { component: NotFound }
    ]
  ]
};
