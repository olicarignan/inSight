import React, { useState } from 'react';
import useApplicationData from "../hooks/useApplicationData";
import Calendar from "../components/Calendar";
import Nav from '../components/nav/nav';
import SideBar from '../components/sidebar/sidebar'; 
import NotesList from '../components/categoryPage/notesList';
import useVisualMode from '../hooks/useVisualMode';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const SHOW = 'SHOW'
const EMPTY = 'EMPTY';

export default function MainPage(props) {

  console.log(props.user)

  const {mode, transition, back} = useVisualMode(props.user.email ? SHOW : EMPTY)

  return (
    <div>
      <div className="App">
        {mode === SHOW && ( <Nav
      user={props.user}
      userLogout={props.userLogout}
       />)}
       {mode === EMPTY && <Nav />}
      <div className="main-container">
        <SideBar 
        categories={props.categories}
        />
        <div className="calendar-div">
          <Calendar
          addAppointment={props.addAppointment} />
        </div>
      </div>
    </div>
  </div>
  );
}