import styled, { css } from 'styled-components'

export const SelectSearchContainer = styled.div`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-black']};
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.6rem;

  border: none;
  border-radius: 0.4rem;

  .selectCity {
    width: 100%;
    font-size: 0.96rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['brand-primary']};

    background-color: ${({ theme }) => theme.colors['base-white']};
    border-radius: 0.4rem;
  }

  .containerIconSearch {
    background-color: ${({ theme }) => theme.colors['brand-primary']};
    height: 2.44rem;
    padding: 1rem;
    border: none;
    border-radius: 0.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    cursor: pointer;

    :active {
      background-color: ${({ theme }) => theme.colors['brand-primary-light']};
    }

    svg {
      font-size: 1.66rem;
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }
`
