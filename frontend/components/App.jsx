import React from "react";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./NavBar/NavBarContainer";
import Modal from './modal/modal'

const App = () => (
  <div>
      <Modal />
      <NavBarContainer/>
      <Switch>
      {/* <AuthRoute path='/login' component={LoginFormContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/> */}
      </Switch>
  </div>
);

export default App;