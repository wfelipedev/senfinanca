import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1.5rem;

  user-select: none;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  h4 {
    margin-left: 0.2rem;
    font-size: 1rem;
  }
`;
