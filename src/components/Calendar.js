import React ,{ useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Button, Modal } from 'react-bootstrap';
import NewAppointment from '../components/appointment/new-appointment-form';
import './Calendar.scss'


export default function Calendar(props) {
  const calendarComponentRef = React.createRef()
  const [show, setShow] = useState(false);
  const [eventState, setEventState] = useState({
    calendarWeekends: false,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date() }
    ]
  })

  const handleDateClick = (arg) => {
    setShow(true)
      console.log(eventState)
  }

  // allows us to see the modal once a date is clicked
  function AppointmetModal() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        < Modal show={show} onHide={handleClose}>
          <NewAppointment
            setEventState={setEventState}
            eventState={eventState}
            setShow={setShow}
            addAppointment={props.addAppointment}
            />
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
     ref={calendarComponentRef}
     events={eventState.calendarEvents}
      >
    </FullCalendar>
    {show ? <AppointmetModal/> : null}
    </div>
  )
}