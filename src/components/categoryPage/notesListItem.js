import React from "react";
import './notesListItem.scss'; 
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import Axios from "axios";

export default function NotesListItem(props) {
  console.log(props)
  let [year, month, day] = props.date.split('-')
  day = day.slice(0, 2);

  return (
    <main className="note_card" onClick={console.log('open note')}>
    <section className="left-side__card"> 
    <h2>
      <Link className='title' to={`/notes/note/${props.id}`}>{props.title}</Link>
    </h2>
    <p>{props.content}</p>
    </section>
    <section className="right-side__card">
      <h4>{`${day}/${month}/${year}`}</h4>
      <div className="icons">
      <img
      className="delete_button"
      src="/trash-solid.svg"
      alt="delete" 
      onClick={() => {
        props.deleteNote(props.note.category_id, props.id)
      }}
      ></img>
      </div>
    </section>
    </main>
  )
}