import { transparentize } from 'polished';
import styled from 'styled-components';

export const Main = styled.div`
  height: 100vh;
  min-width: calc(100vw - 220px);

  font-family: 'Barlow', sans-serif;

  .title {
    font-weight: bold;
    user-select: none;
  }

  .clickable-text {
    color: #e7a0a2;
    cursor: pointer;
  }
`;

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

export const DashboardContainer = styled.div`
  padding: 0 6rem;
  margin-top: 4rem;
`;

export const DashboardMainTileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  justify-content: center;
`;

interface MainTileProps {
  background?: string;
  hasBorder?: boolean;
}

export const DashboardMainTile = styled.div<MainTileProps>`
  height: 32rem;
  width: 50%;

  background: ${(props) => (props.background ? props.background : '#fff')};

  border: ${(props) => (props.hasBorder ? '1px solid #f1f1f1' : '')};
`;

export const MainTileHeader = styled.div`
  padding: 0 1rem;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 2rem;
`;

interface MainTitleTitleProps {
  isTitle?: boolean;
}

export const MainTileTitle = styled.h1<MainTitleTitleProps>`
  font-weight: 600;
  font-size: ${({ isTitle }) => (isTitle ? '1.5rem' : '1rem')};
  user-select: none;
  transition: 0.3s;

  &:hover {
    cursor: ${({ isTitle }) => (isTitle ? '' : 'pointer')};
    transition: 0.3s;
    color: ${({ isTitle }) => (isTitle ? '' : transparentize(0.3, '#333'))};
  }
`;

export const TransactionTile = styled.div`
  height: 5rem;
  padding: 0 1rem;
  transition: 0.5s;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    transition: 0.5s;
    background: #f1f1f1;
    cursor: pointer;
  }
`;

export const TransactionTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const TransactionCreated = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  color: #c9c9c9;
`;

interface TransactionAvatarProps {
  color: string;
}

export const TransactionAvatar = styled.div<TransactionAvatarProps>`
  height: 2.5rem;
  width: 2.5rem;
  background: ${({ color }) => color};
  border-radius: 50%;

  display: flex;

  justify-content: center;
  align-items: center;

  font-weight: bold;
`;

interface TransactionValueProps {
  isGreater: boolean;
}
export const TransactionValue = styled.div<TransactionValueProps>`
  font-weight: 600;
  font-size: 1rem;
  color: ${({ isGreater }) => (isGreater ? '#33cc95' : '#ff5252')};
`;

/* export const Greetings = styled('div')`
  height: 4rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 0.8;
  user-select: none;

  span {
    font-size: 0.8rem;
    color: #a4a9b6;
  }
`;

export const Grades = styled('div')`
  height: 16rem;
  width: 100%;
  background: #ffffff;
  border-radius: 1rem;
  line-height: 0.8;
  padding: 0.5rem 1rem;

  span {
    font-size: 0.8rem;
    color: #a4a9b6;
  }
`;

export const CustomTableRow = styled(TableRow)`
  &:last-child td,
  &:last-child th {
    border: 1;
  }

  .subject {
    font-weight: bold;
  }
`;

export const EyeButton = styled('div')`
  &:hover {
    cursor: pointer;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const BalanceTile = styled('div')`
  height: 8rem;
  width: 33%;
  background: #333;

  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 700;

    margin-left: 0.3rem;

    user-select: none;
  }

  .row {
    display: flex;
    flex-direction: row;

    align-items: center;
  }
`;

interface BalanceProps {
  greater: boolean;
}

export const Balance = styled('div')<BalanceProps>`
  color: ${(props) => (props.greater ? '#33cc95' : '#e52e4d')};
`;
 */
