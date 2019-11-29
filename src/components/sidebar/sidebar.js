import React from 'react';
import './sidebar.scss';
import CategoryList from './categoryList';
import NewCategory from './newCategory/newCategory';

export default function SideBar (props) {

  return (
    <aside className="sidebar">
      <CategoryList
      showCategory={props.showCategory}
      categories={props.categories}
      />
      <NewCategory
      addCategory={props.addCategory}
      user={props.user} />
      </aside>
  )
}