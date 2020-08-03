import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

import usePrevious from './hook'

function App () {
  let [ count, setCount ] = useState(0)
  const preData = usePrevious(count)
  console.log('count', count)
  console.log('preData', preData)

  return (
    <div>
      <h3>now is {count}</h3>
      <h3>pre is {preData}</h3>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}

render(
  <App></App>,
  document.getElementById('root')
)
