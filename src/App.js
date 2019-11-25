import React from 'react';
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"
import SideBar from './components/sidebar/sidebar';
import Nav from './components/nav/nav';



function App() {

  const { state, dispatch } = useApplicationData();

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
      <div>
        <SideBar 
        categories={state.categories}
        />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
