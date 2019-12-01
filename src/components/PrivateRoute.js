import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";


const PrivateRoute = ({ component: Component, userLogin ,...rest }) => {

  const token = localStorage.getItem('token');
  return (
    <div>
      <Route {...rest} render={(props) => token ? <Component {...props} {...rest} /> : <Redirect to='/'  />} />
    </div>
  );
}
export default PrivateRoute;