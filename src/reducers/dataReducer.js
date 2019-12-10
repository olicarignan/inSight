import React, {useReducer} from 'react';

export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_USER = 'SET_USER';
export const SET_SHOW_CATEGORY = 'SET_SHOW_CATEGORY'
export const SET_CALENDAR_EVENTS = 'SET_CALENDAR_EVENTS';
export const SET_ADD_CATEGORY = 'SET_ADD_CATEGORY';
export const SET_ADD_APPOINTMENT = 'SET_ADD_APPOINTMENT';
export const SET_TOGGLE = 'SET_TOGGLE';
export const SET_DELETE_CATEGORY = 'SET_DELETE_CATEGORY';
export const SET_DELETE_NOTE = 'SET_DELETE_NOTE';


export default function dataReducer (state, action)  {


  switch (action.type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        categories: [...action.categories],
        appointments: [...action.appointments],
        notes: [...action.notes],
      };
      case SET_ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.category]
        };
      case SET_ADD_APPOINTMENT:
        return {
          ...state,
          appointments: [...state.appointments, action.appointment]
        }
    case SET_LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false
      };
    case SET_USER:
        localStorage.setItem('token', action.token);
      return {
        ...state,
        token: action.token,
        user: action.user,
        isAuthenticated: true,
        loading: false
      };
    case SET_SHOW_CATEGORY:
      return {
        ...state,
        showCategory: true
      }
    case SET_CALENDAR_EVENTS:

      return {
        ...state,
        calendarEvents: [...action.calendarEvents]
      }
    // case SET_TOGGLE: {
      
    //   return {
    //     ...state,
    //     appointments: stateAppointments
    //   }
    // }
    case SET_DELETE_CATEGORY: {

      const updatedCategories = state.categories.filter(category => category.id !== action.category_id)

      return {
        ...state,
        categories: updatedCategories
      }
    }
    case SET_DELETE_NOTE: {

      const updatedNotes = state.notes.filter(note => note.id !== action.note_id)

      return {
        ...state,
        notes: updatedNotes
      }
    }
    default:
      console.log("Unkown type in reducer");
      return state;
  }
}