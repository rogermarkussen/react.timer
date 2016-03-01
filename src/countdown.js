import React, { PropTypes, Component } from 'react'

class CountDown extends Component {
  constructor (props) {
    super(props)
    this.state = { time: props.startTime * 10 }
    this.tick = this.tick.bind(this)
    const now = new Date()
    this.stopTime = now.setMilliseconds(now.getMilliseconds() + props.startTime * 1000)
  }

  componentDidMount () {
    this.time = setInterval(this.tick, 100)
  }

  componentWillUnmount () {
    clearInterval(this.time)
  }

  tick () {
    const now = Date.now()
    if (this.stopTime - now <= 0) {
      this.setState({ time: 0 })
      clearInterval(this.time)
    } else this.setState({ time: Math.round((this.stopTime - now) / 100) })
  }

  render () {
    const time = this.state.time / 10
    const seconds = Math.floor(time)
    if (seconds > 9) return <span>{seconds}</span>
    return <span style={{ color: 'red' }}>{time.toFixed(1)}</span>
  }
}
CountDown.propTypes = {
  startTime: PropTypes.number.isRequired
}
export default CountDown
