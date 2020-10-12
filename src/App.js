import React, {useState} from 'react';

// components
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Results from './components/Results/Results';

// context
import Context from './Context';

import './App.css';

function App() {

  const [data, setData] = useState([])
  
  const handleAddData = (newData) => {
    setData(newData)
  }

  const value = {
    addData: handleAddData
  }
  console.log(data);
  return (
    <Context.Provider value={value}>
    <div className="App flex flex-col">
      <Header />
      <SearchForm />
      <Results data={data}/>
    </div>
    </Context.Provider>
  );
}

export default App;
