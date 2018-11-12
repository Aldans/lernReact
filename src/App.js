// Динамическое использование данных part 3-6

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

  // функция меняющая тайтл параметр принимает (car.name)
  changeTopTitleHandler = (newTitle) => {
    this.setState({ //Меняет текущий state
      pageTitle: newTitle
    })
  }

  // событие на импут
  hengledInp = (event) => {
    this.setState({
      pageTitle: event.target.value
    })  
  }

  render() { 

   return (

    <div className="App">
      <div className="topTitle">
         <h3>{this.state.pageTitle}</h3>
      </div>

      <div className="wrap-btn">

        <input type="text" onChange={ this.hengledInp }/>

        <button className="butTitle" onClick={this.changeTopTitleHandler.bind(this, ' Changed! ' )}>Change title</button>
        {/* 'changed' это передаваемый параметр -> 'props' */}
      </div>

      <div className="wrap-carList">
        <div className="carList">
          {/* динамический вывод из state обькта(списка авто) */}
          {this.state.cars.map((car, index) => {
            return (
              <Car
                key={ index } // Уникальный индекс для рендеренга нужного елемнта
                name={car.name}
                year={car.year}
                onChanegTit={ () => this.changeTopTitleHandler(car.name) } //Функция колбек
              />
            )
          }) }    

        </div>
      </div>

    </div>
  
   );
  }
}
export default App;
