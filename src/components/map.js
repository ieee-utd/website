import React from 'react'
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const IEEEGoogleMap = compose(
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 32.9939073, lng: -96.752337 }}
    >
      <Marker
        position={{ lat: 32.9939073, lng: -96.752337 }}
      />
    </GoogleMap>
  )

class Map extends React.Component {
  render() {
    return (
      <div className="map-container">
        <IEEEGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzB-vuxBLhNImIQyTmuytvwqx46Q7ZAek&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `88%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />        
      </div>
    )
  }
}

export default Map