import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './styles/GoogleMap.css';
import { Button } from 'react-bootstrap';
import '../App.css';


class Map extends React.Component<{}, { isOpen: boolean,openInfoWindowMarkerId: string, center:any }>{
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      openInfoWindowMarkerId: '',
      center:{
      lat: -34.9206,
  lng: 138.6062
    }
    };

  }
  onClick = (id: any) => {
    if(this.state.isOpen === true){
    this.setState({ 
        openInfoWindowMarkerId: '',
        isOpen: !this.state.isOpen
    });
    }
    else{
      this.setState({
        openInfoWindowMarkerId: id,
        isOpen: !this.state.isOpen
    }); 
    }
    
    
  }

  render(){
    const containerStyle = {
  width: '90rem',
  height: '60rem'
};


const positions = [
  {
    LatLng:[{
  lat: -34.94471171584845,
  lng: 138.5873321554712
  }],
  name:"asd"
},
  {
    LatLng:[{
  lat: -34.91123992695679,
  lng: 138.60001648451927
  }],
  name:"asd"
},
  {
    LatLng:[{
  lat: -34.7177955055973,
  lng: 138.67202703994596
  }],
  name:"asd"
},
  {
    LatLng:[{
  lat: -35.138886136940954,
  lng: 138.50058755054297
  }],
  name:"asd"
  }
]
  const iconBase = "http://maps.google.com/mapfiles/kml/paddle/";
  
  const icons: Record<string, { icon: string }> = {
    green: {
      icon: iconBase + "grn-blank.png",
    },
    orange: {
      icon: iconBase + "orange-blank.png",
    },
    red: {
      icon: iconBase + "red-blank.png",
    }
  
  };

  return (
    <>
    <h1 className="page-title">Find a clinic</h1>
    <div id="map-container">
     <LoadScript
        googleMapsApiKey="AIzaSyBznIBq_PV64mfkF1GOzzhh9aLIExq1x7U"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.center}
          zoom={12}
          id="map"
        >
          {positions.map((pos,index)=>
          <Marker key={index} position={pos.LatLng[0]} icon={icons.red.icon}  onClick={()=>this.onClick(index)}>
          { (this.state.openInfoWindowMarkerId.toString() === index.toString()) &&(
              <InfoWindow onCloseClick={()=>this.onClick(index)}>
                <span>Something</span>
              </InfoWindow>
            )}</Marker>
          )}
          
          
        
         
          <></>
        </GoogleMap>
      
      </LoadScript>
      </div>
      <div id="alert-in">
        <div className="alert-text">
          ALERT: you are currently viewing this site as a guest. Please create an account or log in to access booking and eligibility information
          </div><Button variant="secondary" size="lg" className="alert-button">Log In</Button>
      </div>
      <div id="alert-out"><div  className="alert-text">
        ALERT: based on your age, you are ineligible to recieve a COVID19 vaccine at this time. Please contact your GP, or call the hotline if you require more information
        </div><Button variant="secondary">Call</Button>
      </div>
      
   
    </>
  );
}
}
export default Map;