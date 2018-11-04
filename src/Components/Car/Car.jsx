import React from 'react';
import './Car.sass';

export default (props) => (
    <div className="car">
        <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        <p>Color: <span style = {{ color: "blue" }}> {props.colorz} </span></p>
    </div>
)