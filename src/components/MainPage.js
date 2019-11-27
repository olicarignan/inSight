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
  const { state, dispatch, addUser } = useApplicationData();

  const userList = state.users.map( user => (
    <li key={user.id}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ))
  return (
    <div>
      <div className="App">
      <Nav
       />
      <div className="main-container">
        <SideBar 
        categories={state.categories}
        />
        <div className="calendar-div">
          <Calendar />
        </div>
      </div>
    </div>
  </div>
  );
}