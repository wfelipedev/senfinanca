import { LoadingButton } from '@mui/lab';
import { styled, TableRow, TextField } from '@mui/material';
import { transparentize } from 'polished';

export const Main = styled('div')`
  height: 100vh;
  min-width: calc(100vw - 220px);
  padding: 4rem;

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

  .icon {
    &:hover {
      cursor: pointer;
    }
  }

  transform: 0.5s;
  .trash {
    &:hover {
      transform: 0.5s;
      color: #ff5353;
    }
  }
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
  gap: 0.5rem;
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

export const TextFieldCustom = styled(TextField)`
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

export const SearchButton = styled(LoadingButton)`
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

  .progress {
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    background: ${transparentize(0.1, '#333')};
  }
`;

export const AddButton = styled('div')`
  height: 3rem;
  width: 8rem;
  background: #333;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem;
  border-left: solid 0.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

interface TransactionProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
};

export const TypeButtom = styled('div')<TransactionProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;

  h1 {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  font-size: 1.2rem;
  font-weight: 500;
  color: #333;

  &:hover {
    cursor: pointer;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

interface ActionProps {
  isEdit?: boolean;
}

export const ActionButtons = styled('div')<ActionProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding: 0 1rem;

  .cancel {
    height: 56px;
    width: 8rem;
    margin-right: 1rem;
  }

  .save {
    height: 56px;
    width: 8rem;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const CustomDeleteLoadingButton = styled(LoadingButton)`
  height: 3rem;
  background: #ff5252;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 0;
  margin: 1.5rem 0;

  &:hover {
    background: #ff5252;
    opacity: 0.9;
  }
`;

export const CustomLoadingButton = styled(LoadingButton)`
  height: 3rem;
  background: #333;
  color: #fff;
  font-weight: bold;
  border-radius: 0;
  margin: 1.5rem 0;

  text-transform: none;

  .progress {
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    background: #333;
  }
`;

export const CustomCancelLoadingButton = styled(LoadingButton)`
  height: 3rem;
  background: #fff;
  color: #333;
  font-weight: bold;
  border: 1px solid #f1f1f1;
  border-radius: 0;
  margin: 1.5rem 0;

  transform: 0.5s;

  text-transform: none;

  &:hover {
    color: #333;
    background: rgba(109, 110, 171, 0.2);
    transform: 0.5s;
    border: 1px solid #ffffff;
  }
`;

export const Empty = styled('div')`
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

export const CloseIcon = styled('div')`
  &:hover {
    cursor: pointer;
  }
`;
