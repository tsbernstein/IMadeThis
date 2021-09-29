import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router";
import React from 'react';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is already authenticated
        <Redirect to="/" />
      )
    }
  />
);
  
  const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
  };
  
  export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth));

  export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));