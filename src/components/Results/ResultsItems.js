import React from 'react';
import './ResultsItems.css'

export default function ResultsItems(props) {
  const {birth_year, eye_color, films, gender, hair_color, height, homeworld, mass, name} = props.data

  /*
  * Look up useEffect for componentDidMount
  */

  const [newHomeworld, setnewHomeworld] = React.useState();
  const homeWorldData = async () => {
    await fetch(homeworld, {
      headers: {
        'content-type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setnewHomeworld(data.name);
      console.log(data);
    })
  }
  homeWorldData();
  /*
  * export homeWorldService = { data: (cb) => {...; cb(data);}} 
  * cb = callback
  * Example usage:
  * homeWorldService.data((obj) => {
  *   console.log(obj.key);
  * });
  * 
  * response object always has a data property on success.
  * response object always has an error property on failure.
  */
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