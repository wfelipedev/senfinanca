import { TableRow, TextField } from '@mui/material';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled('div')`
  height: 100vh;
  min-width: calc(100vw - 220px);
  padding: 4rem;

  font-family: 'Barlow', sans-serif;
`;

export const SearchBox = styled('div')`
  height: 4rem;
  width: 100%;
  margin-bottom: 4rem;
  font-weight: bold;
  font-size: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled('div')`
  height: 3rem;
  width: 8rem;
  background: #333;
  color: #fff;
  font-size: 0.8rem;
  border-left: solid 0.2rem;
  border-radius: 0;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  user-select: none;
  text-transform: none;

  &:hover {
    cursor: pointer;
    background: ${transparentize(0.1, '#333')};
  }
`;

export const EmptyContainer = styled('div')`
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

interface TextfieldProps {
  isSearch: boolean;
}

export const SearchfieldCustom = styled(TextField)<TextfieldProps>`
  width: ${(props) => (props.isSearch ? '100%' : '30%')};

  .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after {
    border-bottom: 2px solid #333;
  }

  .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    font-weight: bold;
    color: #333;
  }

  .css-10i04qz-MuiInputBase-root-MuiFilledInput-root {
    height: 56px;
  }

  .css-11qvwfa-MuiFormLabel-root-MuiInputLabel-root {
    color: #333;
    font-weight: bold;
  }
`;

export const Partial = styled.div`
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
    margin: 0 0 0 0.2rem;
    font-size: 1rem;
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

export const ActionButton = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  justify-content: center;
  align-items: center;

  transition: 0.5s;

  .icon {
    &:hover {
      cursor: pointer;
    }
  }

  .trash {
    &:hover {
      transition: 0.5s;
      color: #ff5353;
    }
  }
`;
