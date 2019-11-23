import React from 'react';
import './categoryListItem.scss';

export default function CategoryListItem(props) {
  
  return (
    <li>
      <h2 className="text--regular text-wrap" onClick={() => props.showCategory(props.name)}>{props.name}</h2>
    </li>
  )
}