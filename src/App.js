// @packages
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// @app
import PlanetListContainer from './containers/PlanetList';
import SearchBoxContainer from './containers/SearchBox';

// @own
import './App.scss';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Switch>
            <Route exact path="/">
              <SearchBoxContainer />
            </Route>
            <Route exact path="/your-planets">
              <PlanetListContainer />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
