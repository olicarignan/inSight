import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ReactTooltip from 'react-tooltip'


import './Calendar.scss'

function popUp(){
  return (
  <ReactTooltip id='clickme' place='right' effect='solid' clickable={true}>
  <input type='text' placeholder='Type something...' /> 
  </ReactTooltip>

  )
}

export default function Calendar() {
  return (
    <aside className="calendar">
      <FullCalendar defaultView="dayGridMonth"
       plugins={[ dayGridPlugin, interactionPlugin ]}
       dateClick={(args) => {
      
       }}
       weekends={true}
       events={[
        { title: 'event 1', date: '2019-11-23' },
        { title: 'event 2', date: '2019-04-02' }
      ]} 
       />
    </aside>
  )
}