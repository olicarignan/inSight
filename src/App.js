import React, { useEffect, useState } from 'react';
import './App.scss';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"
import Nav from './components/nav/nav';
import SideBar from './components/sidebar/sidebar'; 
import LoginPage from './components/login_register/loginPage'
import RegisterPage from './components/login_register/registerPage'
import NotesList from './components/categoryPage/notesList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';

import Editor from './components/textEditor/newText';

import MainPage from './components/MainPage'

function App() {

  const { state,
          userLogin,
          dispatch, 
          addUser,
          userLogout, 
          authUser,
          addAppointment } = useApplicationData();

  // const userList = state.users.map( user => (
  //   <li key={user.id}>
  //     {user.first_name} {user.last_name} {user.email}
  //   </li>
  // ))
  
  const token = localStorage.getItem('token');
  
    
  useEffect(() => {
    console.log('aaaaaaa')
    authUser(token).then(res => console.log(res));
  }, [token])

  

  return (
    <Router>
    <Switch>
      <Route exact path="/" render={
        () => <LoginPage  userLogin={userLogin} isAuthenticated={state.isAuthenticated} />}/>
      <Route path="/register" render={
        () => <RegisterPage addUser={addUser} isAuthenticated={state.isAuthenticated} />}/>
      <PrivateRoute path="/main" component={MainPage} 
      addAppointment={addAppointment}
      user={state.user} 
      categories={state.categories}
      userLogout={userLogout}
      />
      </Switch>
    </Router>
    
  );
}

export default App;