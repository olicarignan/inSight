import React ,{ useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import {Button, Modal} from 'react-bootstrap';

import './Calendar.scss'


import NewAppointment from '../components/appointment/new-appointment-form'


export default function Calendar(props) {
  const [show, setShow] = useState(false);
  
  function Example() {
    
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        < Modal show={show} onHide={handleClose}>
          <NewAppointment/>
        </ Modal>
      </>
    );
  }


  return (
    <div>
    <FullCalendar
     dateClick={(args) => {
       setShow(true)
        console.log(args.date)
    } }
     defaultView="dayGridMonth" 
     plugins={[ dayGridPlugin, interactionPlugin ]}
     weekends={true} >
    </FullCalendar>
    {show ? <Example/> : null}</div>

  )
}