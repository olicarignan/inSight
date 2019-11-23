import React from "react";
import "./categoryListItem.scss";
import Toggle from "react-toggle";

export default function CategoryListItem(props) {
  return (
    <li>
      <span className="badge">
        <Toggle
          defaultChecked={console.log("checked")}
          icons={false}
          onChange={() => console.log("checked")}
        />
        <span
          className="categoryTitle"
          onClick={() => props.showCategory(props.name)}>
            {props.name}
        </span>
        <div class="test" onClick={() => console.log('toggle menu')}></div>
      </span>
    </li>
  );
}