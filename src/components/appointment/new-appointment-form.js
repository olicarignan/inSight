import React, {useState} from 'react'
import EditorJS from '@editorjs/editorjs';
import './new-appointment-form.scss'
import {Button, Model} from 'react-bootstrap';

export default function NewAppointment(props) {

  const [start_date, setStartDate] = useState(0)
  const [start_time, setStartTime] = useState(0)
  const [end_date, setEndDate] = useState(0)
  const [end_time, setEndTime] = useState(0)
  const [appointment_name, setAppointmentName] = useState('')
  const [appointmentCategory, setAppointmentCategory] = useState('')
  const [location, setAppointmentLocation] = useState('')
  const [category_name, setCategoryName] = useState('')
  const [colour, setColour] = useState('')
  const [category_id, setCategoryId] = useState('')
  // const user_id;

  function newAppointment(event){
    event.preventDefault()

    if(start_date && end_date) {
      const category = {
        category_name,
        colour,
        user_id: user.id
      }
      const appointment = {
        start_date,
        start_time,
        end_date,
        end_time,
        appointment_name,
        category_id,
        location
      }
      return (appointment, category)
    }
  }

  
  return(
    <body>
        <div className="container">
                <div className="card-body">
                  <h5 className="card-title text-center">New Appointment</h5>
                  <form className="form-register" onSubmit={(event) => newAppointment(event)}>
                  <div className="form-label-group">
                      <input value={start_date}
                      onChange={(event) => {setStartDate(event.target.value)}}
                      type="date" id="inputStartDate" className="form-control start-date" placeholder="Start Date" required autofocus/>
                      <label for="inputStartDate">Start Date</label>
                    </div>
                    <div className="form-label-group">
                      <input value={start_time}
                      onChange={(event) => {setStartTime(event.target.value)}}
                      type="time" id="inputStartTime" className="form-control start-time" placeholder="Start Time" required autofocus/>
                      <label for="inputStartTime">Start Time</label>
                    </div>
                    <hr className="my-4"/>
                  <div className="form-label-group">
                      <input value={end_date}
                      onChange={(event) => {setEndDate(event.target.value)}}
                      type="date" id="inputEndDate" className="form-control end-date" placeholder="End Date" required autofocus/>
                      <label for="inputEndDate">End Date</label>
                    </div>
                    <div className="form-label-group">
                      <input value={end_time}
                      onChange={(event) => {setEndTime(event.target.value)}}
                      type="time" id="inputEndTime" className="form-control end-time" placeholder="End Time" required autofocus/>
                      <label for="inputEndtTime">End Time</label>
                    </div>
                    <hr className="my-4"/>
                    <div className="form-label-group">
                      <input value={appointment_name}
                      onChange={(event) => {setAppointmentName(event.target.value)}}
                      type="text" id="inputAppointmentTitle" className="form-control appointment-tittle" placeholder="Title" required autofocus/>
                      <label for="inputAppointmentTitle">Title</label>
                    </div>
                    <div className="form-label-group">
                      <input value={category_name}
                      onChange={(event) => {setAppointmentCategory(event.target.value)}}
                      type="text" id="inputAppointmentCategory" className="form-control appointment-category" placeholder="Category" required autofocus/>
                      <label for="inputAppointmentCategory">Category</label>
                    </div>
                    <div className="form-label-group">
                      <input value={location}
                      onChange={(event) => {setAppointmentLocation(event.target.value)}}
                      type="text" id="inputNotes" className="form-control appointment-note" placeholder="Notes"/>
                      <label for="inputNotes">Notes</label>
                    </div>
                    <hr className="my-4"/>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Save Appointment</button>
                    <button className="btn btn-lg btn-danger btn-block text-uppercase" type="submit">Cancel</button>
                  </form>
                </div>
              </div>
      </body>
  )
}