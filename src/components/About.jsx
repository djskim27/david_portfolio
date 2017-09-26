import React, { Component } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;

    p{
        font-size: 18px;
        font-family: 'Work Sans', sans-serif;
        color: white;
    }

    background: url(https://i.imgur.com/SsldRMK.png) no-repeat center center fixed;
        
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    
`
const Title = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    p {
        font-size: 6vw;
        font-family: 'Work Sans', sans-serif;
        color: white;
    }
`
const AboutMe = styled.div`
    p {
        font-size: 6vw;
        font-family: 'Work Sans', sans-serif;
        color: #2ECC40;
    }
`
const Picture = styled.div`
    
    img {
        width: 200px;
    }
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        width: 50%;
        font-size: 15px;
        font-family: 'PT Sans', sans-serif;
        color: white;
        background: rgba(0,0,0,0.5)
    }
    
`
const Skills = styled.div`
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-family: 'Work Sans', sans-serif;
        color: white;
    }
`
const SkillsButtonsRowOne = styled.div`
    display: flex;
    wrap: flex-wrap;
    justify-content: space-between;
    div {
        margin: 5px;
        padding: 5px;
        background: #2ECC40;
        color: white;
        font-family: 'Work Sans', sans-serif;

    }
`
const SkillsButtonsRowTwo = styled.div`
    display: flex;
    wrap: flex-wrap;
    justify-content: space-between;
    div {
        margin: 5px;
        padding: 5px;
        background: #2ECC40;
        color: white;
        font-family: 'Work Sans', sans-serif;

    }
`

export default class About extends Component {
  render() {
    return (
      <AboutContainer>
          <Title className='container'>
            <AboutMe>
            <p><strong>About </strong></p>
            </AboutMe>
            <p><strong>Me</strong></p>
          </Title>
          <Picture>  <img src='https://i.imgur.com/r810Jen.png'/> </Picture>
          <p className='text-center'>
           Full Stack Web Developer | Atlanta, GA
          </p>
          <Description>
          <p>
            I am a passionate programmer who enjoys the intricacies of solving problems with code. Coming from a mixed background of academic tutoring and competitive gaming, I believe that I possess the creatitive aptitude to produce almost anything on a web browser. I am a firm believer in having a 'gritty' work ethic because one should always see things through when trying to improve in any trade. I never give up! In my spare time, I enjoy attending music festivals and kicking butt in Super Smash Brothers!
          </p>
            <Skills>
                <h1><strong className='my'>my</strong><strong>skills</strong></h1>
                <SkillsButtonsRowOne>
                    <div>HTML5</div>
                    <div>CSS3</div>
                    <div>Javascript</div>
                    <div>jQuery</div>
                    <div>React</div>
                    <div>Node</div>
                </SkillsButtonsRowOne>
                <SkillsButtonsRowTwo>
                    <div>Express</div>
                    <div>MongoDB</div>
                    <div>Ruby on Rails</div>
                    <div>PostgreSQL</div>
                </SkillsButtonsRowTwo>
            </Skills>
          </Description>

      

          
          

      </AboutContainer>
    )
  }
}
