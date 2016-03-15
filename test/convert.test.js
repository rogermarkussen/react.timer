import test from 'ava'
import ConvertTime from '../src/convert-time'

test('Time is convertet correct', (t) => {
  let result = ConvertTime(6000)
  t.is(result, '00:06', '6000 => 00:06')
  result = ConvertTime(43000)
  t.is(result, '00:43', '43000 => 00:43')
  result = ConvertTime(68000)
  t.is(result, '01:08', '68000 => 01:08')
  result = ConvertTime(99000)
  t.is(result, '01:39', '99000 => 01:39')
  result = ConvertTime(674000)
  t.is(result, '11:14', '674000 => 11:14')
})
