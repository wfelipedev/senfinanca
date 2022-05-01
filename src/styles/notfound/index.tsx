import { transparentize } from 'polished';
import styled from 'styled-components';

export const Empty = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8rem;

  img {
    height: 24rem;
  }

  .subtitle {
    color: #333;
    font-size: 1rem;
    font-weight: bold;
    user-select: none;
  }
`;

export const Main = styled.div`
  height: 100vh;
  padding: 4rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  justify-content: center;
`;

export const Button = styled.div`
  height: 3rem;
  width: 16rem;
  background: #333;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 0;
  margin: 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: ${transparentize(0.1, '#333')};
  }
`;
