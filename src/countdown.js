import React, { PropTypes, Component } from 'react'

class CountDown extends Component {
  constructor (props) {
    super(props)
    this.state = { time: props.startTime * 10 }
    this.tick = this.tick.bind(this)
  }

  componentDidMount () {
    this.timer = setInterval(this.tick, 100)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({ time: this.state.time > 0 ? this.state.time - 1 : 0 })
  }

  render () {
    if (this.state.time < 1) clearInterval(this.timer)
    const time = this.state.time / 10
    const seconds = Math.round(time)
    if (seconds > 9) return <span>{seconds}</span>
    return <span style={{ color: 'red' }}>{time}</span>
  }
}
CountDown.propTypes = {
  startTime: PropTypes.number.isRequired
}
export default CountDown
