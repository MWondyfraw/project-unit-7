// Building App Components

import React from "react";

import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Stateful Components

const App = () => {
  return (
    <BrowserRouter>
      <SearchForm />
      <Nav />
      <Switch>
        <Route exact path="/" component={PhotoContainer} />
        <Route path="/:query" component={PhotoContainer} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
