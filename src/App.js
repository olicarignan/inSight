import React from 'react';
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"

import SideBar from './components/sidebar/sidebar'; 
import LoginPage from './components/login_register/loginPage'
import RegisterPage from './components/login_register/registerPage'


import NewAppointment from './components/appointment/new-appointment-form'
import { isPropsEqual } from '@fullcalendar/core';


function App() {

  const { state, dispatch } = useApplicationData();

  console.log(state)

  const userList = state.users.map( user => (
    <li key={user.id}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ))
      

  return (
    <div className="App">
      <ul>{userList}</ul>
      <div>
        <SideBar 
        categories={state.categories}
        />
        <Calendar/>
      </div>
      <div>
        < NewAppointment />
      </div>
    </div>
    
  );
}

export default App;
