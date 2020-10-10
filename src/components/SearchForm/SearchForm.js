import React, {useContext, useState} from 'react';
// context
import Context from '../../Context';
// api function import
import apiFetch from '../../api-services';
// css
import './SearchForm.css';

export default function SearchForm() {
  const context = useContext(Context);

  const [searchTerm, setSearchTerm] = useState('');

  const searchTermHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  const searchApi = (e) => {
    e.preventDefault();
    apiFetch(`https://swapi-thinkful.herokuapp.com/api/people/?search=${searchTerm}`)
    .then(searchResults => {
      context.addData(searchResults.results)
    })
  }

  return(
    <form className='search_form_main'
    onSubmit={(e) => searchApi(e)}
    > 
      <label to='search'>Search for anything Star Wars Related: </label>
      <input 
      // html attributes
      type='text' name='search' id='search' 
      // event handler
      onChange={(e) => searchTermHandler(e)}
      />
      <input type='submit' />
    </form>
  )
}