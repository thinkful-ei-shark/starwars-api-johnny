import React from 'react';
import StarshipResultsItems from './StarshipResultsItems';

export default function Results(props) {
  console.log('result props', props.data)
  const results = props.data.map((result) => {
    return <StarshipResultsItems key={result.created} data={result}  />
  })

  return(
    <div className='results_list'>
      {results}
    </div>
  )
}