import React from "react";
import { ProtectedRoute } from '../util/route_util'
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from "./NavBar/NavBarContainer";
import Modal from './modal/modal';
import Splash from "./splash/splash";
import Show from './Product/product_show_container'
import Edit from './Review/edit_review_form_container'
import Footer from './Footer/footer'
import Cart from './Cart/CartContainer'
import ThankYou from "./Cart/ThankYou";

const App = () => (
  <div>
      <Modal />
      <NavBarContainer/>
      <Switch>
        <Route exact path={`/thanks`} component={ThankYou}/>
        <ProtectedRoute exact path={`/cart`} component={Cart}/>
        <Route exact path={`/products/:productId`} component={Show}/>
        <Route exact path={`/reviews/:reviewId/edit`} component={Edit}/>
        <Route exact path="/" component={Splash}/>
      </Switch>
      <Footer/>
  </div>
);

export default App;