import React from 'react'
import Springboard from './Springboard/springboard'
import Whiteboard from './Whiteboard/Whiteboard'
import History from './History/History'
import { svgChevron } from '../assets/icons'

export default function App() {
  return (
    <>
    <Springboard />
    <Whiteboard/>
    <History />
    </>
  )
}