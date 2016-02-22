# react.timer
A super simple timer component made in ReactJS
#### What is react.timer?
This is a very simple timer component that can count up or down. 
It only returns a span with the counting digits.
On countUp it starts on 00:00 and counts with increments of one second.
On countDown it starts on a startTime in seconds gotten from props and counts down
to zero. The last 10 seconds the color is red and showing tens.
#### Example of countUp
~~~
import React from 'react'
import Timer from 'react.timer'
function () {
  return <Timer />
}
/* 00:00 -> 00:01 -> ... -> 12:31 (mm:ss) */
~~~
#### Example of countDown
~~~
import React from 'react'
import Timer from 'react.timer'
function () {
  return <Timer countDown startTime={30} />
}
/* 30 -> 29 -> ... -> <red> 9.9 -> 9.8 -> ... -> 0.0 </red> */
~~~
#### Install
npm i react.timer
#### To run the example
- Clone the repo
- npm i
- npm start  

#### To run the 27 tests
- clone the repo
- npm i
- npm test
  

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

