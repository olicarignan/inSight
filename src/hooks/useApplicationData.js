import React, { useEffect, useReducer } from "react";
import axios from "axios";
import dataReducer, {
  SET_LOGOUT,
  SET_USER,
	SET_SHOW_CATEGORY,
	SET_ADD_CATEGORY,
	SET_ADD_APPOINTMENT,
	SET_CALENDAR_EVENTS,
  SET_TOGGLE,
  SET_DELETE_CATEGORY,
  SET_DELETE_NOTE
} from "../reducers/dataReducer";

export default function useApplicationData() {

	function showCategory(category) {
		dispatch({type: SET_SHOW_CATEGORY, showCategory: true})
	}

  function getAppointmentsForUser(user) {
    return axios.get("/api/appointments", user.id).then(res => {
    });
	}
	
	function addCategory(category, id) {
		
		return axios.post(`/api/categories/${id}`, category)
		            .then((res) => {
									if(res.data) {
										dispatch({type: SET_ADD_CATEGORY, category: res.data[0]})
									}
								})
	}

	function deleteCategory(category) {
		return axios.delete(`/api/categories/${state.user.id}/categories/${category.id}`)
                .then(res => {
                dispatch({type: SET_DELETE_CATEGORY, category_id: category.id})})
								.catch(error => {
                  throw new Error(error)})
  }
  
  function deleteNote(category_id, note_id) {
    return axios.delete(`/api/notes/${state.user.id}/categories/${category_id}/${note_id}`)
         .then(res => {
           dispatch({type: SET_DELETE_NOTE, note_id: note_id})
           })
  }

	function deleteAppointment(appointment_id) {
		return axios.delete(`/api/appointments/${state.user.id}/appointment/${appointment_id}`)
		            .then(res => {
								})
								.catch(error => {
                  throw new Error(error)})
	}


  function addAppointment(appointment) {

    return axios.post(`/api/appointments/${appointment.user_id}`, appointment).then(res => {
        dispatch({type: SET_ADD_APPOINTMENT, appointment: res.data[0]})
        const updatedAppointments = [...state.appointments]
        updatedAppointments.push(res.data[0])
        setCalendarEvents(updatedAppointments, state.categories)
    });
  }

  function userLogout() {
    dispatch({ type: SET_LOGOUT });
  }

  function userLogin(user) {

    return axios
      .post("/api/login", user)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: SET_USER,
            token: res.data.token,
            user: res.data.user,
            isAuthenticated: true,
            loading: false
          });
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  function addUser(user) {

    return axios.post("/api/register", { user }).then(res => {
      if (res.status === 200) {
        dispatch({
          type: SET_USER,
          token: res.data.token,
          user: res.data.newUser,
          isAuthenticated: true,
          loading: false
        });
      }
    });
  }

  const [state, dispatch] = useReducer(dataReducer, {
    categories: [],
    appointments: [],
    notes: [],
    user: {},
    users: {},
    token: "",
		isAuthenticated: false,
		showCategory: false,
		loading: true,
		calendarEvents: []
  });

  function authUser(token) {

    const config = {
      headers: { Authorization: "bearer " + token }
		};
		
    return axios.get("/api/authenticate", config).then(res => {
      if (res.data) {
        dispatch({
          type: SET_USER,
          token: token,
          user: res.data,
          isAuthenticated: true,
					loading: false
				});
				return res.data
      }
    });
	}

	function setToggle(category) {
    
    let filteredAppointments = state.appointments.filter(appointment => appointment.category_id === category.id)
                                                .map(appointment => {
                                                    appointment.toggle =  !appointment.toggle;
                                                    return appointment
                                                  })
    axios.put(`/api/appointments/${state.user.id}/category/${category.id}/toggle`, filteredAppointments)
         .then(res => setCalendarEvents(state.appointments, state.categories)).catch(e => {
           throw new Error(e))
	}}

	
	function setCalendarEvents(appointments, categories) {
		let calendarEvents = appointments.map(appointment => {
      let category = categories.filter(category => category.id === appointment.category_id)
      let colour;
      if (category[0].colour === 'red') {
        colour = '#FF727C'
      } else if ( category[0].colour === 'blue') {
        colour = '#71D0F2'
      } else if ( category[0].colour === 'yellow') {
        colour = '#FFDF60'
      } else if ( category[0].colour === 'purple') {
        colour = '#D88FD8'
      } else if ( category[0].colour === 'green') {
        colour = '#85E5B5'
      }
			if (appointment.toggle === true) {

				return {
          color: colour,
          location: appointment.location,
          small_note: appointment.appointment_small_note,
					category_name: appointment.category_name,
					id: appointment.id,
					title: appointment.appointment_name,
					start: new Date(appointment.start_date),
					end: new Date(appointment.end_date),
					groupId: appointment.category_id,
          toggle: appointment.toggle
				}
        } else {
          return {}
        }
      })
      dispatch({type:SET_CALENDAR_EVENTS, calendarEvents})
    }

  return {
    state,
    dispatch,
    addUser,
    userLogin,
    userLogout,
    addAppointment,
    getAppointmentsForUser,
		authUser,
		addCategory,
		showCategory,
		setCalendarEvents,
		setToggle,
		deleteAppointment,
    deleteCategory,
    deleteNote
  };
}
