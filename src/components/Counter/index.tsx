import { useState, KeyboardEvent, useEffect, useRef } from 'react'

import { CounterContainer } from './styles'

type CounterType = {
  number: number
  title: string
}

function Counter({ number, title }: CounterType) {
  return (
    <CounterContainer>
      <h3 className="counterNumber">{number}</h3>
      <p className="counterNumber">{title}</p>
    </CounterContainer>
  )
}

export default Counter
