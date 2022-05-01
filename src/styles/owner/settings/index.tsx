import { styled } from '@mui/system';
import { TextField } from '@mui/material';

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

export const SearchBox = styled('div')`
  height: 4rem;
  width: 100%;
  margin-bottom: 5rem;
  font-weight: bold;
  font-size: 1.5rem;

  display: flex;
  flex-direction: row;
`;

export const Tile = styled('div')`
  height: 8rem;
  width: 16rem;
  background: #ffffff;
  border-radius: 1rem;
  margin-right: 1rem;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
`;

export const TextFieldCustom = styled(TextField)`
  .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after {
    border-bottom: 2px solid #333;
  }

  .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #333;
  }
`;
