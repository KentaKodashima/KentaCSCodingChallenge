// Libraries
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "home/components/Home";
import ArticlesContainer from "articles/components/ArticlesContainer";

// Routes
const ROOT = "/";
const ARTICLES = "/articles";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route strict path={ARTICLES} component={ArticlesContainer} />
        <Route strict path={ROOT} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

const rootElement = document.querySelector("#react-app");

render(<App />, rootElement);
