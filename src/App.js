import './App.css';
import React from "react";
import OnBoard from "./components/OnBoard";
import ProfileEdit from "./components/ProfileEdit";
import useStore from './zu_store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  // Get the age for simple redirection on refreshing the page
  const age = useStore(state => state.person.age);

  return (
    <Router>
      <div className="App">
        <div id='content'>
          <Switch>
            <Route exact path="/">
              <h1> Make profile </h1>
              <OnBoard />
            </Route>
            {
              age !== -1 &&
              <Route exact path="/edit">
                <h1> Edit Profile </h1>
                <ProfileEdit />
              </Route>
            }
            <Route path="/">
              <h1> Make profile </h1>
              <OnBoard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
