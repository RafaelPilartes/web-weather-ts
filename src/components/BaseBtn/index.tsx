import { useState, KeyboardEvent, useEffect, useRef } from 'react'

import { BaseBtnContainer } from './styles'

type BaseBtnType = {
  title: string
  colorTxt?: string
  colorBg?: string
  onClick?: () => void
}

function BaseBtn({ title, colorTxt, colorBg, onClick }: BaseBtnType) {
  return (
    <BaseBtnContainer colorTxt={colorTxt} colorBg={colorBg} onClick={onClick}>
      {title}
    </BaseBtnContainer>
  )
}

export default BaseBtn
