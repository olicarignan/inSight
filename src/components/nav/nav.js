import React from 'react';
import './nav.scss';
import ReactTooltip from 'react-tooltip'

export default function Nav (props) {

  let {user, notes, userLogout} = props;

  const navButton = (buttonState) => {
    if (buttonState === '+') {
      return (
        <a href="#" className="menuButton" id="menuButton">
        +
      </a>
      )
    } else if (buttonState === 'back to main'){
      return (

        <a href="/main" className="menuButton" id="menuButton">
        ⟵
      </a>
        )
    } else if (buttonState === 'back to notes') {
      return (
        <a href={`/categories/${props.note.category_id}`} className="menuButton" id="menuButton">
        ⟵
      </a>
        )
    }
  }

  return (
    <nav className='navbar'>
     {navButton(props.navButton)}
      <a className="userButton" href="#" data-event='click' data-tip data-for="logout">{user.first_name}
      <ReactTooltip place="bottom" id="logout" clickable={true} effect="solid" isCapture='true'>
      <button className="logout" onClick={() => {
        userLogout()}}><a className="logout" href="#">logout</a></button>
      </ReactTooltip>
      </a>
      </nav>
  )
}