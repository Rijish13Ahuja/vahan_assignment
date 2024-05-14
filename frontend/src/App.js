import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEntityPage from './pages/CreateEntityPage';
import EntityDetailsPage from './pages/EntityDetailsPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create-entity">
            <CreateEntityPage />
          </Route>
          <Route path="/entity/:id">
            <EntityDetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;