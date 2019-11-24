import React, {useReducer} from 'react';

export const SET_USERS = 'SET_USERS';
export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';


export default function dataReducer (state, action)  {

  const { users, categories } = action;

  const actions = {
    SET_APPLICATION_DATA: { ... state,
      users: [ ...state.users, ...action.users],
      categories: [ ...state.categories, ...action.categories],
      loading: false
    }
  }
  if (!actions[action.type]) {
    throw new Error(`reducer type doesn't exist`);
  }
  
  return actions[action.type]
}