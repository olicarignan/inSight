import React from 'react';
import './App.scss';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"
import Nav from './components/nav/nav';
import SideBar from './components/sidebar/sidebar'; 
import LoginPage from './components/login_register/loginPage'
import RegisterPage from './components/login_register/registerPage'


function App() {

  const { state, dispatch, addUser } = useApplicationData();

  console.log(state.users[0])


  const userList = state.users.map( user => (
    <li key={user.id}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ))

  return (
    <div className="App">
      <Nav
      users= {userList}
       />
      <div className="main-container">
        <SideBar 
        categories={state.categories}
        />
        <div className="calendar-div">
          {/* <Calendar /> */}
          <NotesList
          notes={state.notes} />
        </div>
      </div>
    </div>
    
  );
}

export default App;
