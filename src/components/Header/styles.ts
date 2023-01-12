import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;

  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.99);

  border-bottom: 0.01rem solid
    ${({ theme }) => theme.colors['brand-primary-light-opacity']};

  img {
    width: 18rem;
  }
`
