import React from 'react';
import './nav.scss';
import ReactTooltip from 'react-tooltip'

export default function Nav (props) {

  return (
    <nav className='navbar'>
      <a href="#" className="menuButton" id="menuButton">
        +
      </a>
      <a className="userButton" href="#" data-event='click' data-tip data-for="logout">{/*props.user.email*/}
      <ReactTooltip place="bottom" id="logout" clickable={true} effect="solid" isCapture='true'>
      <button className="logout" onClick={() => {
        console.log('sup')
        props.userLogout()}}><a className="logout" href="#">logout</a></button>
      </ReactTooltip>
      </a>
      </nav>
  )
}