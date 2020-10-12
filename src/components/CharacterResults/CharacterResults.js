import React from 'react';
import ResultsItems from './CharacterResultsItems';

export default function Results(props) {
  console.log('result props', props.data)
  const results = props.data.map((result) => {
    return <ResultsItems key={result.created} data={result}  />
  })

  return(
    <div className='results_list'>
      {results}
    </div>
  )
}