import React, { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import './new-appointment-form.scss';
import { Button, Modal } from 'react-bootstrap';

export default function NewAppointment(props) {
	const [ startDate, setStartDate ] = useState(0);
	const [ startTime, setStartTime ] = useState(0);
	const [ endDate, setEndDate ] = useState(0);
	const [ endTime, setEndTime ] = useState(0);
	const [ appointmentTitle, setAppointmentTitle ] = useState('');
	const [ appointmentCategory, setAppointmentCategory ] = useState('');
	const [ appointmentNotes, setAppointmentNotes ] = useState('');

	function newAppointment(event) {
		event.preventDefault();
		if (startDate && endDate) {
			const appointment = {
				startDate,
				startTime,
				endDate,
				endTime,
				appointmentTitle,
				appointmentCategory,
				appointmentNotes
			};
			console.log(appointment);
		}
	}

	return (
		<body>
			<div className="container">
				<div className="card-body">
					<h5 className="card-title text-center">New Appointment</h5>
					<form
						className="form-register"
						onSubmit={(event) =>
							props.setEventState({
								// add new event data
								calendarEvents: props.eventState.calendarEvents.concat({
									// creates a new array
									title: appointmentTitle,
									start: startDate
								})
							})}
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
								autofocus
							/>
							<label for="inputEndtTime">End Time</label>
						</div>
						<hr className="my-4" />
						<div className="form-label-group">
							<input
								value={appointmentTitle}
								onChange={(event) => {
									setAppointmentTitle(event.target.value);
								}}
								type="text"
								id="inputAppointmentTitle"
								className="form-control appointment-tittle"
								placeholder="Title"
								autofocus
							/>
							<label for="inputAppointmentTitle">Title</label>
						</div>
						<div className="form-label-group">
							<input
								value={appointmentCategory}
								onChange={(event) => {
									setAppointmentCategory(event.target.value);
								}}
								type="text"
								id="inputAppointmentCategory"
								className="form-control appointment-category"
								placeholder="Category"
								required
								autofocus
							/>
							<label for="inputAppointmentCategory">Category</label>
						</div>
						<div className="form-label-group">
							<input
								value={appointmentNotes}
								onChange={(event) => {
									setAppointmentNotes(event.target.value);
								}}
								type="text"
								id="inputNotes"
								className="form-control appointment-note"
								placeholder="Notes"
							/>
							<label for="inputNotes">Notes</label>
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
