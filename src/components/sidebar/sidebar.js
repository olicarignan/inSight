import React from 'react';
import './sidebar.scss';
import CategoryList from './categoryList';
import NewCategory from './newCategory/newCategory';

export default function SideBar (props) {


  return (
    <aside className="sidebar">
      <h2 className="planner">Planner</h2>
      <CategoryList
      className='category_list'
      deleteCategory={props.deleteCategory}
      categoryToggleState={props.categoryToggleState}
      appointments={props.appointments}
      showCategory={props.showCategory}
      categories={props.categories}
      setToggle={props.setToggle}
      />
      <NewCategory
      colours={props.colours}
      addCategory={props.addCategory}
      user={props.user} />
      </aside>
  )
}