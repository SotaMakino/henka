import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Row from './Row';
import Kona from './Kona';
import Pla from './Pla';
import Top from './Top';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/row" component={Row} />
        <Route path="/kona" component={Kona} />
        <Route path="/pla" component={Pla} />
        <Route path="/" component={Top} />
      </Switch>
    </Router>
  );
};

export default App;
