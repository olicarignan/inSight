import React ,{ useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
<<<<<<< HEAD
import {Button, Modal} from 'react-bootstrap';

import './Calendar.scss'
=======
import ReactTooltip from 'react-tooltip'
>>>>>>> master


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

function popUp(){
  return (
  <ReactTooltip id='clickme' place='right' effect='solid' clickable={true}>
  <input type='text' placeholder='Type something...' /> 
  </ReactTooltip>

  )
}

  return (
<<<<<<< HEAD
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

=======
    <div className="calendar">
      <FullCalendar
      defaultView="dayGridMonth"
       plugins={[ dayGridPlugin, interactionPlugin ]}
       dateClick={(args) => {
      
       }}
       weekends={true}
       />
    </div>
>>>>>>> master
  )
}