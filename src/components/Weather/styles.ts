import styled, { css } from 'styled-components'

export const WeatherContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors['base-black']};
  background-color: ${({ theme }) => theme.colors['base-white']};
  padding: 1.4rem 0.9rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;

  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors['brand-primary-light']};
  border-radius: 0.8rem;

  .containerLotion,
  .containerState,
  .containerOtherInfos {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .containerLotion {
    flex-direction: row;
    gap: 0.4rem;

    svg {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors['brand-secondary']};
    }

    span {
      font-size: 1.8rem;
    }

    /* img {
      width: 4rem;
      height: 4rem;
    } */
  }

  .containerTemperature {
    span {
      font-size: 3.8rem;
      font-weight: 600;
    }
  }

  .containerState {
    flex-direction: row;
    gap: 0.4rem;

    span {
      font-size: 1rem;
      font-weight: 600;
    }
    img {
      width: 3.5rem;
    }
  }

  .containerOtherInfos {
    flex-direction: row;
    gap: 0.6rem;

    > div.containerInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 0.2rem;
      padding: 0.2rem 1rem;

      svg,
      span {
        font-size: 1.14rem;
      }

      svg {
        color: ${({ theme }) => theme.colors['brand-primary']};
      }
    }

    .divider {
      height: 1.4rem;
      width: 0.1rem;
      background-color: ${({ theme }) => theme.colors['brand-primary']};
    }
  }
`
