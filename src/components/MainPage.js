import React from 'react';
import useApplicationData from "../hooks/useApplicationData";
import Calendar from "../components/Calendar";
import Nav from '../components/nav/nav';
import SideBar from '../components/sidebar/sidebar'; 
import NotesList from '../components/categoryPage/notesList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function MainPage(props) {
  return (
    <div>
      <div className="App">
      <Nav
       />
      <div className="main-container">
        <SideBar 
        categories={props.categories}
        />
        <div className="calendar-div">
          <Calendar />
        </div>
      </div>
    </div>
  </div>
  );
}