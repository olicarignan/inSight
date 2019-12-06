import React, { useState } from "react";
import "./categoryListItem.scss";
import Toggle from "react-toggle";
import ReactTooltip from 'react-tooltip'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";


export default function CategoryListItem(props) {

  // const [toggle, setToggle] = useState(true)
  return (
      <span className="badge" id={props.colour}>
        <Toggle
        defaultChecked={props.toggle}
          onChange={function(e) {if(e.target.checked) {
            props.setToggle(props.category)
          } else {
            props.setToggle(props.category)
          }}}
          icons={false}
        />
        {/* <span
          className="categoryTitle"
          onClick={() => props.showCategory(props.name)}>
            {props.name}
        </span> */}
        <Link to={`/categories/${props.category.id}`} className='categoryTitle'>{props.name}</Link>
        <div className="test" data-event='click' data-tip data-for={props.category.id.toString()}>
        <ReactTooltip place="right" id={props.category.id.toString()} clickable={true} effect="solid" isCapture={true}>
          <button >edit</button>
          <button onClick={() => {
                        props.deleteCategory(props.category)}}>delete</button>
          </ReactTooltip>
        </div>
      </span>
    
  );
}