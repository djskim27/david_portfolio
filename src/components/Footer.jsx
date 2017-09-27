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
            <div className='nav-div'>
                <p className='copyright'>&copy; 2017 by David Kim</p>
            </div>
        </Navbar>
      </div>
    )
  }
}