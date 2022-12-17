import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  min-width: 100%;
`;

export const TableTransactions = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;
  text-align: left;

  @media (max-width: 540px) {
    th:nth-child(3),
    td:nth-child(3),
    th:nth-child(4),
    td:nth-child(4) {
      display: none;
    }
  }
  th {
    color: var(--text-color);
    padding: 0.5rem 2rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;

    :first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    :last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }

    :not(:first-child, :nth-child(2)) {
      color: #8e8e8e;
    }
  }

  tbody tr {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
    background-color: white;
    transition: background-color 200ms;

    &:hover {
      background-color: ${darken(0.1, '#FFF')};
    }
  }

  .despesa {
    color: var(--red);
  }

  .receita {
    color: var(--green);
  }
`;
