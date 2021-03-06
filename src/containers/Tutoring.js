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
          <li><a href="https://schedulebuilder.org/?c0aumi9t" target="_blank" rel="noopener noreferrer">DS</a></li>
          <li><a href="https://schedulebuilder.org/?vyvqu5uj" target="_blank" rel="noopener noreferrer">DC</a></li>
          <li><a href="https://schedulebuilder.org/?mqnsvyl7" target="_blank" rel="noopener noreferrer">ENA</a></li>
          <li><a href="https://schedulebuilder.org/?f54rk4od" target="_blank" rel="noopener noreferrer">S&amp;S</a></li>
        </ul>
      </div>
    )
  }
}

export default Tutoring