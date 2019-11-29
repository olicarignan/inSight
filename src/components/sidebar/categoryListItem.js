import React, { useState } from "react";
import "./categoryListItem.scss";
import Toggle from "react-toggle";
import ReactTooltip from 'react-tooltip'
import NotesList from '../categoryPage/NotesList';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";


export default function CategoryListItem(props) {

  return (
    
      <span className="badge">
        <Toggle
          defaultChecked={console.log("checked")}
          icons={false}
          onChange={() => console.log("checked")}
        />
        {/* <span
          className="categoryTitle"
          onClick={() => props.showCategory(props.name)}>
            {props.name}
        </span> */}
        <Link to={`/${props.name}`} >{props.name}</Link>
        <div className="test" data-event='click' data-tip data-for="clickme" onClick={() => console.log('toggle menu')}>
        <ReactTooltip place="right" id='clickme' clickable={true} effect="solid" isCapture={true}>
          <button><a href="#">edit</a></button>
          <button><a href="#">delete</a></button>
          </ReactTooltip>
        </div>
      </span>
    
  );
}