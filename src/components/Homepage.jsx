import React, { Component } from 'react';
import styled from 'styled-components';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import {Link} from 'react-router-dom';

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    p {
        font-size: 12vw;
        font-family: 'Work Sans', sans-serif ;
        color:  #FFDC00;
        
    }
    background: url(https://i.imgur.com/qa14wbf.png) no-repeat center center fixed;
        
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
       


`
const FullName = styled.div`
    margin-top: 15vh;
    margin-right: 25vw;
    display:flex;
`
const LastName = styled.div`
    p {
        font-size: 12vw;
        font-family: 'Work Sans', sans-serif, ;
        color: white;
    }
`

const TagLine = styled.div`
    

    p {
        font-size: 3vw;
        color: white;
        margin-right: 10vw;
    }
`

const Question = styled.div`
   p {
       font-size: 1.8vw;
       color: white;
       margin-right: 55vw;

   }
`

export default class Homepage extends Component {
  render() {
    return (
      <NameContainer>
        <FullName>
            <p><strong>David</strong></p>
            <LastName>
            <p> <strong>Kim</strong></p>
            </LastName>
        </FullName>
        <TagLine>
            <p>Mastering the coding game, one line at a time.</p>
        </TagLine>
        <br/>
        <br/>
        <Question>
            <Link to='/about'><button className='about-me-btn about-bounce-to-right'>Learn More</button></Link>
        </Question>

      </NameContainer>
    )
  }
}
