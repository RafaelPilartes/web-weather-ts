import styled, { css } from 'styled-components'

type ContainerLayoutProps = {
  background: string
}

export const ContainerLayout = styled.div<ContainerLayoutProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ background }) =>
    css`
      background-image: url(${background});
    `}

  .container {
    width: 100%;
  }
`
