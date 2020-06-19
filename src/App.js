import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./components/pages/home/Home";
import SeriesPage from "./components/pages/series/Series";


const App = () => {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/series">
            <SeriesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
