import React, {useReducer} from 'react';

export const SET_USER = 'SET_USER';
export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';


export default function dataReducer (state, action)  {

  const { users, categories, appointments, notes } = action;

  // switch(action.type) {
  //   case SET_APPLICATION_DATA :
  //     return ;
  //   case SET_USER :
  //     return ;
  // }

  const actions = {
    SET_APPLICATION_DATA: { ... state,
      users: [ ...state.users, ...action.users],
      categories: [ ...state.categories, ...action.categories],
      appointments: [...state.appointments, ...action.appointments],
      notes: [...state.notes, ...action.notes],
      loading: false
    }
  }
  if (!actions[action.type]) {
    throw new Error(`reducer type doesn't exist: ${action.type}`);
  }
  
  return actions[action.type]
}