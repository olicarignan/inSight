import React, { useEffect, useReducer } from "react";
import axios from "axios";
import dataReducer, {
  SET_LOGOUT,
  SET_USER,
	SET_SHOW_CATEGORY,
	SET_ADD_CATEGORY,
	SET_ADD_APPOINTMENT,
	SET_CALENDAR_EVENTS,
	SET_TOGGLE
} from "../reducers/dataReducer";

export default function useApplicationData() {

	function showCategory(category) {
		dispatch({type: SET_SHOW_CATEGORY, showCategory: true})
	}

  function getAppointmentsForUser(user) {
    return axios.get("/api/appointments", user.id).then(res => {
      console.log(res);
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


  function addAppointment(event) {

		console.log(event.user_id)
    return axios.post(`/api/appointments/${event.user_id}`, event).then(res => {
      console.log(res.data);
      if (res.data) {
        dispatch({type: SET_ADD_APPOINTMENT, appointment: res.data[0]})
      }
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
        console.log(err, "err");
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
      } else {
        console.log("something wrong");
      }
    });
	}

	function setToggle(category) {
		axios.get((`/api/appointments/${state.user.id}/category/${category.id}`)).then(res => {
			let toggleTrue = res.data.filter(appointment => {
				if(appointment.toggle === true) {
					axios.put(`/api/appointments/${state.user.id}/category/${category.id}/true`)
							 .then((res) => {
								 let appointment = res.data
								 let calendarEvents = state.calendarEvents
								 dispatch({type:SET_TOGGLE, appointment, calendarEvents})
							 })
							 .catch(e => {console.log(e)})
				} else {
					axios.put(`/api/appointments/${state.user.id}/category/${category.id}/false`)
							 .then((res) => {
								 let appointment = res.data
								 let calendarEvents = state.calendarEvents
								 dispatch({type: SET_TOGGLE, appointment, calendarEvents})
							 })
							 .catch(e => {console.log(e)})
				}
			})
		}).then(setCalendarEvents(state.appointments))
	}

	
	function setCalendarEvents(appointments) {
		let calendarEvents = appointments.map(appointment => {
			if (appointment.toggle === true) {
				console.log(appointment)
				return {
					id: appointment.id,
					title: appointment.appointment_name,
					start: new Date(appointment.start_date),
					end: new Date(appointment.end_date),
					allDay: appointment.allDay,
					groupId: appointment.category_id,
					toggle: appointment.toggle
				} 
				} else {
					return {};
				}
			})
			dispatch({type:SET_CALENDAR_EVENTS, calendarEvents})
		}

  // useEffect(() => {

  //   //console.log(state);
  //   const categories = axios.get("/api/categories");
  //   const appointments = axios.get("/api/appointments");
  //   const notes = axios.get("/api/notes");

  //   Promise.all([categories, appointments, notes]).then(all => {
  //     dispatch({
  //       type: SET_APPLICATION_DATA,
  //       categories: all[0].data,
  //       appointments: all[1].data,
  //       notes: all[2].data
	// 		});
  //   });
  // }, []);

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
		setToggle
  };
}
