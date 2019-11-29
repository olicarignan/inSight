import React, { useState } from "react";
import Button from './Button';
import "./newCategory.scss";

export default function NewCategory(props) {

  const [categoryName, setCategoryName] = useState(props.categoryName || "");

  return (
    <div className="newCategory">
      <form className="newCategoryForm" onSubmit={event => {event.preventDefault() 
            const category = {
              category_name: categoryName,
              user_id: props.user.id,
              colour: 'red'
            }
            props.addCategory(category, props.user.id)
            setCategoryName('')
            }} autoComplete="off">
          <input
            className="category__create-input text--semi-bold"
            categoryName = "categoryName"
            type="text"
            value={categoryName}
            placeholder="New Category"
            onChange={event => setCategoryName(event.target.value)}
            data-testid="category-name-input"
          />
          <Button className="category__actions" onClick={() => {console.log('save')}} danger>
            Cancel
          </Button>
          <Button className="category__actions" action='submit' confirm>
            Save
          </Button>
        </form>
      </div>
  )
}