import { darken, transparentize } from 'polished';
import styled from 'styled-components';

export const NewTransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid ${darken(0.05, '#FFF')};

    &::placeholder {
      color: var(--text-color);
    }
  }

  [type='submit'] {
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: var(--green);
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 200ms;
    border: 0;
    margin-top: 1rem;

    &:hover {
      background-color: ${darken(0.1, '#17C3B2')};
    }
  }

  .radioBtn {
    display: flex;
    gap: 1rem;
    color: var(--text-color);

    button {
      width: 50%;
      padding: 0 1rem;
      height: 4rem;
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: ${transparentize(0.8, '#227C9D')};
      background-color: ${darken(0.05, '#FFF')};
      font-weight: 500;
      transition: background-color 200ms;

      &.receita {
        background-color: ${transparentize(0.8, '#17C3B2')};
      }

      &.despesa {
        background-color: ${transparentize(0.8, '#FE6D73')};
      }

      img {
        width: 1.5rem;
      }
    }
  }
`;
