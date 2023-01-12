import styled, { css } from 'styled-components'

export const ForecastContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors['base-black']};
  background-color: ${({ theme }) => theme.colors['base-white']};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;

  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.8rem;

  .accordion {
    width: 100%;
  }

  .title {
    font-size: 23px;
    font-weight: 700;
  }

  .daily-item {
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 1rem;
    margin: 0.6rem;
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 0.9rem;
    padding: 0.3rem 1.4rem;
  }

  .icon-small {
    width: 2.4rem;
  }

  .daily-item .day {
    cursor: inherit;
    color: #212121;
    flex: 1 1;
    font-weight: 600;
    margin-left: 0.9rem;
  }

  .description {
    cursor: inherit;
    flex: 1 1;
    margin-right: 0.9rem;
    text-align: right;
  }

  .min-max {
    color: #757575;
  }

  .daily-details-grid {
    grid-row-gap: 0;
    grid-column-gap: 0.9rem;
    -webkit-column-gap: 0.9rem;
    column-gap: 0.9rem;
    display: grid;
    flex: 1 1;
    grid-template-columns: auto auto;
    padding: 0.4rem 0.9rem;
    row-gap: 0;
  }

  .daily-details-grid-item {
    align-items: center;
    display: flex;
    height: 1.6rem;
    justify-content: space-between;
  }

  .daily-details-grid-item label:first-child {
    color: #757575;
  }

  .daily-details-grid-item label:last-child {
    color: #212121;
  }
`
