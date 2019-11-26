import React from "react";
import NotesListItem from './notesListItem';

export default function NotesList(props) {

  const notes = props.notes;

  const notesList = notes.map( note => {
    return (
      <NotesListItem
      title={note.title}
      date={note.date}
      content={note.content}
      />
    )
  })
  return notesList;
}