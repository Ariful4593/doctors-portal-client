import React, { useState } from 'react';
import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from "react-router-dom";
import { UserContext } from '../../../App';
const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userLogin = JSON.parse(sessionStorage.getItem('user'));
    const [test, setTest] = useState({
      isLogin: true,
  })
    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email  ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;