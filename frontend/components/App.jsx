import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./NavBar/NavBarContainer";
import Modal from './modal/modal';
import Splash from "./splash/splash";
import Show from './Product/product_show_container'

const App = () => (
  <div>
      <Modal />
      <NavBarContainer/>
      <Switch>
        <Route exact path={`/products/:productId`} component={Show}/>
        <Route exact path="/" component={Splash}/>
      </Switch>
  </div>
);

export default App;