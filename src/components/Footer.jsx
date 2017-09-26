import React, { Component } from 'react'
import styled from 'styled-components'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div>
         <Navbar fixedBottom className='nav-bar'>
            {/* <Navbar.Header>
            <Navbar.Brand>
            <Link to='/'><a href="#"><FaHome/></a></Link>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav className='nav-container' pullRight>
                <NavItem><Link to='/about'><Button className='custom-btn btn-success'>About</Button></Link></NavItem> 
                <NavItem><Link to='/projects'><Button className='custom-btn btn-primary'>Projects</Button></Link></NavItem> 
                <NavItem><Link to='/contact'><Button className='custom-btn btn-danger'>Contact</Button></Link></NavItem>            
            </Nav> */}
            <div className='nav-div'>
                <p>David Kim 2017</p>
            </div>
        </Navbar>
      </div>
    )
  }
}