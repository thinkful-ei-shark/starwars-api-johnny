import React, {useState, useEffect} from 'react';

import apiFetch from '../../api-services';



export default function ResultsItems(props) {
  const {birth_year, eye_color, films, gender, hair_color, height, homeworld, name} = props.data

  /*
  * Look up useEffect for componentDidMount
  */
  
  const [newHomeworld, setnewHomeworld] = useState();
  const [filmList, setFilmList] = useState([]);
  

  useEffect(() => {
    const homeworldDataFetch = async ()  => {
      await apiFetch(homeworld)
      // setting newHomeworld state to the new data passed from homeworldFetch
      .then(homeworldData => setnewHomeworld(homeworldData.name));
    }

    const filmsDataFetch = async ()  => {
      await films.forEach(film => {
        fetch(film)
        .then(response => response.json())
        .then(data => setFilmList(filmList => [...filmList, data.title]))
      })
    }

    homeworldDataFetch();
    filmsDataFetch()

  }, [])

  const renderFilms = filmList.map((film, index) => {
    return <li key={index}>{film}</li>
  })

  
  // apiFunc.homeworldDataFetch(homeworldURL)

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
        <li>Can be seen in:
          <ul>
            {renderFilms}
          </ul>
        </li>
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