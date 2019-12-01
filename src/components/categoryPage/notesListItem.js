import React from "react";
import './notesListItem.scss'; 
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

export default function NotesListItem(props) {
  console.log(props)
  return (
    <main className="note_card" onClick={console.log('open note')}>
    <section className="left-side__card"> 
    <h2>
      <Link to={`/notes/${props.id}`}>{props.title}</Link>
    </h2>
    <p>{props.content}</p>
    </section>
    <section className="right-side__card">
      <h4>{props.date}</h4>
      <div className="icons">
      <img
      className="edit_button"
      src="/edit-solid.svg"
      alt="edit"
      onClick={() => console.log('edit')}
      ></img>
      <img
      className="edit_button"
      src="/trash-solid.svg"
      alt="delete" 
      onClick={() => console.log('delete')}
      ></img>
      </div>
    </section>
    </main>
  )
}