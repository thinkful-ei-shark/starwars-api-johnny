import React, { useContext, useState } from 'react';
// context
import Context from '../../Context';
// api function import
import apiFetch from '../../api-services';
// css
import './SearchForm.css'

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
    context.setLoading(true);
    apiFetch.initFetch(`https://swapi-thinkful.herokuapp.com/api/${category}/?search=${searchTerm}`)
      .then(searchResults => {
        context.addSearchData(searchResults.results, category)
        context.setLoading(false);
      })
  }

  // conditional rendering on search label
  let categoryPicked;
  const searchLabelConditionalRender = () => {
    if(category === 'people') {
      categoryPicked = 'Characters'
    } else {
      categoryPicked = category.charAt(0).toUpperCase() + category.slice(1)
    }
  }

  searchLabelConditionalRender();

// Being able to select whether you want to search for planets
// , spaceships, vehicles, characters, films or species

  return (
    <form className='search-form__main'
      onSubmit={(e) => searchApi(e)}
    >
      <label htmlFor='categorySelect' className='search-form__select-label'>Select a Category:</label>
      <select className='search-form__select' id='categorySelect' onChange={(e) => categoryHandler(e)}>
        <option value='people'>Characters</option>
        <option value='starships'>Starships</option>
      </select>
      <label className='search-form__input-label' htmlFor='search'>Search for anything Star Wars {categoryPicked} Related: </label>
      <input
        // html attributes
        className='search-form__input'
        type='text' name='search' id='search'
        placeholder={`${categoryPicked} name`}
        // event handler
        onChange={(e) => searchTermHandler(e)}
      />
      <input className='search-form__submit' type='submit' />
    </form>
  )
}