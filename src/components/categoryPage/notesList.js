import React from "react";
import NotesListItem from './notesListItem';
import './notesList.scss';

export default function NotesList(props) {

  const notes = props.notes;

  console.log(notes)

  const notesList = notes.map( note => {
    return (
      <div>
      <NotesListItem className='noteslist'
      id={note.id}
      title={note.note_title}
      date={note.created_at}
      content={note.note_preview}
      />
      </div>
    )
  })
  return notesList;
}