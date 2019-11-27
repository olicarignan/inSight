import React from 'react';
import './nav.scss';
import ReactTooltip from 'react-tooltip'

export default function Nav (props) {

  return (
    <nav className='navbar'>
      <a href="#" className="menuButton" id="menuButton">
        +
      </a>
      <a className="userButton" href="#" data-event='click' data-tip data-for="logout">{props.users}
      <ReactTooltip place="bottom" id="logout" clickable={true} effect="solid">
      <button className="logout" onClick={() => console.log('logout')}><a className="logout" href="#">logout</a></button>
      </ReactTooltip>
      </a>
      </nav>
  )
}