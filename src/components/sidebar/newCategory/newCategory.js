import React, { useState } from "react";
import Button from './Button';
import "./newCategory.scss";
import {Dropdown} from 'react-bootstrap';

export default function NewCategory(props) {


  const [ colour, setColour ] = useState('pick a colour');
  const [categoryName, setCategoryName] = useState("");
  const [formState, setFormState] = useState('')

  const colourOptions = props.colours.map(colour => {
    if (colour === 'red') {
      return (
        <Dropdown.Item onClick={() => {
          setColour(colour)
        }} className="colour_picker_red">{colour}</Dropdown.Item>
      )

    } else if ( colour === 'blue') {
      return (
        <Dropdown.Item onClick={() => {
          setColour(colour)
        }} className="colour_picker_blue">{colour}</Dropdown.Item>
      )
    } else if ( colour === 'yellow') {
      return (
        <Dropdown.Item onClick={() => {
          setColour(colour)
        }} className="colour_picker_yellow">{colour}</Dropdown.Item>
      )
    } else if ( colour === 'purple') {
      return (
        <Dropdown.Item onClick={() => {
          setColour(colour)
        }} className="colour_picker_purple">{colour}</Dropdown.Item>
      )
    } else if ( colour === 'green') {
      return (
        <Dropdown.Item onClick={() => {
          setColour(colour)
        }} className="colour_picker_green">{colour}</Dropdown.Item>
      )
    }
  })

  return (
    <div className="newCategory" id={formState}>
      <form className="newCategoryForm" onSubmit={event => {event.preventDefault() 
            setFormState('')
            const category = {
              category_name: categoryName,
              user_id: props.user.id,
              colour: colour
            }
            if (category.category_name && category.colour) {
              props.addCategory(category, props.user.id)
              setCategoryName('')
            } else {
              setCategoryName('invalid category')
            }
            }} autoComplete="off">
          <input
          onClick={() => setFormState('opened')}
            className="category__create-input text--semi-bold"
            categoryName = "categoryName"
            type="text"
            value={categoryName}
            placeholder="New Category"
            onChange={event => setCategoryName(event.target.value)}
            data-testid="category-name-input"
          />
          <div className='dropdown-wrapper'>
          <Dropdown className='dropdown'>
             <Dropdown.Toggle variant="success" id="dropdown-basic">
               {colour}
             </Dropdown.Toggle>
           
             <Dropdown.Menu className='dropdown'>
							 {colourOptions}
             </Dropdown.Menu>
						 
           </Dropdown>
           </div>
           <div className='button-wrapper'>
          <Button className="category__actions" onClick={() => setCategoryName('')} action='none'>
            Cancel
          </Button>
          <Button className="category__actions" action='submit'>
            Save
          </Button>
          </div>
        </form>
      </div>
  )
}