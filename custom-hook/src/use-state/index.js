import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

import useXState from './hook'

function App () {
  let [ count, setCount ] = useXState(0)
  let [ name, setName ] = useXState('shen')

  return (
    <div>
      <p>{count}</p>
      <p>{name}</p>
      <button onClick={() => setCount((pre) => pre + 1, (curState) => { console.log('count', curState)})}>点我</button><br/>
      <button onClick={() => setName('kong')}>改变名字</button>
    </div>
  )
}

render(
  <App></App>,
  document.getElementById('root')
)
