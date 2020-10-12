import React, {useState} from 'react';

// components
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import CharacterResults from './components/CharacterResults/CharacterResults';
import StarshipResults from './components/StarshipsResults/StarshipResults'

// context
import Context from './Context';

import './App.css';

function App() {

  const [data, setData] = useState([])
  const [category, setCategory] = useState('')

  const addSearchDataHandler = (newData, category) => {
    setData(newData);
    setCategory(category);
  }



  const value = {
    addSearchData: addSearchDataHandler,
  }
  console.log('this is data state', data);
  return (
    <Context.Provider value={value}>
    <div className="App">
      <Header />
      <SearchForm />
      {category === 'people' && <CharacterResults data={data} />}
      {category === 'starships' && <StarshipResults data={data} />}
    </div>
    </Context.Provider>
  );
}

export default App;
