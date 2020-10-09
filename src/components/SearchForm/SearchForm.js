import React, {useContext, useState} from 'react';
import Context from '../../Context';
import './SearchForm.css';

export default function SearchForm() {
  const context = useContext(Context);

  const [searchTerm, setSearchTerm] = useState('');

  const searchTermHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  const searchApi = (e) => {
    e.preventDefault();
    fetch(`https://swapi-thinkful.herokuapp.com/api/people/?search=${searchTerm}`)
    .then(response => response.json())
    .then(data => context.addData(data.results))
  }

  return(
    <form className='search_form_main'
    onSubmit={(e) => searchApi(e)}
    > 
      <label to=''>Search for anything Star Wars Related: </label>
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