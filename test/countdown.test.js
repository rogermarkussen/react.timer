import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import test from 'ava'
import CountDown from '../src/countdown'

test('CountDown is returning a span with 30', (t) => {
  const renderer = createRenderer()

  renderer.render(<CountDown startTime={30} />)
  let result = renderer.getRenderOutput()

  t.is(result.props.children, 30, 'CountDown should display 30')
  t.ok(result.type === 'span', 'CountDown is a span')
})

test('CountDown is returning a span with "4.7" in color red', (t) => {
  const renderer = createRenderer()

  renderer.render(<CountDown startTime={4.7} />)
  let result = renderer.getRenderOutput()

  t.is(result.props.children, '4.7', 'CountDown should display "4.7"')
  t.is(result.props.style.color, 'red', 'The number should be red')
  t.ok(result.type === 'span', 'CountDown is a span')
})
