import React, { useEffect, useState } from 'react';
import './App.scss';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"
import Nav from './components/nav/nav';
import SideBar from './components/sidebar/sidebar'; 
import LoginPage from './components/login_register/loginPage'
import RegisterPage from './components/login_register/registerPage'
import ShowNotes from './components/categoryPage/ShowNotes'
import Editor from './components/textEditor/Editor'
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
          deleteCategory,
          deleteNote} = useApplicationData();

  // const userList = state.users.map( user => (
  //   <li key={user.id}>
  //     {user.first_name} {user.last_name} {user.email}
  //   </li>
  // ))
  
  // const token = localStorage.getItem('token');
  
  const token = localStorage.getItem('token');

  useEffect(() => {
    authUser(token).then(res => {
      const categories = axios.get(`/api/categories/${res.id}`);
      const appointments = axios.get(`/api/appointments/${res.id}`);
      const notes = axios.get(`/api/notes/${res.id}`);

    Promise.all([categories, appointments, notes]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        categories: all[0].data,
        appointments: all[1].data,
        notes: all[2].data
      });
      return [all[1], all[0]]
    }).then(res => {
      setCalendarEvents(res[0].data, res[1].data)
    })
    .catch(error => console.log(error));
    })
  }, [])

  const colours = ['red', 'blue', 'yellow', 'purple', 'green'];
  const [viewHeight, setViewHeight] = useState(520)


  const categoryToggleState = state.appointments.map(appointment => {
    
    let categoryToggle = {}
    let category = appointment.category_id;
    categoryToggle[category] = appointment.toggle
    return categoryToggle
  })

  const notesList = state.notes.map( note => {
    return (
      <Route path={`/notes/note/${note.id}`} component={() => <Editor note={note} navButton={navButton} setNavButton={setNavButton} user={state.user} category_id={note.category_id}/>}/>
    )
  })


  const categoryList = state.categories.map( category => {
    return (
      <Route path={`/categories/${category.id}`} component={() => <ShowNotes deleteNote={deleteNote} navButton={navButton} setNavButton={setNavButton}user={state.user} category={category} notes={state.notes}/>}/>
    )
  })

  const newNoteByCategory = state.categories.map( category => {
    return (
      <Route path={`/categories/${category.id}/new`} component={() => <Editor navButton={navButton} setNavButton={setNavButton} user={state.user} category_id={category.id}/>}/>
    )
  })


  const [ navButton, setNavButton ] = useState('+')

  return (
    <Router>
    <Switch>
      <Route exact path="/" render={
        () => <LoginPage  userLogin={userLogin} isAuthenticated={state.isAuthenticated} />}/>
      <Route path="/register" render={
        () => <RegisterPage addUser={addUser} isAuthenticated={state.isAuthenticated} />}/>
        {newNoteByCategory}
        {categoryList}
        {notesList}
      <PrivateRoute path="/main" component={MainPage}
      viewHeight={viewHeight}
      setViewHeight={setViewHeight}
      colours={colours}
      navButton={navButton}
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