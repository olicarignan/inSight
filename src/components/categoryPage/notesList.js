import React from "react";
import NotesListItem from './notesListItem';
import Nav from '../nav/nav';
import './notesList.scss';

export default function NotesList(props) {

  const notes = props.notes;

  console.log(notes)

  const notesList = notes.map( note => {
    return (
      <main>
        <Nav 
        user={props.user}/>
      <NotesListItem
      title={note.note_title}
      date={note.created_at}
      content={note.note_preview}
      />
      </main>
    )
  })
  return notesList;
}