import React, { Component } from 'react';
import './App.css';
import Car from './Components/Car/Car';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Car name={'Mazda'} year={2018} colorz={'Red'} />
        <Car name={'Ford'} year={2013} colorz={'Blue'} />
        <Car name={'Tesla'} year={2017} colorz={'White'} />
        <Car name={'Ferrari'} year={2015} colorz={'Red'} />
      </div>
    );
  }
}
export default App;