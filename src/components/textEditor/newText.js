import React, {useState} from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './editor-tools.js'

import "./newText.scss"


export default function Editor(props) {
  const  [ text, setText ] = useState(" ")

  return(
    <form className="text-editor" onSubmit={(event) => event.preventDefault() }>
      <EditorJs tools={ EDITOR_JS_TOOLS } data={props.data} value={text} >

      </EditorJs>
      <button className="text-editor-button" onClick={() => console.log("save")}> Save </button>
      <button className="text-editor-button-delete btn-danger" onClick={() => console.log("delete")} >Delete</button>
    </form>
  )
}