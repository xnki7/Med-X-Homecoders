import React from 'react'
import './DateCard.css'

function DateCard(props) {
  return (
    <div className="date_card">
        <p className="date">{props.date}</p>
        <p className="month">Dec</p>
    </div>
  )
}

export default DateCard
