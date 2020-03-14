import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import PeopleCard from './comp/home/PeopleCard';
import Personinfo from './comp/PersonInfo';
import Home from './comp/home/Home';
import SignIn from './comp/signIn';
import DeleteP from './comp/DeleteP';
import Login from './Sign-up/Login';

class App extends React.Component {

      render() {
        return (
          <div className="App">
            <Switch>
              <Route exact path="/" component={Personinfo} />
              <Route path="/home" component={Home} />
              <Route path="/personal" component={PeopleCard} />
              <Route exact path= "/signin" component={SignIn} />
              <Route path="/del" component={DeleteP} />
              <Redirect to="#"/>

            </Switch>
          </div>
  );
        };
}

export default App;
