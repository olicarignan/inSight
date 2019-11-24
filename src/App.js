import React from 'react';
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import Calendar from "./components/Calendar"


function App() {

  const { state, dispatch } = useApplicationData();

  console.log(state)

  const userList = state.users.map( user => (
    <li key={user.id}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ))
  const categoryList = state.categories.map(category => (
    <li key={category.id}>
      {category.category_name} {console.log(category)}
      </li>
  ))
      

  return (
    <div className="App">
      <ul>{userList}</ul>
      <ul>{categoryList}</ul>
      <div>
      </div>
    </div>
  );
}

export default App;
