import React, { Component } from 'react'
import convertTime from './convert-time'

class CountUp extends Component {
  constructor () {
    super()
    this.startTime = Date.now()
    this.state = { time: 0 }
    this.tick = this.tick.bind(this)
  }

  componentDidMount () {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({ time: Date.now() - this.startTime })
  }

  render () {
    return <span>{convertTime(Math.round(this.state.time / 1000))}</span>
  }
}
export default CountUp
