import React from "react";
import NotesListItem from './notesListItem';

export default function NotesList(props) {

  const notes = props.notes;

  console.log(notes)

  const notesList = notes.map( note => {
    return (
      <NotesListItem
      title={note.note_title}
      date={note.created_at}
      content={note.note_preview}
      />
    )
  })
  return notesList;
}