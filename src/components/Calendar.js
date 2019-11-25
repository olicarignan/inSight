import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import ReactTooltip from 'react-tooltip'
import Popup from "reactjs-popup";
import {render} from 'react-dom';


import './Calendar.scss'
import { renderDateCell } from '@fullcalendar/core';






export default function Calendar(props) {
  return (
    <FullCalendar
    dateClick={(args) => {
      console.log("asfl;jasifjkasmfmsakfnkasnfkasn")
     }} defaultView="dayGridMonth" 
     plugins={[ dayGridPlugin, interactionPlugin ]}
     weekends={true} >

    </FullCalendar>
  )
}