import React, { useEffect, useState } from 'react';
import './App.scss';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"
import Nav from './components/nav/nav';
import SideBar from './components/sidebar/sidebar'; 
import LoginPage from './components/login_register/loginPage'
import RegisterPage from './components/login_register/registerPage'
import NotesList from './components/categoryPage/NotesList'
import axios from 'axios';
import CategoryRoute from './components/CategoryRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SET_APPLICATION_DATA } from '../src/reducers/dataReducer';

import PrivateRoute from './components/PrivateRoute';

import Editor from './components/textEditor/Editor';

import MainPage from './components/MainPage'

function App() {

  const { state,
          userLogin,
          dispatch, 
          addUser,
          addAppointment,
          userLogout, 
          authUser,
          addCategory,
          showCategory,
          setCalendarEvents,
          setToggle,
          deleteAppointment,
          deleteCategory} = useApplicationData();

  // const userList = state.users.map( user => (
  //   <li key={user.id}>
  //     {user.first_name} {user.last_name} {user.email}
  //   </li>
  // ))
  
  // const token = localStorage.getItem('token');
  
  const token = localStorage.getItem('token');

  useEffect(() => {
    authUser(token).then(res => {
      console.log(res)
      const categories = axios.get(`/api/categories/${res.id}`);
      const appointments = axios.get(`/api/appointments/${res.id}`);
      const notes = axios.get(`/api/notes/`);

    Promise.all([categories, appointments, notes]).then(all => {
      console.log(all[0])
      dispatch({
        type: SET_APPLICATION_DATA,
        categories: all[0].data,
        appointments: all[1].data,
        notes: all[2].data
      });
      return all[1]
    }).then(res => {
      console.log(res.data)
      setCalendarEvents(res.data)
    })
    .catch(error => console.log(error));
    })
  }, [])

  console.log(state)

  const categoryToggleState = state.appointments.map(appointment => {
    let categoryToggle = {}
    let category = appointment.category_id;
    categoryToggle[category] = appointment.toggle
    return categoryToggle
  })


  const categoryList = state.categories.map( category => {
    return (
      <Route path={`/${category.category_name}`} component={() => <NotesList user={state.user} notes={state.notes}/>}/>
    )
  })

  return (
    <Router>
    <Switch>
      <Route exact path="/" render={
        () => <LoginPage  userLogin={userLogin} isAuthenticated={state.isAuthenticated} />}/>
      <Route path="/register" render={
        () => <RegisterPage addUser={addUser} isAuthenticated={state.isAuthenticated} />}/>
        {categoryList}
      <PrivateRoute path="/main" component={MainPage}
      deleteCategory={deleteCategory}
      deleteAppointment={deleteAppointment}
      categoryToggleState={categoryToggleState}
      appointments={state.appointments}
      setToggle={setToggle}
      calendarEvents={state.calendarEvents}
      showCategory={showCategory}
      addCategory={addCategory} 
      addAppointment={addAppointment}
      user={state.user} 
      categories={state.categories}
      userLogout={userLogout}
      appointments={state.appointments}
      />
      </Switch>
    </Router>
    
  );
}

export default App;