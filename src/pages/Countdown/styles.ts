import styled from 'styled-components'

export const CountdownTimerContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 38rem;
    padding: 0 1.6rem;

    padding: 2rem 0;

    display: flex;
    flex-direction: column;

    .countdown {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1.4rem 0;

      h1 {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors['brand-primary-light']};
        align-self: center;
      }

      .timer {
        display: flex;
        flex-direction: row;
      }
    }

    .containerCountdown {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      h1 {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors['brand-primary-light']};
      }

      .containerDateCountdown {
        display: flex;
        flex-direction: column;
        gap: 1rem 0;

        .dateCountdown {
          font-size: 0.96rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['brand-primary-light']};

          background-color: transparent;
          padding: 0.8rem;
          border: 0.01rem solid
            ${({ theme }) => theme.colors['brand-primary-light']};
          border-radius: 0.4rem;

          ::-webkit-calendar-picker-indicator {
            filter: invert(1);
          }
        }
      }

      .containerCountdown {
        font-size: 0.9rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors['brand-primary-light']};

        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid
          ${({ theme }) => theme.colors['brand-primary-light']};
      }

      .containerSpecialDates {
        display: flex;
        flex-wrap: wrap;

        flex-direction: row;
        justify-content: space-between;

        .SpecialDates {
          display: flex;
          gap: 0.4rem;

          background-color: transparent;
          border: none;

          svg {
            color: ${({ theme }) => theme.colors['brand-secondary']};
          }

          span {
            font-size: 0.99rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors['brand-secondary']};
          }
        }
      }

      .containerNameCountdown {
        display: flex;
        flex-direction: column;
        gap: 1rem 0;

        .nameCountdown {
          font-size: 0.96rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['brand-primary-light']};

          background-color: transparent;
          padding: 0.8rem;
          border: 0.01rem solid
            ${({ theme }) => theme.colors['brand-primary-light']};
          border-radius: 0.4rem;
        }
      }

      .btnInitCountdown {
        font-size: 0.9rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors['base-black']};
        padding: 0.9rem;

        background-color: ${({ theme }) => theme.colors['brand-secondary']};
        border: none;
        border-radius: 0.4rem;
      }
    }
  }
`
