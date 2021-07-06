import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.9206,
  lng: 138.6062
};
const position = {
   lat: -34.9206,
  lng: 138.6062
}

class Map extends React.Component{
  
  
  render(){
   
  return (
    <>
    <h1>MAP</h1>
     <LoadScript
        googleMapsApiKey="AIzaSyBznIBq_PV64mfkF1GOzzhh9aLIExq1x7U"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker
      
      position={position}
    />
        
         
          <></>
        </GoogleMap>
      </LoadScript>
    
   
    </>
  );
}
}
export default Map;