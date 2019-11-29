import React ,{ useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Button, Modal } from 'react-bootstrap';
import NewAppointment from '../components/appointment/new-appointment-form';
import './Calendar.scss'


export default function Calendar(props) {
  const [show, setShow] = useState(false);
  const [eventState, setEventState] = useState({
    calendarWeekends: false,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date() }
    ]
  })

  const handleDateClick = (arg) => {
    if (window.confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      setEventState({  // add new event data
        calendarEvents: eventState.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          start: arg.date,
        })
      })
      console.log(eventState)
    }
  }


  
  // allows us to see the modal once a date is clicked
  function AppointmetModal() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        < Modal show={show} onHide={handleClose}>
          <NewAppointment
          categories={props.categories}
          user_id={props.user.id}/>
        </ Modal>
      </>
    );
  }
  return (
    <div className="calendar">
    <FullCalendar
     defaultView="dayGridMonth" 
     plugins={[ dayGridPlugin, interactionPlugin ]}
     weekends={true}
     dateClick={handleDateClick}
      >
    </FullCalendar>
    {show ? <AppointmetModal/> : null}
    </div>
  )
}