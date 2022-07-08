import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 4rem 6rem 0 6rem;
  line-height: 0.8;
  user-select: none;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;

  justify-content: space-between;
  align-items: center;
`;

export const BalanceTile = styled.div`
  .row {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    align-items: center;
  }
`;

export const BalanceIcon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background: #c9c9c9;
  border-radius: 50%;

  display: flex;

  justify-content: center;
  align-items: center;
`;

interface BalanceValueProps {
  isGreater?: boolean;
  isBalance?: boolean;
}

export const BalanceValue = styled.h1<BalanceValueProps>`
  font-size: 1.5rem;
  font-weight: 500;

  margin: 0;

  color: ${({ isGreater, isBalance }) =>
    isBalance ? (isGreater ? '#33cc95' : '#ff5252') : '#333'};
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background: #c9c9c9;
  border-radius: 50%;

  display: flex;

  justify-content: center;
  align-items: center;

  font-weight: bold;
`;
