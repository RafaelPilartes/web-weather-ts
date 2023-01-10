import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .containerBottom {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 2.6rem 0.4rem;

    p {
      font-size: 0.9rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors['brand-primary-light']};
    }
  }
`
