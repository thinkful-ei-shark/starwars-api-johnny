import React, {useState} from 'react';

// components
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import CharacterResults from './components/CharacterResults/CharacterResults';
import StarshipResults from './components/StarshipsResults/StarshipResults'
import Loading from './components/Loading/Loading'

// context
import Context from './Context';

import './App.css';

function App() {

  const [data, setData] = useState([])
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)

  const loadingHandler = (val) => {
    setLoading(val);
  }

  const addSearchDataHandler = (newData, category) => {
    setData(newData);
    setCategory(category);
  }

  const categoryRender = (category) => {
    if(loading) {
      return <Loading />
    }
    else if(category === 'people') {
      return <CharacterResults data={data} />
    } else if(category === 'starships') {
      return <StarshipResults data={data} />
    }
  }



  const value = {
    addSearchData: addSearchDataHandler,
    setLoading: loadingHandler,
  }
  console.log('this is data state', data);
  return (
    <Context.Provider value={value}>
    <div className="App">
      <Header />
      <SearchForm />
      {categoryRender(category)}
    </div>
    </Context.Provider>
  );
}

export default App;
