import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';


function App() {
  return (
    <div className="App">
      < SignUp />

      <Router>
        <Switch>
          <Route path='/signup' component = {SignUp}/>
          <Route path='/signin' component = {SignIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
