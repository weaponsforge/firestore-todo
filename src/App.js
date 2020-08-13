import React from 'react';
import logo from './logo.svg';
import Home from './components/home'
import Todos from './components/todos'
import SignIn from './components/signin'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div style = {{
      textAlign: 'center'
    }}>
      <h1>Redux Todo App</h1>
      <Router>
        <Switch>
          <Home path = '/todos'>
            <Todos />
          </Home>
          <Route path = '/'>
          <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App
