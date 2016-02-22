import React, { Component } from 'react'
import convertTime from './convert-time'

class CountUp extends Component {
  constructor () {
    super()
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
    this.setState({ time: this.state.time + 1 })
  }

  render () {
    return <span>{convertTime(this.state.time)}</span>
  }
}
export default CountUp
