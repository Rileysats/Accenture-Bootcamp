import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form,FormControl,Button } from 'react-bootstrap';
import './styles/NavBar.css';

class NavBar extends React.Component{
  render(){
    return (
      // style={{"backgroundColor":"red"}} 
    <Navbar bg="dark" variant="dark" expand="xl" collapseOnSelect>
    <Navbar.Brand href="/" id="logo-left">COVID Vaccine Hub</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto" id="nav-right">
      <Nav.Link href="find">Find a clinic</Nav.Link>  
      <Nav.Link href="bookings">My Bookings</Nav.Link>
      <Nav.Link href="stats">Statistics</Nav.Link>
      <Nav.Link href="account">Account</Nav.Link>
    </Nav>
    <Form id="nav-right" className='d-flex'>
      <FormControl type="text" placeholder="Enter clinic" size="lg"/>
      <Button variant="secondary">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  
    
    );
  }
}

export default NavBar;
