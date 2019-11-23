import React from 'react';
import logo from './logo.svg';
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"


function App() {

  const { state, dispatch } = useApplicationData();

  const userList = state.users.map( user => (
    <li key={user.id}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ))
      

  return (
    <div className="App">
      <ul>{userList}</ul>
      <div>
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default App;
