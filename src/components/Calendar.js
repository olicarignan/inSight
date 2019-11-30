import React ,{ useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Button, Modal } from 'react-bootstrap';
import NewAppointment from '../components/appointment/new-appointment-form';
import AppointmentInfoCard from './appointment/appointment-info-card';
import './Calendar.scss'


export default function Calendar(props) {
  const calendarComponentRef = React.createRef()

  const [show, setShow] = useState(false); // this is for the new appointment
  const [showEventInfo, setShowEventInfo] = useState(false);// this is the appointment info cards
  // const [eventState, setEventState] = useState({
  //   calendarWeekends: false,
  //   calendarEvents: [ // initial event data
  //     { title: '',
  //      start: "HH:mm",
  //      allDay : false }
  //   ]
  // }) // this is for the events in the calendar

  const eventList =  props.appointments.map(appointment => {
    return {
      title: appointment.appointment_name,
      start: appointment.start_date,
      allDay: false
    }
  })

  console.log(eventList)
  
  const handleDateClick = (arg) => {
    setShow(true)
      // console.log(eventState)
  }


  const HandleEventClick = (info) => {
    console.log(info.event)
    setShowEventInfo(true)
    // console.log(info.event)
  }

  function AppointmentInfoModal() {
    return (
      <>
       <Modal.Dialog showEventInfo={showEventInfo} >
        <AppointmentInfoCard
        // calendarEvents={eventState.calendarEvents}

        setShowEventInfo={setShowEventInfo}
        setShow={setShow}
        // eventState={eventState}
        />
       </Modal.Dialog>
      </>
    );
  }
  console.log(props)

  // allows us to see the modal once a date is clicked
  function AppointmetModal() {
    return (
      <>
        < Modal show={show}>
          <NewAppointment
            // setEventState={setEventState}
            // eventState={eventState}
            setShow={setShow}
            addAppointment={props.addAppointment}
          categories={props.categories}
          user_id={props.user.id}
          appointments={props.appointments}/>
        </ Modal>
      </>
    );
  }
  return (
    <div className="calendar">
    <FullCalendar
    eventClick={HandleEventClick}
      

     defaultView="dayGridMonth" 
     plugins={[ dayGridPlugin, interactionPlugin ]}
     weekends={true}
     dateClick={() => handleDateClick()}
     ref={calendarComponentRef}
     events={props.calendarEvents}
      >
    </FullCalendar>
    <div>
      {console.log(eventState.calendarEvents,"events")}
    { showEventInfo ? <AppointmentInfoModal/> : null}
    </div>
    <div>
    {show ? <AppointmetModal/> : null}
    </div>
    </div>
  )
}