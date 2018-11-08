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

  // функция меняющая тайтел
  changeTopTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }


  render() { 

   const car = this.state.cars
  
   return (

    <div className="App">
      <div className="topTitle">
         <h3>{this.state.pageTitle}</h3>
      </div>

      <div className="wrap-btn">

        <input type="text" onChange={this.changledInp}/>

        <button className="butTitle" onClick={this.changeTopTitleHandler.bind(this, ' changed ' )}>Change title</button>
        {/* 'changed' это передаваемый параметр -> 'props' */}
      </div>

      <div className="wrap-carList">
        <div className="carList">
         <Car name={car[0].name} 
              year={car[0].year} 
              colorz={'Red'} 
              onChanegTit={ this.changeTopTitleHandler.bind(this, car[0].name) } />
         <Car name={car[1].name} 
              year={car[1].year} 
              colorz={'Blue'} 
              onChanegTit={ this.changeTopTitleHandler.bind(this, car[1].name) } />
         <Car name={car[2].name} 
              year={car[2].year} 
              colorz={'White'} 
              onChanegTit={ this.changeTopTitleHandler.bind(this, car[2].name) } />
         <Car name={car[3].name} 
              year={car[3].year} 
              colorz={'Green'} 
              onChanegTit={ this.changeTopTitleHandler.bind(this, car[3].name) } />
        </div>
      </div>

    </div>
  
   );
  }
}
export default App;