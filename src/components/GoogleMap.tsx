import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './styles/GoogleMap.css';
import { Button } from 'react-bootstrap';
import '../App.css';
import PageTitle from './PageTitle';
import EligibilityModal from './EligibilityModal';

class Map extends React.Component<{}, { isOpen: boolean,openInfoWindowMarkerId: string, center:any, show: boolean, user: any}>{
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      show: false,
      openInfoWindowMarkerId: '',
      center:{
        lat: -34.9206,
        lng: 138.6062
      },
      user:{
        age:21,
        name:"John",
        booking: false
      }};}

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
    }}

  setShowOn = () => {
    this.setState({ 
        show: true
    });}

  componentDidMount = () => {
    if (this.state.user.age < 40 && this.state.user.booking === false ){
      this.setShowOn();
    }
  }

  render(){
    const containerStyle = {
      width: '80%',
      height: '40rem'
    };

    const positions = [
    {
      LatLng:[{
        lat: -34.94471171584845,
        lng: 138.5873321554712
    }],
      name:"Wayville",
      time:"35"
    },
    {
      LatLng:[{
        lat: -34.91123992695679,
        lng: 138.60001648451927
    }],
      name:"Women’s and Children’s Hospital",
      time:"35"
    },
    {
    LatLng:[{
      lat: -34.7177955055973,
      lng: 138.67202703994596
    }],
      name:"Elizabeth",
      time:"35"
    },
    {
      LatLng:[{
        lat: -35.138886136940954,
        lng: 138.50058755054297
    }],
  name:"Noarlunga",
  time:"35"
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
    { this.state.show ?  <EligibilityModal show={this.state.show} /> : null}
    
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
                <div>
                <div id="marker-title">{positions[index].name + ' Vaccination Clinic'}</div>
                <div id="wait-time-text">LIVE WAIT TIME</div>
                <div id="wait-time"> {positions[index].time+' Minutes'}</div>
                <div className="text-center"><Button id="book-button" variant="primary">Book now</Button></div>
                <div>Notify me if a spot becames available</div>
                </div>
              </InfoWindow>)}
              </Marker>)}
        </GoogleMap>
      </LoadScript>
      </div>
 
      { this.state.show ? null : <div id="alert-out" className="d-flex">
        <div className="alert-text ps-3">
          ALERT: based on your age, you are ineligible to recieve a COVID19 vaccine at this time. Please contact your GP, or call the hotline if you require more information
          </div>
          <div className="align-self-center pe-3 text-right" style={{flexGrow: 1, textAlign: 'center'}}><Button variant="secondary" size="lg" className="alert-button">Call</Button></div>
      </div>}
    </>
  );}}
export default Map;