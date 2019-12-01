
import React, { useState } from 'react';
import { EDITOR_JS_TOOLS } from './editor-tools.js';
import EditorJs from 'react-editor-js';
import Nav from '../nav/nav';
import Dante from 'Dante2';
import './newText.scss';

export default function Editor(props) {

  if (props.note) {
    props.setNavButton('back to notes')
  } else {
    props.setNavButton('back to category')
  }

  console.log(props)

  return(
    <main>
    <Nav
    category={props.category}
    note={props.note}
    user={props.user}
    navButton={props.navButton}
    />
    <form className="text-editor" onSubmit={(event) => event.preventDefault() }>
    
    <Dante content={null}  />
     
      <button className="text-editor-button" onClick={() => console.log("save")}> Save </button>
      <button className="text-editor-button-delete btn-danger" onClick={() => console.log("delete")} >Delete</button>
    </form>
    </main>
  )
}

