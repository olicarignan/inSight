import React, { useState, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './editor-tools.js';
import EditorJs from 'react-editor-js';
import Nav from '../nav/nav';
import Dante from 'Dante2';
import './newText.scss';
import './Editor.scss';
import styled from "tachyons-components";
import axios from 'axios';

export default function Editor(props) {
	console.log(props);


	const Container = styled("div")`
  mw6 mw7-ns center bg-light pa6 ph9-ns
`;

  useEffect(() => {
    axios.get(`/api/notes/${props.user.id}/category/${props.category_id}`)
       .then(() => {
         console.log('got it')
       })

  }, [])


  let saveHandler = (editorContext, content) => {
    console.log(content, editorContext)
    axios.post(`/api/notes/${props.user.id}/category/${props.category_id}`, editorContext.editorContent)
              .then(res => {
                console.log('saved')
              })
  
  }
  
  
  if (props.note) {
    props.setNavButton('back to notes')
  }

	return (
		<main>
		<div classname="nav_div">
			<Nav note={props.note} user={props.user} navButton={props.navButton} />
		</div>
		<div className="text_editor_container">
				<Container>
				<Dante
						data_storage={{
              interval: 500,
							save_handler: saveHandler,
							url: 'null'
						}}
						content={props.note ? props.note.note_content : ''}
						read_only={false}
						body_placeholder={'Do what you will'}
				/>
				</Container>
			</div>
		</main>
	);
}
