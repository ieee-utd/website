import React, { Component } from 'react'
import Iframe from 'react-iframe'
import './Contact.css'


class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Iframe url="https://goo.gl/forms/27VNzLklSdBmFqgF3"
          width="100%"
          height="100vh"
          display="initial"
          position="relative"
          allowFullScreen />
      </div>
    )
  }
}
export default Contact