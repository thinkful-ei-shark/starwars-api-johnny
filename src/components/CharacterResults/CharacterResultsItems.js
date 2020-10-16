import React, {useState, useEffect} from 'react';

import apiFetch from '../../api-services';

import './CharacterResultsItems.css'



export default function ResultsItems(props) {
  const {birth_year, eye_color, films, gender, hair_color, height, homeworld, name} = props.data

  /*
  * Look up useEffect for componentDidMount
  */
  
  const [newHomeworld, setnewHomeworld] = useState();
  const [filmList, setFilmList] = useState([]);
  

  useEffect(() => {
    let mounted = true;
    // homeworld fetch from apiFetch import
    const homeworldDataParse = async () => {
      await apiFetch.homeworldDataFetch(homeworld)
      .then(homeworldData => {
        if(mounted) {
          setnewHomeworld(homeworldData.name)
        }
      })
    }
    // call each fetch function
    homeworldDataParse();
    return function cleanup() {
      mounted = false;
    }

  }, [])

  useEffect(() => {
      let mounted = true;
      const filmsDataFetch = async ()  => {
          await films.forEach(film => {
            fetch(film)
            .then(response => {
              if(mounted) {
                return  response.json()
              }
            })
            .then(data => setFilmList(filmList => [...filmList, data.title]))
          })
        }
        filmsDataFetch();
        // clean up for useEffect
        return () => mounted = false;
  }, [])
  
  // mapping over filmList state to create a jsx list of films
  const renderFilms = filmList.map((film, index) => {
    return <li key={index}>{film}</li>
  })

  
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
    <div className='results_container'>
      <h3 className='results_header'>{name}</h3>
      <ul>
        <li className='results_film-list'>
          <h3>Can be seen in:</h3>
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