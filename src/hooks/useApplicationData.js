import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataReducer,{ SET_USERS } from '../reducers/dataReducer';

export default function useApplicationData () {

  const [state, dispatch] = useReducer(dataReducer, ({users: [], loading: true}));

  useEffect(() => {
    axios
      .get('/api/users')
      .then(result => { 
        dispatch({ type: SET_USERS, users: result.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return {
    state,
    dispatch
  }
}
