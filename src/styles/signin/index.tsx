import { styled } from '@mui/system';
import { Input as AntdInput } from 'antd';
import { AppBar, Grid, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { transparentize } from 'polished';
import img from '../../images/bg.jpg';

export const Layout = styled('div')`
  display: flex;
  background: #fff;
  height: 100vh;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled('div')`
  flex: 2;
  height: 100vh;

  background: url(${img}) no-repeat center center;
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    user-select: none;
    font-size: 1.3rem;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-left: 1.5rem;
`;

export const CustomTextField = styled(TextField)`
  .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after {
    border-bottom: 2px solid #333;
  }
  .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #333;
  }

  .css-gjbq6i-MuiInputBase-root-MuiFilledInput-root:after {
    color: #333;
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

export const Container = styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled('main')`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: -1rem;
  }

  > div {
    background: #fafafa;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      margin-top: 24px;
      width: 60%;
    }

    section {
      width: 100%;
      background: #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: auto;

      h3 {
        color: #01a5b1;
        font-weight: bold;
        font-size: 1rem;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const Button = styled('button')`
  height: 3rem;
  width: 100%;
  background: #333;
  color: #fff;
  font-weight: bold;
  border: none;
  margin: 1.5rem 0;

  &:hover {
    cursor: pointer;
    /* box-shadow: 0 3px rgb(0, 135, 145); */
  }
`;

export const CustomLoadingButton = styled(LoadingButton)`
  height: 3rem;
  width: 100%;
  background: #333;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 0;
  margin: 1.5rem 0;
  text-transform: none;

  &:hover {
    cursor: pointer;
    background: ${transparentize(0.1, '#333')};
    /* box-shadow: 0 3px rgb(0, 135, 145); */
  }
`;

export const Input = styled(AntdInput)`
  border-radius: 8px;
  border-color: #ced4da;
  color: #495057;
`;

export const Nav = styled(AppBar)`
  background-color: #fff;
  box-shadow: none;

  .gap {
    flex-grow: 1;
    color: #ff5252;
    font-weight: bold;
  }
`;

export const CustomButton = styled('div')`
  color: #333;
  background: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    cursor: pointer;
  }
`;

export const CustomGrid = styled(Grid)`
  height: 100vh;
`;

export const Title = styled('div')`
  margin: 0.2rem 0 0.5rem 0;
  font-weight: bold;
`;
