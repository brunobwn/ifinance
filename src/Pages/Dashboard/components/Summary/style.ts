import styled from 'styled-components';

export const TotalsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: -4rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  & .card {
    background-color: white;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    min-height: 8rem;
  }

  & p:first-child {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    img {
      width: 2rem;
      object-fit: contain;
    }
  }

  & p:last-child {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  .despesa {
    color: var(--red);
  }

  .receita {
    color: var(--green);
  }
`;
