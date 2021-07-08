import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow,StandaloneSearchBox } from '@react-google-maps/api';
import './styles/GoogleMap.css';
import { Button, Modal } from 'react-bootstrap';
import '../App.css';
import Chart from './Chart';
import EligibilityModal from './EligibilityModal';
 
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
class Map extends React.Component<{}, { isOpen: boolean,openInfoWindowMarkerId: string, center:any, showEligiblity: boolean, user: any,showClinic: boolean, clinicInfo: any}>{
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      showEligiblity: false,
      openInfoWindowMarkerId: '',
      showClinic: false,
      center:{
        lat: -37.8136,
        lng: 144.9631
      },
      clinicInfo:{
      
      },
      user:{
        age:50,
        name:"John",
        booking: false
      }};
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
    }}

  setShowOn = () => {
    this.setState({ 
        showEligiblity: true
    });}

  componentDidMount = () => {
    if (this.state.user.age < 40 && this.state.user.booking === false ){
      this.setShowOn();
    }
  }
  viewClinic = (id: number) => {
    this.setState({
      showClinic:true,
      clinicInfo:this.positions[id]
    });
    
  }

  close = () => {
    this.setState({
      showClinic: false
    })}
    
    setCenter = () => {
      this.setState({
      center: {
        lat:this.searchBox.getPlaces()[0].geometry.location.lat(),
        lng:this.searchBox.getPlaces()[0].geometry.location.lng()
      }
    });
    }
    searchBox:any;
    onLoad = (ref: any) => {this.searchBox = ref;}
    onPlacesChanged = () => {this.setCenter();}
    
  positions = [
    {
      LatLng:[{
        lat: -34.94471171584845,
        lng: 138.5873321554712
    }],
      name:"Wayville",
      time:5,
      address:"Goyder Pavilion, 20 Goodwood Rd, WAYVILLE, SA 5034",
      openingHours:"Mon - Sun 8am-4pm",
      walkIn: false
    },
    {
      LatLng:[{
        lat: -34.91123992695679,
        lng: 138.60001648451927
    }],
      name:"Women’s and Children’s Hospital",
      time:50,
      address:"72 King William Rd, North Adelaide SA 5006  ",
      openingHours:"Mon - Sun 8:15am - 4pm",
      walkIn: false,
      contact: "1800353787"
    },
    {
    LatLng:[{
      lat: -34.7177955055973,
      lng: 138.67202703994596
    }],
      name:"Elizabeth",
      time:15,
      address:"Elizabeth Vaccination Clinic, Playford Civic Centre, 10 Playford Boulevard , ELIZABETH, SA 5112",
      openingHours:"Mon - Sun 8:30am and 3:30pm",
      walkIn: false,
      contact: "1800353787"
    },
    {
      LatLng:[{
        lat: -35.138886136940954,
        lng: 138.50058755054297
    }],
  name:"Noarlunga",
  time:8,
  address:"Off Goldsmith Drive, NOARLUNGA CENTRE, SA 5168",
      openingHours:"Mon - Sun 8am-4pm",
      walkIn: false,
      contact: "1800353787"
  }
]
  render(){
    const containerStyle = {
      width: '80%',
      height: '40rem'
    };

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
    
    { this.state.showEligiblity ?  <EligibilityModal show={this.state.showEligiblity} /> : null}

      <Modal  aria-labelledby="contained-modal-title-vcenter" centered
        size="lg"
        show={this.state.showClinic}
        onHide={this.close}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header>
        <Modal.Title className="modal-title" id="clinic-modal-title">
         {this.state.clinicInfo.name + " Vaccination Clinic"} </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body" style={{fontSize:"1.2em"}}>
        <div id="clinic-modal-time" style={{color:"grey",fontSize:"1em"}}>LIVE WAIT TIME</div>
        <div style={{color:"orange",fontSize:"1.5em"}}>{this.state.clinicInfo.time + " minutes"}</div>
        <div style={{fontWeight:"bold"}}>Address:</div>
        <div >{this.state.clinicInfo.address}</div>
        <div style={{fontWeight:"bold"}}>Opening Hours:</div>
        <div>{this.state.clinicInfo.openingHours}</div>
        <div style={{fontWeight:"bold"}}>Contact:</div>
        <div>{this.state.clinicInfo.contact}</div>
        <div style={{fontWeight:"bold"}}>Walk In Available:</div>
        <div>{this.state.clinicInfo.walkIn ? "Yes" : "No"}</div>
        <div>
          <Chart/>
        </div>
      </Modal.Body>
        <Button id="modal-button" variant="success">Book Now</Button>
        <Button id="modal-button" variant="outline-success">    
            Notify Me
        </Button>
        <Button id="modal-button" variant="outline-dark" onClick={this.close}>    
            Close
        </Button>   
    </Modal>

    <div id="map-container">
     <LoadScript
        googleMapsApiKey="AIzaSyBznIBq_PV64mfkF1GOzzhh9aLIExq1x7U"
        libraries={["places"]}
      >
        
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.center}
          zoom={13}
          
          id="map"
        >
          
          <StandaloneSearchBox onLoad={this.onLoad}
          onPlacesChanged={
          this.onPlacesChanged}>

            <input
        type="text"
        placeholder="Enter location"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `30%`,
          height: `3em`,
          padding: `0 12px`,
          top:'1em',
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: "absolute",
          
          left: "50%",
          marginLeft: "-120px"
        }}
      />
          </StandaloneSearchBox>
          {this.positions.map((pos,index)=>
          <Marker key={index} position={pos.LatLng[0]} icon={(pos.time <= 10) ? icons.green.icon :(pos.time <= 25) ? icons.orange.icon : icons.red.icon}  onClick={()=>this.onClick(index)}>
          { (this.state.openInfoWindowMarkerId.toString() === index.toString()) &&(
              <InfoWindow options={{maxWidth:400}} onCloseClick={()=>this.onClick(index)}>
                <div>
                <div id="marker-title" onClick={()=>this.viewClinic(index)}>{this.positions[index].name + ' Vaccination Clinic'}</div>
                <div id="wait-time-text">LIVE WAIT TIME</div>
                <div id="wait-time"> {this.positions[index].time+' Minutes'}</div>
                <div className="text-center"><Button id="book-button" variant="primary" size="sm">Book now</Button></div>
                <div style={{textAlign:"center",marginTop:"8px"}}>Notify me if a spot becames available</div>
                </div>
              </InfoWindow>)}
              </Marker>)}
        </GoogleMap>
      </LoadScript>
      </div>
    </>
  );}}
export default Map;