import React from 'react'
import { render } from 'react-dom'
import Timer from '../src/timer'

const test = (
  <div>
    <h3>CountDown</h3>
    <div>
      <Timer countDown startTime={15} />
    </div>
    <h3>CountUp</h3>
    <div>
      <Timer />
    </div>
  </div>
  )

render(test, document.getElementById('root'))
