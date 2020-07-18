import React from 'react';
import {
  BrowserRouter as Router,
  //HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import MainMap from './pages/MainMap';
import SingleState from './pages/SingleState'
import NotFound from './pages/NotFound'
import './App.css';

function App() {
  return (
    < >
      <Router>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/mainmap" component={MainMap} exact={true} />
          <Route path="/state/:id" component={SingleState} exact={true} />
          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
