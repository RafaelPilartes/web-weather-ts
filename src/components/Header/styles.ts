import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;

  border-bottom: 0.01rem solid
    ${({ theme }) => theme.colors['brand-primary-light-opacity']};

  img {
    width: 18rem;
  }
`
