import React from 'react';
import './App.css';
import Container from './container.js';
import Errorboundary from './Errorboundary';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      latitude: '',
      longitude: ''
    };
  }


render(){

  fetch('http://api.open-notify.org/iss-now.json').then(val=>val.json()).then(cords=> {
    this.setState({latitude:cords.iss_position.latitude,longitude:cords.iss_position.longitude});
  })
    return (
      <div className = 'tc'>
      <h1 className='f1 tc'>Live Location Tracker Of</h1>
      <h1 className='f1 tc'>The International Space Station</h1>
      <div class = 'gap1'></div>
      <div class = 'gap1'></div>   
      <Errorboundary>
      <Container Lat ={this.state.latitude} Long = {this.state.longitude} />
      </Errorboundary>
      <div class = 'gap2'></div> 
      <div class = 'gap2'></div>
      <div> <em><strong> Made With Love </strong> </em> </div>
      </div>
      );
}
}

export default App;
