import React from 'react';
import './ResultsItems.css'

export default function ResultsItems(props) {
  const {birth_year, eye_color, films, gender, hair_color, height, homeworld, mass, name} = props.data
  let newHomeworld;
  const homeWorldData = () => {
    fetch(homeworld)
    .then(response => response.json())
    .then(data => {
      newHomeworld = data.name
    })
  }
  homeWorldData();
  return(
    <div className='results_item'>
      <h3>{name}</h3>
      <ul>
        <li>Can be seen in: {films}</li>
        <li>Born: {birth_year}</li>
        <li>Home Planet: {newHomeworld}</li>
        <li>Gender: {gender}</li>
        <li>Eye Color: {eye_color}</li>
        <li>Hair Color: {hair_color}</li>
        <li>Height: {height}</li>
      </ul>
    </div>
  )
}