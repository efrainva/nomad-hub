import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import PeopleCard from './comp/PeopleCard';
import Personinfo from './comp/PersonInfo';
import Home from './comp/Home'
import ad from './comp/ad'

class App extends React.Component {

      render() {
        return (
          <div className="App">

            <Switch>
              <Route exact path="/" component={Personinfo} />
              <Route path="/home" component={Home} />
              <Route path="/personal" component={PeopleCard} />
              <Route path= "/add" component={ad} />
              <Redirect />

            </Switch>
          </div>
  );
        };
}

export default App;
