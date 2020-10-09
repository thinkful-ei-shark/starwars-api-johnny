import React from 'react';
import ResultsItems from './ResultsItems';

export default function Results(props) {
  console.log('result props', props.data)
  const results = props.data.map((result, index) => {
    console.log(result.homeworld)
    return <ResultsItems key={result.created} data={result}  />
  })
  console.log(results);
  return(
    <div className='results_list'>
      {results}
    </div>
  )
}