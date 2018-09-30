import React from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';

const Map = ({ handleMapClick, markers }) => {
  
  const positions = markers.map(element => {
    return new window.google.maps.LatLng(element.position.lat, element.position.lng)
  })

  const GoogleMapWrapper = withGoogleMap(props => (
    <GoogleMap
      onClick = {handleMapClick}
      defaultVisible= {false}
      defaultCenter = { { lat: 60.1675, lng: 24.9311 } }
      defaultZoom = { 14 }
      options={{ scrollwheel: false,  mapTypeControl:false,  draggable:false, streetViewControl: false, zoomControl: false}}
    >
      {markers.map(m => {
        return <Marker key={m.key} position={{ lat: m.position.lat, lng: m.position.lng }} />
      })}
      <Polyline
        path={positions}
        options={{
            strokeColor: "#ff2527",
            strokeWeight: 2,
        }}/>
    </GoogleMap>              
  ))

  return(
    <div >
      <GoogleMapWrapper
        containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> }
      />
    </div>
 )
}
export default Map;
