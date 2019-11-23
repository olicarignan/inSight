import React from "react";
import CategoryListItem from "./categoryListItem";

export default function CategoryList(props) {
  
  const categories = props.categories;
  
  const categoryList = categories.map( category => {
    return (
      <CategoryListItem
      name={category.name}
      colour={props.colour}
      showCategory={props.showCategory}
      />
    )
  })
  return categoryList
}