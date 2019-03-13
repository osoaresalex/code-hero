import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Template from './template';
import SearchPage from "./pages/search-page";
import DetailsPage from "./pages/details-page";

function App() {
  return (
    <Template>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route path="/details" component={DetailsPage}/>
        </Switch>
      </Router>
    </Template>
  );
}

export default App;
