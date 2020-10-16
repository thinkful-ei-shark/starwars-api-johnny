import React, {useState, useEffect} from 'react';

export default function StarshipResultsItems(props) {
  
  // deconstruct props.data to use in jsx, keeping code cleaner
  const {costs_in_credits, films, hyperdrive_rating, model, name, starship_class} = props.data;

  const [filmList, setFilmList] = useState([])

  // use effect to mimic component did mount
  useEffect(() => {
    let mounted = true;
    // fetch film data
    const filmsDataFetch = async ()  => {
      await films.forEach(film => {
        fetch(film, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if(mounted) {
            return response.json()
          }
        })
        // store films parsed data into filmList, adding not overwriting
        .then(data => setFilmList(filmList => [...filmList, data.title]))
      })
    }

    filmsDataFetch()
    // clean up useEffect
    return function cleanup() {
      mounted = false;
    }
  }, [])


// map and return a jsx list of each film

  const renderFilms = filmList.map((film, index) => {
    return <li key={index}>{film}</li>
  })


  return (
    <div className='results_container'>
    <h3 className='results_header'>{name}</h3>
    <ul>
      <li className='results_film-list'>Can be seen in:
        <ul>
          {renderFilms}
        </ul>
      </li>
      <li>Costs: {costs_in_credits}</li>
      <li>Hyperdrive Rating: {hyperdrive_rating}</li>
      <li>Model: {model}</li>
      <li>Name: {name}</li>
      <li>Class: {starship_class}</li>
    </ul>
  </div>
  )
} 