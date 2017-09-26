import React, { Component } from 'react';
import styled from 'styled-components';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import MdEmail from 'react-icons/lib/md/email';

const ContactContainer = styled.div`
    padding-top: 5%;
    height: 100vh;
    background: #FF4136;
    text-align: center;
    h1 {
        color: white;
        font-family: 'Work Sans', sans-serif;
    }
    img {
        width: 300px;
        border: 2px white solid;
    }
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`
const LinkedIn = styled.div`
    margin-top: 16px;
    padding-right: 10px;

    }
`
const Email = styled.div`
    margin-top: 10px;
    padding-left: 10px;
`

export default class Contact extends Component {
  render() {
    return (
      <ContactContainer>
          <h1><strong>Interested? Let's Chat!</strong></h1>
          <br/>
          <img src='https://media.giphy.com/media/264uHA6t7lhJK/giphy.gif'/>
          <LogoContainer>
            <LinkedIn><a href='https://www.linkedin.com/in/djskim27/' target='blank'><FaLinkedinSquare className='linked-in' size={48} color={"white"}/></a></LinkedIn>
            <Email><a href='mailto:djskim27@gmail.com' ><MdEmail className='email 'size={60} color={"white"}/></a></Email>
          </LogoContainer>

          

        
      </ContactContainer>
    )
  }
}
