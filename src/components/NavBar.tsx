import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PageTitle from './PageTitle';
import { Navbar, Nav, Form,FormControl,Button } from 'react-bootstrap';
import './styles/NavBar.css';
import title from './img/vaxhub_white.png';
class NavBar extends React.Component<{}, {url:string[],pageName: string}>{
  constructor(props: any) {
    super(props);

    this.state = {
      url: window.location.href.split('/'),
      pageName: ""
    };
  }

  componentDidMount = () => {
    if (this.state.url[this.state.url.length-1]=== ''){
      this.setState({
        pageName:"Find a clinic"
      })
    }
    else if (this.state.url[this.state.url.length-1]=== 'stats'){
      this.setState({
        pageName:"Statistics"
      })
    }
    else if (this.state.url[this.state.url.length-1]=== 'account'){
      this.setState({
        pageName:"Account"
      })
    }
    else if (this.state.url[this.state.url.length-1]=== 'bookings'){
      this.setState({
        pageName:"Bookings"
      })
    }
  }

  render(){
    return (
      <>
        <Navbar style={{"backgroundColor":"#173668"}} expand="lg" variant="dark" collapseOnSelect sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="d-flex flex-column" style={{flexGrow: 1}}>
          <div className="d-flex" style={{height:"3em"}}>
            <Navbar.Brand href="/" id="logo-left">
              <img src={title} alt="COVID Vaccine Hub"  className="brand"/>
            </Navbar.Brand>
              <Nav className="ms-auto" id="nav-right">
              <Nav.Link id="nav-button" href="bookings">My Bookings</Nav.Link> 
              <Nav.Link id="nav-button" href="stats">Statistics</Nav.Link>
              <Nav.Link style={{paddingLeft:"20px"}} href="account">Account</Nav.Link>
            </Nav>
            <Button variant="custom">Log In</Button>
          </div>
          <PageTitle name={this.state.pageName}/>
        </div>
        </Navbar.Collapse>
        </Navbar>
    </>
    );
  }
}

export default NavBar;
