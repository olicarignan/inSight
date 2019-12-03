import React from 'react';
import './sidebar.scss';
import CategoryList from './categoryList';
import NewCategory from './newCategory/newCategory';

export default function SideBar (props) {

  console.log(props)

  return (
    <aside className="sidebar">
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