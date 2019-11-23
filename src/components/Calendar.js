import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick



import './Calendar.scss'


export default function Calendar() {
  return (
    <FullCalendar defaultView="dayGridMonth"
     plugins={[ dayGridPlugin, interactionPlugin ]}
     dateClick={(args) => {
       alert("hello")
     }}
     weekends={true}
     events={[
      { title: 'event 1', date: '2019-11-23' },
      { title: 'event 2', date: '2019-04-02' }
    ]} 
     />
  )
}