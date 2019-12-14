import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Top from './Top';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="*" component={Top} />
      </Switch>
    </Router>
  );
};

export default App;
