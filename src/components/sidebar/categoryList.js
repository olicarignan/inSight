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
  const toggleArray = props.categoryToggleState
    
  const categoryList = categories.map( category => {
    let toggleFilter = toggleArray.filter(element => {

      if(element[category.id] !== undefined) {
        category.toggle = element[category.id]
      }
    })

    console.log(category)
    return (
      <CategoryListItem
      appointments={props.appointments}
      showCategory={props.showCategory}
      key={category.id}
      category={category}
      name={category.category_name}
      colour={props.colour}
      notes={props.notes}
      setToggle={props.setToggle}
      toggle={category.toggle}
      />
    )
  })
  return categoryList
}