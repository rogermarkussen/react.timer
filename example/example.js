import React from 'react'
import { render } from 'react-dom'
import Timer from '../src/timer'

render(<Timer countDown startTime={15} />, document.getElementById('root'))
