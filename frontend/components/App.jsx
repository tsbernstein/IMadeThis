import React from "react";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>I Made This</h1>
      <Route path='/signup' component={SignupFormContainer}/>
      <Route path='/login' component={LoginFormContainer}/>
    </header>

  </div>
);

export default App;