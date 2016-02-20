import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import test from 'tape'
import CountUp from '../src/countup'

test('CountUp is returning a span with "00:00"', (t) => {
  const renderer = createRenderer()

  renderer.render(<CountUp />)
  let result = renderer.getRenderOutput()

  t.equal(result.props.children, '00:00', 'CountUp should display "00:00"')
  t.ok(result.type === 'span', 'CountUp is a span')

  t.end()
})
