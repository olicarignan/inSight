import React from "react";
import NotesListItem from './notesListItem';
import './notesList.scss';

export default function NotesList(props) {

  const notes = props.notes;

  console.log(notes)

  const notesList = notes.map( note => {
    return (
      <main>
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