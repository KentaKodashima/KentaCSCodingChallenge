// Libraries
import React from "react";
import { Provider } from 'react-redux';
import { reduxStore } from '../lib/reduxStore'
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "home/components/Home";
import Article from '../features/articles';
import ArticleDetail from '../features/article-detail'

// Routes
const ROOT = "/";
const ARTICLES = "/articles";
const ARTICLE_DETAIL = "/articles/detail/:id";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route strict path={ARTICLE_DETAIL} component={ArticleDetail} />
          <Route strict path={ARTICLES} component={Article} />
          <Route strict path={ROOT} component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

const rootElement = document.querySelector("#react-app");

render(<App />, rootElement);
