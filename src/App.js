import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Navigation from './components/Navigation/Navigation';
import Peers from './components/Peers/Peers';
import MainForm from './components/MainForm/MainForm';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />
        <Peers />
        <MainForm />

      </div>
    );
  }
}

export default App;
