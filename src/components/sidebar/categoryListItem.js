import React from "react";
import "./categoryListItem.scss";
import Toggle from "react-toggle";
import ReactTooltip from 'react-tooltip'


export default function CategoryListItem(props) {
  return (
    
      <span className="badge">
        <Toggle
          defaultChecked={console.log("checked")}
          icons={false}
          onChange={() => console.log("checked")}
        />
        <span
          className="categoryTitle"
          onClick={() => props.showCategory()}>
            {props.name}
        </span>
        <div className="test" data-event='click' data-tip data-for="clickme" onClick={() => console.log('toggle menu')}>
        <ReactTooltip place="right" id='clickme' clickable={true} effect="solid" isCapture={true}>
          <button><a href="#">edit</a></button>
          <button><a href="#">delete</a></button>
          </ReactTooltip>
        </div>
      </span>
    
  );
}