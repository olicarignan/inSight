import React, { useState } from 'react';
import { EDITOR_JS_TOOLS } from './editor-tools.js';
import EditorJs from 'react-editor-js';
import Nav from '../nav/nav';
import Dante from 'Dante2';
import './newText.scss';
import './Editor.scss';
import styled from "tachyons-components";

export default function Editor(props) {
	console.log(props);

	const Container = styled("div")`
  mw6 mw7-ns center bg-light pa6 ph9-ns
`;

let saveHandler = (editorContext, content) => {
	console.log(editorContext, content)
	if (props.onChange) {
		props.onChange(content)
	}
}

	return (
		<main>
		<div classname="nav_div">
			<Nav note={props.note} user={props.user} navButton={props.navButton} />
		</div>
		<div className="text_editor_container">
			<form className="text-editor" onSubmit={(event) => event.preventDefault()}>
				<Container>
				<Dante
						body_placeholder={"hello"}
						data_storage={{
							save_handler: saveHandler,
							url: 'null'
						}}
						content={props.initContent ? props.initContent : false}
						read_only={props.read_only ? true : false}
				/>
				</Container>

				<button className="text-editor-button" onClick={() => console.log('save')}>
					{' '}
					Save{' '}
				</button>
				<button className="text-editor-button-delete btn-danger" onClick={() => console.log('delete')}>
					Delete
				</button>
			</form>
			</div>
		</main>
	);
}
