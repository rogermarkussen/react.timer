import React, { Component, PropTypes } from 'react'
import convertTime from './convert-time'

class CountUp extends Component {
  constructor (props) {
    super(props)
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
CountUp.propTypes = {
  startTime: PropTypes.number
}
export default CountUp
