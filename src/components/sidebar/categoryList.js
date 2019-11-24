import React from "react";
import CategoryListItem from "./categoryListItem";

export default function CategoryList(props) {
  
  const categories = props.categories;

  console.log(categories)
  
  const categoryList = categories.map( category => {
    return (
      <CategoryListItem
      key={category.id}
      name={category.category_name}
      colour={props.colour}
      showCategory={props.showCategory}
      />
    )
  })
  return categoryList
}