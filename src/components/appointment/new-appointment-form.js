import React, { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import './new-appointment-form.scss';
import { Button, Modal } from 'react-bootstrap';

export default function NewAppointment(props) {
	const [ startDate, setStartDate ] = useState(0);
	const [ startTime, setStartTime ] = useState(0);
	const [ endDate, setEndDate ] = useState(0);
	const [ endTime, setEndTime ] = useState(0);
	const [ appointmentName, setAppointmentName ] = useState('');
	const [ appointmentCategory, setAppointmentCategory ] = useState('');
	const [ location, setAppointmentLocation ] = useState('');
	const [ category_name, setCategoryName ] = useState('');
	const [ colour, setColour ] = useState('');
	const [ category_id, setCategoryId ] = useState('');
	const [ appointmentSmallNote, setAppointmentSmallNote ] = useState('');
	const [ user_id, setUserId ] = useState('');

	function newAppointment(event) {
		event.preventDefault();

		if (startDate && endDate) {
			const category = {
				category_name,
				colour,
				user_id
			};
			const appointment = {
				startDate,
				startTime,
				endDate,
				endTime,
				appointmentName,
				category_id,
				location,
				user_id
			};
			return props.addAppointment(appointment).then((res) => {
				console.log('it worked new appointment form', res);
			});
		}
	}

	return (
		<body>
			<div className="container">
				<div className="card-body">
					<h5 className="card-title text-center">New Appointment</h5>
					<form
						className="form-register"
						onSubmit={(event) => {
							newAppointment(event);
							props.setEventState({
								// add new event data
								calendarEvents: props.eventState.calendarEvents.concat({
									// creates a new array
									title: appointmentName,
									start: startDate
								})
							});
						}}
					>
						<div className="form-label-group">
							<input
								value={startDate}
								onChange={(event) => {
									setStartDate(event.target.value);
								}}
								type="date"
								id="inputStartDate"
								className="form-control start-date"
								placeholder="Start Date"
								required
								autofocus
							/>
							<label for="inputStartDate">Start Date</label>
						</div>
						<div className="form-label-group">
							<input
								value={startTime}
								onChange={(event) => {
									setStartTime(event.target.value);
								}}
								type="time"
								id="inputStartTime"
								className="form-control start-time"
								placeholder="Start Time"
								required
								autofocus
							/>
							<label for="inputStartTime">Start Time</label>
						</div>
						<hr className="my-4" />
						<div className="form-label-group">
							<input
								value={endDate}
								onChange={(event) => {
									setEndDate(event.target.value);
								}}
								type="date"
								id="inputEndDate"
								className="form-control end-date"
								placeholder="End Date"
								required
								autofocus
							/>
							<label for="inputEndDate">End Date</label>
						</div>
						<div className="form-label-group">
							<input
								value={endTime}
								onChange={(event) => {
									setEndTime(event.target.value);
								}}
								type="time"
								id="inputEndTime"
								className="form-control end-time"
								placeholder="End Time"
								required
								autofocus
							/>
							<label for="inputEndtTime">End Time</label>
						</div>
						<hr className="my-4" />
						<div className="form-label-group">
							<input
								value={appointmentName}
								onChange={(event) => {
									setAppointmentName(event.target.value);
								}}
								type="text"
								id="inputAppointmentTitle"
								className="form-control appointment-tittle"
								placeholder="Title"
								required
								autofocus
							/>
							<label for="inputAppointmentTitle">Title</label>
						</div>
						{/* <div className="form-label-group">
                      <input value={category_name}
                      onChange={(event) => {setAppointmentCategory(event.target.value)}}
                      type="text" id="inputAppointmentCategory" className="form-control appointment-category" placeholder="Category" required autofocus/>
                      <label for="inputAppointmentCategory">Category</label>
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
								value={appointmentSmallNote}
								onChange={(event) => {
									setAppointmentSmallNote(event.target.value);
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
						<div className="form-label-group">
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
						</div>
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
