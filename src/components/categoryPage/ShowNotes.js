import React from 'react';
import Nav from '../nav/nav';
import NotesList from './NotesList';
import './ShowNotes.scss';

export default function ShowNotes (props) {

  console.log(props)
  props.setNavButton('back to main')

  return (
      <body>
        <nav>
       <Nav className='nav'
        navButton={props.navButton}
        user={props.user}/>
        </nav>
            <body className='page'>
        <main className='layout'>
        <img className="notes__add-button"
               src="/plus.svg"
               alt="Add Note"/>
        <NotesList className="notes_list"
        user={props.user} 
        notes={props.notes} />
        </main>
        </body>
        </body>
  )
}