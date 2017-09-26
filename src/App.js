import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import GlobalNavbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <GlobalNavbar />
        <Footer />
        <Route exact path = '/' component={Homepage}/>
        <Route exact path = '/about' component={About}/>
        <Route exact path = '/projects' component={Projects}/>
        <Route exact path = '/contact' component={Contact}/>
      
      </div>
      </Router>
    );
  }
}

export default App;
