import React, { Component } from 'react';
import './App.sass';
import Car from './Components/Car/Car';

class App extends Component {
  state = {
    cars: [
      {name: "Mazda", year: 2016},
      {name: "Ford", year: 2014},
      {name: "Tesla", year: 2018},
      {name: "Ferrari", year: 2010},
    ],
    pageTitle: "Cards Car"
  }


  changeTopTitleHandler = () => {
    console.log("Click")
  }

  render() { 

   const car = this.state.cars
  
   return (
    <div className="App">
      <div className="topTitle">
         <h3>{this.state.pageTitle}</h3>
      </div>

      <button className="butTitle" onClick={this.changeTopTitleHandler}>Change title</button>

      <div className="carList">
         <Car name={car[0].name} year={car[0].year} colorz={'Red'} />
         <Car name={car[1].name} year={car[1].year} colorz={'Blue'} />
         <Car name={car[2].name} year={car[2].year} colorz={'White'} />
         <Car name={car[3].name} year={car[3].year} colorz={'Green'} />
      </div>
    </div>
   );
  }
}
export default App;