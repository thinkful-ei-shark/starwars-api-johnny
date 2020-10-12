import React, { useContext, useState } from 'react';
// context
import Context from '../../Context';
// api function import
import apiFetch from '../../api-services';
// css


export default function SearchForm() {
  // add context so that we can pass data up to App.js
  const context = useContext(Context);
  // state that stores users search term
  const [searchTerm, setSearchTerm] = useState('');
  // state that stores dropdown selection
  const [category, setCategory] = useState('people');
  // two way binding for input to state
  const searchTermHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
  };
  // two way binding for category selection
  const categoryHandler = (e) => {
    setCategory(e.currentTarget.value);
  }
  /* 
  * api fetch using imported function
  * passing the parsed data through context to App.js
  */
  const searchApi = (e) => {
    e.preventDefault();
    apiFetch(`https://swapi-thinkful.herokuapp.com/api/${category}/?search=${searchTerm}`)
      .then(searchResults => {
        context.addData(searchResults.results)
      })
  }

// Being able to select whether you want to search for planets
// , spaceships, vehicles, characters, films or species

  return (
    <form className='search_form_main'
      onSubmit={(e) => searchApi(e)}
    >
      <label className='text-6xl text-white' to='search'>Search for anything Star Wars Related: </label>
      <input
        // html attributes
        type='text' name='search' id='search'
        // event handler
        onChange={(e) => searchTermHandler(e)}
      />
      <select onChange={(e) => categoryHandler(e)}>
        <option value='people'>Characters</option>
        <option value='starships'>Starships</option>
        <option value='vehicles'>Vehicles</option>
        <option value='films'>Films</option>
        <option value='species'>Species</option>
      </select>
      <input type='submit' />
    </form>
  )
}