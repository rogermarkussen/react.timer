export default function (mSec) {
  const seconds = Math.round(mSec / 1000)
  let minutes = Math.floor(seconds / 60)
  let sec = seconds % 60
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  sec = sec < 10 ? `0${sec}` : `${sec}`
  return `${minutes}:${sec}`
}
