import React, { Component } from 'react'
import styled from 'styled-components';

const ProjectContainer = styled.div`

    height: 100%;
    background: #0074D9 no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 10%;
    padding-bottom: 10%;

`
const Image = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 333px;
    height: 200px;
    img {
        width: 333px;
        height: 200px;
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
        <ImageContainer>
        {projects}
        </ImageContainer>
        
      </ProjectContainer>
    )
  }
}
