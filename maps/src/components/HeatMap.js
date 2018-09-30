import React from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer'
const google = window.google

const HeatMap = ({ markers }) => {

  // params
  const pointRadius = 15
  const interpolateFraction = 0.5

  const midP = (a, b) => google.maps.geometry.spherical.interpolate(a, b, interpolateFraction)
  
  const heatData = () => {
    var i = 0
    var prevCoord = markers[i] 
    const newCoords = []
    for (i = 1; i < markers.length; i++) { 
      const current = markers[i]
      const start = new google.maps.LatLng(prevCoord.position.lat, prevCoord.position.lng)
      const end = new google.maps.LatLng(current.position.lat, current.position.lng)
      const mid = midP(start, end)
      const firstQuart = midP(start, mid)
      const thirdQuart = midP(mid, end)

      newCoords.push(
        start, mid, firstQuart, thirdQuart, midP(start, firstQuart),
        midP(thirdQuart, end), midP(thirdQuart, end), midP(mid, thirdQuart)
      )
      prevCoord = current
      if (i === markers.length - 1) {
          newCoords.push(end)
      }
    }
    return newCoords
  }

  const GoogleMapWrapper = withGoogleMap(props => (
    <GoogleMap
      defaultVisible={false}
      defaultCenter = { {lat: 60.1675, lng: 24.9311} }
      defaultZoom = { 14 }
      options={{ 
        scrollwheel: false,  
        mapTypeControl:false,  
        draggable:false, 
        streetViewControl: false, 
        zoomControl: false
      }}>
      <HeatmapLayer data={ heatData() } options={{radius: pointRadius}} />
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
export default HeatMap
