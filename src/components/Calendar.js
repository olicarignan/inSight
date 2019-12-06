import React ,{ useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Button, Modal } from 'react-bootstrap';
import NewAppointment from '../components/appointment/new-appointment-form';
import AppointmentInfoCard from './appointment/appointment-info-card';
import './Calendar.scss'

import Swal from 'sweetalert2'
import axios from 'axios';


export default function Calendar(props) {
  const calendarComponentRef = React.createRef()

  const [show, setShow] = useState(false); 
  const [showEventInfo, setShowEventInfo] = useState(false); 


  if (window.innerWidth <= 400){
    props.setViewHeight(500)
  } else {
    props.setViewHeight(450)
  }

    
  const handleDateClick = (arg) => {
    setShow(true)
  }

  const HandleEventClick = (info) => {
    let eventInfo = info.event;

    Swal.fire({
      title: eventInfo.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
      eventInfo.start.toUTCString() +
        `
      </strong></td>
      </tr>
      <tr >
      <td>End Time</td>
      <td><strong>
      ` +
      eventInfo.end.toUTCString() +
        `
      </strong></td>
      </tr>
      <tr >
      <td>Category</td>
      <td><strong>
      ` +
      eventInfo.extendedProps.category_name +
        `
      </strong></td>
      </tr>
      <tr >
      <td>Location</td>
      <td><strong>
      ` +
      eventInfo.extendedProps.location +
        `
      </strong></td>
      </tr>
      <tr >
      <td>Note</td>
      <td><strong>
      ` +
      eventInfo.extendedProps.small_note +
        `
      </strong></td>
      </tr>
      <tr >
      <td>Take Notes</td>
      <td><strong>
      <a href="/categories/${eventInfo.groupId}/new">Star Writing</a>
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      customClass: {
        confirmButton: 'confirm-button-class',
        cancelButton: 'cancel-button-class',
      },
      showCloseButton:true,
      closeButton:"hi",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        props.deleteAppointment(eventInfo.id)
        eventInfo.remove()
        Swal.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  }

  function AppointmentInfoModal() {
    return (
      <>
       <Modal.Dialog showEventInfo={showEventInfo} >
        
        <AppointmentInfoCard
        HandleEventClick={HandleEventClick}
        setShowEventInfo={setShowEventInfo}
        setShow={setShow}
        />
       </Modal.Dialog>
      </>
    );
  }

  // allows us to see the modal once a date is clicked
  function AppointmetModal() {
    return (
      <>
        < Modal show={show}>
          <NewAppointment
            // setEventState={setEventState}
            // eventState={eventState}
            setToggle={props.setToggle}
           categories={props.categories}
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
    height={520}
     timeZone={"EST"}
     eventClick={HandleEventClick}
     defaultView="dayGridMonth" 
     header={{
      right: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek',
      center: 'title',
      left: 'prev,next today',
     }}
     allDaySlot={false}
     aspectRatio={1}
     plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
     weekends={true}
     dateClick={() => handleDateClick()}
     ref={calendarComponentRef}
     events={props.calendarEvents}
     allDayDefault={false}
     allDaySlot={false}
      >
    </FullCalendar>
    <div>
    { showEventInfo ? <AppointmentInfoModal/> : null}
    </div>
    <div>
    {show ? <AppointmetModal/> : null}
    </div>
    </div>
  )
}