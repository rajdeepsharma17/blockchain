import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Navigation from './components/Navigation/Navigation';
import Peers from './components/Peers/Peers';
import MainForm from './components/MainForm/MainForm';
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Peers />
        <MainForm />

      </div>
    );
  }
}

export default App;
