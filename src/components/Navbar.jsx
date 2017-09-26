import React, { Component } from 'react'
import styled from 'styled-components'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import {Link} from 'react-router-dom'

export default class GlobalNavbar extends Component {
  render() {
    return (
      <div>
         <Navbar fixedTop className='nav-bar'>
            <div className='nav-div'>
                <Link to='/' className='btn home-btn'><FaGamepad size={30}/></Link>
                <Link to='/about' className='btn about-btn'><strong>About</strong></Link>
                <Link to='/projects' className='btn projects-btn'><strong>Projects</strong></Link>
                <Link to='/contact' className='btn contact-btn'><strong>Contact</strong></Link>
            </div>
        </Navbar>
      </div>
    )
  }
}
