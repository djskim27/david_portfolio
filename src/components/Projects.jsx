import React, { Component } from 'react'
import styled from 'styled-components';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import {Link} from 'react-router-dom';

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #0074D9 no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    h1 {
        margin-top: 5%;
        color: white;
        font-family: 'Work Sans', sans-serif;
        @media (max-width:414px) {
            margin-top: 15%;
        }

    }

    h3 {
        font-size: 18px;
        font-family: 'Work Sans', sans-serif;
        color: white;
        padding-bottom: 5%;
        @media (max-width:414px) {
            font-size: 15px;
            padding-bottom: 15%;
        }
    }

`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    

`
const Image = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    height: 240px;
    
    @media (max-width:414px) {
        width:260px;
        height: 156px;
    }

    @media (min-height: 900px) {
        width: 520px;
        height: 312px;
    }
    img {
        border-top: 2px white solid;
        width: 400px;
        height: 240px;
        @media (max-width:414px) {
            width:260px;
            height: 156px;
        }
        @media (min-height: 900px) {
            width: 520px;
            height: 312px;
        }
    }
    
`


export default class Projects extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    img: 'https://i.imgur.com/r3zGyTy.jpg', 
                    url:'http://marvelous-app.herokuapp.com/',
                    title: 'Marvelous',
                    build: 'React, Ruby on Rails, Marvel API',
                    github: 'https://github.com/djskim27/marvelous_app'   
                }, 
                {
                    img: 'https://i.imgur.com/PVvy7YQ.png', 
                    url: 'https://roam-r.herokuapp.com/',
                    title: 'RoamR',
                    build: 'Ruby on Rails',
                    github: 'https://github.com/djskim27/project_vagabond'
                }, 
                {
                    img:'https://i.imgur.com/kfkO1E2.png', 
                    url: 'https://edm-schedulit.herokuapp.com/',
                    title: 'EDM ScheduLIT',
                    build: 'MongoDB, Express, React, Node.js',
                    github: 'https://github.com/djskim27/edm-schedulit'
                }, 
                {
                    img: 'https://i.imgur.com/dSCQM4g.png', 
                    url:'https://young-depths-90705.herokuapp.com/',
                    title: 'GIF Duels',
                    build: 'MongoDB, Express, Node.js',
                    github: 'https://github.com/djskim27/GIFduels2'
                }, 
                {
                    img: 'https://i.imgur.com/87XFk4a.png', 
                    url:'http://djskim27pokemon-hangman.bitballoon.com/',
                    title: 'Pokemon Hangman',
                    build: 'HTML/CSS, jQuery',
                    github: 'https://github.com/djskim27/pokemon-hangman'
                }, 
                {
                    img:'https://i.imgur.com/4g02o6u.png', 
                    url:'https://codepen.io/djskim27/full/EmLvKj/',
                    title: 'Random Quote Generator',
                    build: 'HTML/CSS, jQuery, Ajax, Forismatic API',
                    github: 'https://github.com/djskim27/random-quote-generator'
                }
        ]
        }
    }
  render() {
      const projects = this.state.projects.map((project, i) => {
          return <Image className='img-wrap'>
                    <img src={project.img}/>
                    <a href={project.url} target='blank' className='description-link'> <div className='description-layer'>
                        <p className='description'><strong>{project.title}</strong></p>
                        

                        

                    </div>
                    </a>
                </Image>
      })
    return (
      <ProjectContainer>
        <h1><strong>My Projects</strong></h1>
        <ImageContainer>
        {projects}
        </ImageContainer>
        <h3>Like what you see? Contact Me! <Link to='/contact'><button className='contact-me-btn contact-bounce-to-right'><FaArrowRight size={25}/></button></Link></h3>
        
      </ProjectContainer>
    )
  }
}
