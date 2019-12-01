import React from 'react';
import './sidebar.scss';
import CategoryList from './categoryList';
import NewCategory from './newCategory/newCategory';

export default function SideBar (props) {

  return (
    <aside className="sidebar">
      <CategoryList
      deleteCategory={props.deleteCategory}
      categoryToggleState={props.categoryToggleState}
      appointments={props.appointments}
      showCategory={props.showCategory}
      categories={props.categories}
      setToggle={props.setToggle}
      />
      <NewCategory
      addCategory={props.addCategory}
      user={props.user} />
      </aside>
  )
}