import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./NavBar/NavBarContainer";
import Modal from './modal/modal'
import Splash from "./splash/splash_container";

const App = () => (
  <div>
      <Modal />
      <NavBarContainer/>
      <Switch>
        <Splash exact path="/" component={Splash}/>
      </Switch>
  </div>
);

export default App;