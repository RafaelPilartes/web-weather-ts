import styled from 'styled-components'

export const CounterContainer = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3,
  p {
    color: ${({ theme }) => theme.colors['brand-primary-light']};
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      Liberation Mono, Courier New, monospace;
  }

  h3 {
    font-size: 3.4rem;
    font-weight: 500;
  }

  p {
    font-size: 1.8rem;
  }
`
