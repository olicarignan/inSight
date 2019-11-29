import React, { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import './new-appointment-form.scss';
import { Button, Modal } from 'react-bootstrap';

export default function NewAppointment(props) {
	const [ start_date, setStart_date ] = useState(0);
	const [ start_time, setstart_time ] = useState(0);
	const [ end_date, setend_date ] = useState(0);
	const [ end_time, setend_time ] = useState(0);
	const [ appointment_name, setappointment_name ] = useState('');
	const [ appointment_category, setappointment_category ] = useState('');
	const [ location, setAppointmentLocation ] = useState('');
	const [ category_name, setCategoryName ] = useState('');
	const [ colour, setColour ] = useState('');
	const [ category_id, setCategoryId ] = useState('');
	const [ appointment_small_note, setappointment_small_note ] = useState('');
	const [ user_id, setUserId ] = useState('');

	function newAppointment(event) {
		event.preventDefault();

		if (start_date) {
			const category = {
				category_name,
				colour,
				user_id
			};
			const appointment = {
				start_date,
				start_time,
				end_date,
				end_time,
				appointment_name,
				category_id,
				location,
        user_id: props.user_id,
        appointment_small_note
			};
			return props
			.addAppointment(appointment)
			.then((res) => {
				console.log('it worked new appointment form', res);
			});
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
                      onChange={(event) => {setStart_date(event.target.value)}}
                      type="date" id="inputStartDate" className="form-control start-date" placeholder="Start Date" required autofocus/>
                      <label for="inputStartDate">Start Date</label>
                    </div>
                    <div className="form-label-group">
                      <input value={start_time}
                      onChange={(event) => {setstart_time(event.target.value)}}
                      type="time" id="inputStartTime" className="form-control start-time" placeholder="Start Time" required autofocus/>
                      <label for="inputStartTime">Start Time</label>
                    </div>
                    <hr className="my-4"/>
                  <div className="form-label-group">
                      <input value={end_date}
                      onChange={(event) => {setend_date(event.target.value)}}
                      type="date" id="inputEndDate" className="form-control end-date" placeholder="End Date" required autofocus/>
                      <label for="inputEndDate">End Date</label>
                    </div>
                    <div className="form-label-group">
                      <input value={end_time}
                      onChange={(event) => {setend_time(event.target.value)}}
                      type="time" id="inputEndTime" className="form-control end-time" placeholder="End Time" required autofocus/>
                      <label for="inputEndtTime">End Time</label>
                    </div>
                    <hr className="my-4"/>
                    <div className="form-label-group">
                      <input value={appointment_name}
                      onChange={(event) => {setappointment_name(event.target.value)}}
                      type="text" id="inputAppointmentTitle" className="form-control appointment-tittle" placeholder="Title" required autofocus/>
                      <label for="inputAppointmentTitle">Title</label>
                    </div>
                    {/* <div className="form-label-group">
                      <input value={category_name}
                      onChange={(event) => {setappointment_category(event.target.value)}}
                      type="text" id="inputappointment_category" className="form-control appointment-category" placeholder="C autofocus/>
                      <label for="inputappointment_category">Category</label>
                    </div> */}
						<div className="form-label-group">
							<input
								value={location}
								onChange={(event) => {
									setAppointmentLocation(event.target.value);
								}}
								type="text"
								id="inputLocation"
								className="form-control appointment-location"
								placeholder="Notes"
							/>
							<label for="inputLocation">Location</label>
						</div>
						<div className="form-label-group">
							<input
								value={appointment_small_note}
								onChange={(event) => {
									setappointment_small_note(event.target.value);
								}}
								type="text"
								id="inputNotes"
								className="form-control appointment-note"
								placeholder="Notes"
							/>
							<label for="inputNotes">Little Note</label>
						</div>
						<div className="form-label-group">
							<input
								value={category_id}
								onChange={(event) => {
									setCategoryId(event.target.value);
								}}
								type="text"
								id="category_id"
								className="form-control category-id"
								placeholder="Notes"
							/>
							<label for="category_id">Category id</label>
						</div>
						{/* <div className="form-label-group">
							<input
								value={user_id}
								onChange={(event) => {
									setUserId(event.target.value);
								}}
								type="text"
								id="user_id"
								className="form-control user-id"
								placeholder="Notes"
							/>
							<label for="user_id">User id</label>
						</div> */}
						<hr className="my-4" />
						<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
							Save Appointment
						</button>
						<button
							className="btn btn-lg btn-danger btn-block text-uppercase"
							onClick={() => props.setShow(false)}
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</body>
	);
          }
