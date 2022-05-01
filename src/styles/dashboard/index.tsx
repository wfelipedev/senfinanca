import { styled } from '@mui/system';
import { TableRow } from '@mui/material';

export const Main = styled('div')`
  height: 100vh;
  min-width: calc(100vw - 220px);
  padding: 4rem;

  .title {
    font-weight: bold;
    user-select: none;
  }

  .clickable-text {
    color: #e7a0a2;
    cursor: pointer;
  }
`;

export const Greetings = styled('div')`
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
