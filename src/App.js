import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import {FaAdjust, FaFacebookSquare} from 'react-icons/lib/fa'
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect className='navbar'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
       
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  
      </div>
    );
  }
}

export default App;
