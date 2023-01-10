import { useState, KeyboardEvent, useEffect, useRef } from 'react'

import { HeaderContainer } from './styles'
import todoLogo from '../../assets/logo/countdownLogo.svg'

function Header() {
  return (
    <HeaderContainer>
      <img src={todoLogo}></img>
    </HeaderContainer>
  )
}

export default Header
