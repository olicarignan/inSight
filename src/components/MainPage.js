import React, { useState } from 'react';
import useApplicationData from "../hooks/useApplicationData";
import Calendar from "../components/Calendar";
import Nav from '../components/nav/nav';
import SideBar from '../components/sidebar/sidebar'; 
import NotesList from './categoryPage/NotesList'
import useVisualMode from '../hooks/useVisualMode';
import Editor from './textEditor/Editor'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewAppointment from './appointment/new-appointment-form';


const SHOW = 'SHOW'
const EMPTY = 'EMPTY';

export default function MainPage(props) {

  console.log(props.user)

  

  return (
    <div>
      <div className="App">
       <Nav
      user={props.user}
      userLogout={props.userLogout}/>
      <div className="main-container">
        <SideBar
        showCategory={props.showCategory} 
        user={props.user}
        addCategory={props.addCategory}
        categories={props.categories}
        />
        <div className="calendar-div">
          <Calendar
          calendarEvents={props.calendarEvents}
          categories={props.categories}
          user={props.user}
          addAppointment={props.addAppointment} />
        </div> 
      </div>
    </div>
  </div>
  );
}