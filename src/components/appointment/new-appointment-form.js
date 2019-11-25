import React from 'react'
import EditorJS from '@editorjs/editorjs';
import './new-appointment-form.scss'



export default function NewAppointment() {
  return(
    <body>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-register my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">New Appointment</h5>
                  <form className="form-register">
                  <div className="form-label-group">
                      <input type="date" id="inputStartDate" className="form-control start-date" placeholder="Start Date" required autofocus/>
                      <label for="inputStartDate">Start Date</label>
                    </div>
                    <div className="form-label-group">
                      <input type="time" id="inputStartTime" className="form-control start-time" placeholder="Start Time" required autofocus/>
                      <label for="inputStartTime">Start Time</label>
                    </div>
                    <hr className="my-4"/>
                  <div className="form-label-group">
                      <input type="date" id="inputEndDate" className="form-control end-date" placeholder="End Date" required autofocus/>
                      <label for="inputEndDate">End Date</label>
                    </div>
                    <div className="form-label-group">
                      <input type="time" id="inputEndTime" className="form-control end-time" placeholder="End Time" required autofocus/>
                      <label for="inputEndtTime">End Time</label>
                    </div>
                    <hr className="my-4"/>
                    <div className="form-label-group">
                      <input type="text" id="inputAppointmentTitle" className="form-control appointment-tittle" placeholder="Title" required autofocus/>
                      <label for="inputAppointmentTitle">Title</label>
                    </div>
                    <div className="form-label-group">
                      <input type="text" id="inputAppointmentCategory" className="form-control appointment-category" placeholder="Category" required autofocus/>
                      <label for="inputAppointmentCategory">Category</label>
                    </div>
                    <div className="form-label-group">
                      <input type="text" id="inputNotes" className="form-control appointment-note" placeholder="Notes"/>
                      <label for="inputNotes">Notes</label>
                    </div>
                    <hr className="my-4"/>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Save Appointment</button>
                    <button className="btn btn-lg btn-danger btn-block text-uppercase" type="submit">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
  )
}