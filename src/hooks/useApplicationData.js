import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataReducer,{ SET_APPLICATION_DATA, SET_USER_DATA } from '../reducers/dataReducer';

export default function useApplicationData () {
  function addUser(user) {
    return axios
      .put(`/api/users`, {user})
      .then(res => {
        dispatch({type: SET_USER_DATA, user})
      })
  }

  const [state, dispatch] = useReducer(dataReducer, ({users: [], categories: [], appointments: [], notes: [], loading: true}));

  useEffect(() => {
    
    const users = axios.get('/api/users');
    const categories = axios.get('/api/categories');
    const appointments = axios.get('/api/appointments');
    const notes = axios.get('/api/notes');
    

    Promise.all([users, categories, appointments, notes])
           .then(all => {
             dispatch({
               type: SET_APPLICATION_DATA,
               users: all[0].data,
               categories: all[1].data,
               appointments: all[2].data,
               notes: all[3].data

              })
            })
          }, []);
          
          return {
    state,
    dispatch,
    addUser
  }
}
