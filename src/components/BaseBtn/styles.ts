import styled, { css } from 'styled-components'

type BaseBtnStyleType = {
  colorTxt?: string
  colorBg?: string
}

export const BaseBtnContainer = styled.button<BaseBtnStyleType>`
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-black']};
  padding: 0.9rem;

  border: none;
  border-radius: 0.4rem;

  ${({ colorTxt, colorBg }) =>
    css`
      background-color: ${colorBg
        ? colorBg
        : ({ theme }) => theme.colors['brand-secondary']};
      color: ${colorTxt ? colorTxt : ({ theme }) => theme.colors['base-black']};
    `}
`
