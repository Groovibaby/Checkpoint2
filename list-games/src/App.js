import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import GameList from './components/GameList';
import { Route, Switch } from 'react-router-dom';
import ScreenPage from './components/ScreenPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={GameList} />
      </Switch>
      <Switch>
        <Route exact path="/jeu/screenshots/:id" component={ScreenPage} />
      </Switch>
    </>
  );
}

export default App;
