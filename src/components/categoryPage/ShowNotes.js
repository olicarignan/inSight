import React from 'react';
import Nav from '../nav/nav';
import NotesList from './notesList'
import './ShowNotes.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function ShowNotes (props) {


  props.setNavButton('back to main')


  return (
      <body>
        <nav>
       <Nav className='nav'
        navButton={props.navButton}
        user={props.user}/>
        </nav>
            <body className='page'>
        <Link to={`/categories/${props.category.id}/new`}>
         <img className="notes__add-button"
              src="/plus.svg"
              alt="Add Note"/></Link>
        <main className='layout'>
        <NotesList className="notes_list"
        category={props.category}
        deleteNote={props.deleteNote}
        user={props.user} 
        notes={props.notes} />
        </main>
        </body>
        </body>
  )
}