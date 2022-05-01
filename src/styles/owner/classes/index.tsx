import { styled } from '@mui/system';
import { Drawer, TableCell, TableRow, TextField } from '@mui/material';

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

export const SearchBox = styled('div')`
  height: 4rem;
  width: 100%;
  margin-bottom: 4rem;
  font-weight: bold;
  font-size: 1.5rem;

  display: flex;
  flex-direction: row;
`;

export const Class = styled('div')`
  height: 9rem;
  width: 18rem;
  background: #ffffff;
  border-radius: 0.5rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    padding: 0.5rem 0 0 0.5rem;

    span {
      font-weight: bold;
    }
  }

  .footer {
    height: 2rem;
    text-align: center;
    font-weight: bold;
    border-radius: 0 0 0.5rem 0.5rem;
    background: rgba(25, 118, 210, 0.08);
    color: #e7a0a2;

    &:hover {
      cursor: pointer;
    }
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

export const EyeButton = styled('div')`
  &:hover {
    cursor: pointer;
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

export const CustomTableCell = styled(TableCell)`
  .css-1wvnaxz-MuiTableCell-root.MuiTableCell-head {
    background-color: #333;
    color: #fff;
  }
`;

export const Empty = styled('div')`
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  user-select: none;

  img {
    height: 24rem;
  }

  .subtitle {
    color: #333;
    font-size: 1rem;
    font-weight: bold;
  }
`;
