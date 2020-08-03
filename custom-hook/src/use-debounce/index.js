import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

import useDebounce from './hook'

function App () {
  let [ count, setCount ] = useState('')
  const debounceData = useDebounce(count, 1000)

  useEffect(() => {
    console.log(debounceData);
  }, [debounceData]);

  return (
    <div>
      <input placeholder="请输入值" onChange={(e) => setCount(e.target.value)} />
    </div>
  )
}

render(
  <App></App>,
  document.getElementById('root')
)
