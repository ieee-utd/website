import React from 'react'
import TableMd from '../components/tabletop'
import './Tutoring.css'


class Tutoring extends React.Component {
  render() {
    return (
      <div className="Tutoring" style={{paddingBottom:'3em'}}>
        <h1>Tutoring</h1>
        <p>We offer tutoring at <a href="https://www.google.com/maps/place/Synergy+Park+North+Building+-+UT+Dallas/@32.9889742,-96.7559906,15z/data=!4m5!3m4!1s0x864c2206e04feeb9:0x54e35d04c429ba8a!8m2!3d32.9939073!4d-96.752337" target="_blank" rel="noopener noreferrer">JSSEC</a>.</p>
        <br/>
        <h2>Review Dates</h2>
        We are hosting review sessions for the following dates:
        <TableMd />
        <br/>
        <h2>Tutoring Schedules</h2>
        <p>We offer tutoring for the following classes:</p>
        <ul style={{marginBottom:0}}>
          <li><a href="https://docs.google.com/gview?embedded=true&url=https://www.ieeeutd.org/tutoring/ee-ce_2310.pdf" target="_blank" rel="noopener noreferrer">EE/CE 2310</a> <a href="/tutoring/ee-ce_2310.pdf" download>(Download)</a></li>
          <li><a href="https://docs.google.com/gview?embedded=true&url=https://www.ieeeutd.org/tutoring/ee-ce_3301.pdf" target="_blank" rel="noopener noreferrer">EE/CE 3301</a> <a href="/tutoring/ee-ce_3301.pdf" download>(Download)</a></li>
          <li><a href="https://docs.google.com/gview?embedded=true&url=https://www.ieeeutd.org/tutoring/ee-ce_3302.pdf" target="_blank" rel="noopener noreferrer">EE/CE 3302</a> <a href="/tutoring/ee-ce_3302.pdf" download>(Download)</a></li>
          <li><a href="https://docs.google.com/gview?embedded=true&url=https://www.ieeeutd.org/tutoring/ee-ce_3320.pdf" target="_blank" rel="noopener noreferrer">EE/CE 3320</a> <a href="/tutoring/ee-ce_3320.pdf" download>(Download)</a></li>
        </ul>
      </div>
    )
  }
}

export default Tutoring