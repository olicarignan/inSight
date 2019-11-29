import React from "react";
import CategoryListItem from "./categoryListItem";
import NotesList from '../categoryPage/NotesList';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";


export default function CategoryList(props) {
  
  const categories =props.categories;
    
  const categoryList = categories.map( category => {
    return (
      <CategoryListItem
      showCategory={props.showCategory}
      key={category.id}
      name={category.category_name}
      colour={props.colour}
      notes={props.notes}
      />
    )
  })
  return categoryList
}