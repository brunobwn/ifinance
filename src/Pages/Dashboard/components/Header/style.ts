import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 12rem;
  background-color: var(--blue);
  padding: 0.5rem;

  div.content {
    max-width: 62rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2rem 0.5rem;

    p {
      color: white;
      font-size: 125%;
      font-weight: 600;
      display: flex;
      align-items: center;

      span {
        background-color: white;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        object-fit: contain;
        display: inline-block;
        margin-right: 1rem;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          width: 60%;
          height: 60%;
        }
      }
    }

    button {
      padding: 0 2rem;
      height: 3rem;
      background-color: ${lighten(0.1, '#227C9D')};
      border-radius: 0.25rem;
      border: 0;
      text-transform: uppercase;
      color: white;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      font-weight: 500;
      transition: filter 200ms;

      &:hover {
        filter: opacity(0.8);
      }
    }
  }
`;
