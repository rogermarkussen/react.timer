import test from 'tape'
import ConvertTime from '../src/convert-time'

test('Time is convertet correct', (t) => {
  let result = ConvertTime(6)
  t.equal(result, '00:06', '6 => 00:06')
  result = ConvertTime(43)
  t.equal(result, '00:43', '43 => 00:43')
  result = ConvertTime(68)
  t.equal(result, '01:08', '68 => 01:08')
  result = ConvertTime(99)
  t.equal(result, '01:39', '99 => 01:39')
  result = ConvertTime(674)
  t.equal(result, '11:14', '674 => 11:14')
  t.end()
})
