import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataReducer,{ SET_APPLICATION_DATA } from '../reducers/dataReducer';

export default function useApplicationData () {

  const [state, dispatch] = useReducer(dataReducer, ({users: [], categories: [], loading: true}));

  useEffect(() => {
    
    const users = axios.get('/api/users');
    const categories = axios.get('/api/categories');

    Promise.all([users, categories])
           .then(all => {
             dispatch({
               type: SET_APPLICATION_DATA,
               users: all[0].data,
               categories: all[1].data
             })
           })
          }, []);

  return {
    state,
    dispatch
  }
}
