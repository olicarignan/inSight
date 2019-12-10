import React from "react";
import NotesListItem from './notesListItem';
import './notesList.scss';

export default function NotesList(props) {

  const notes = props.notes;


  const notesList = notes.map( note => {
    if (note.category_id === props.category.id) {
      return (
        <div>
        <NotesListItem className='noteslist'
        category={props.category}
        deleteNote={props.deleteNote}
        note={note}
        id={note.id}
        title={note.note_title}
        date={note.created_at}
        content={note.note_preview}
        />
        </div>
      )

    }
  })
  return notesList;
}