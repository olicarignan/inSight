import React, {useReducer} from 'react';

export const SET_USERS = 'SET_USERS';


export default function dataReducer (state, action)  {

  const actions = {
    SET_USERS: { ... state,
    users: [ ...state.users, ... action.users],
    loading: false
  }
  }
  if (!actions[action.type]) {
    throw new Error(`reducer type doesn't exist`);
  }
  
  return actions[action.type]
}