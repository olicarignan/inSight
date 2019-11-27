import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {

  const token = localStorage.getItem('token');
  return (
    <div>
      <Route {...rest} render={(props) => token ? <Component {...props} /> : <Redirect to='/' />} />
    </div>
  );
}
export default PrivateRoute;