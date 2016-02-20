import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import test from 'tape'
import Timer from '../src/timer'

test('Timer is ok when getting countDown=true and startTime={30}', (t) => {
  const renderer = createRenderer()

  renderer.render(<Timer countDown startTime={30} />)
  let result = renderer.getRenderOutput()

  t.ok(result._owner._currentElement.props.countDown, 'countDown-prop should be true')
  t.equal(result._owner._currentElement.props.startTime, 30, 'startTime-prop should be 30')
  t.ok(result.type !== 'span', 'Timer is not returning a span')

  t.end()
})

test('Timer is only returning <span/> when getting countDown=true and startTime={0}', (t) => {
  const renderer = createRenderer()

  renderer.render(<Timer countDown startTime={0} />)
  let result = renderer.getRenderOutput()

  t.ok(result._owner._currentElement.props.countDown, 'countDown-prop should be true')
  t.equal(result._owner._currentElement.props.startTime, 0, 'startTime-prop should be 0')
  t.ok(result.type === 'span', 'Timer is returning a span')

  t.end()
})

test('Timer is only returning <span/> when getting countDown=true and startTime=undefined', (t) => {
  const renderer = createRenderer()

  renderer.render(<Timer countDown />)
  let result = renderer.getRenderOutput()

  t.ok(result._owner._currentElement.props.countDown, 'countDown-prop should be true')
  t.equal(result._owner._currentElement.props.startTime, undefined, 'startTime-prop should be undefined')
  t.ok(result.type === 'span', 'Timer is returning a span')

  t.end()
})

test('Timer is ok when getting countDown=false and startTime=undefined', (t) => {
  const renderer = createRenderer()

  renderer.render(<Timer countDown={false} />)
  let result = renderer.getRenderOutput()

  t.ok(!result._owner._currentElement.props.countDown, 'countDown-prop should be false')
  t.equal(result._owner._currentElement.props.startTime, undefined, 'startTime-prop should be undefined')
  t.ok(result.type !== 'span', 'Timer is not returning a span')

  t.end()
})

test('Timer is ok when getting countDown=false and startTime={30}', (t) => {
  const renderer = createRenderer()

  renderer.render(<Timer countDown={false} startTime={30} />)
  let result = renderer.getRenderOutput()

  t.ok(!result._owner._currentElement.props.countDown, 'countDown-prop should be false')
  t.equal(result._owner._currentElement.props.startTime, 30, 'startTime-prop should be 30')
  t.ok(result.type !== 'span', 'Timer is not returning a span')

  t.end()
})
