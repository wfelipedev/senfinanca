import { Grid } from '@mui/material';
import { transparentize } from 'polished';
import styled from 'styled-components';
import img from '../../assets/images/bg.jpg';

export const Container = styled('div')`
  height: 100vh;
  background: #fff;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled('div')`
  flex: 2;
  height: 100vh;

  background: url(${img}) no-repeat center center;
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    margin: 0;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin: 1rem 0 0 1.5rem;

  .text {
    color: #fff;
    user-select: none;
    font-size: 1.3rem;
  }
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
      height: 3.5rem;
      width: 100%;
      background: #f1f1f1;

      display: flex;
      align-items: center;
      justify-content: center;

      .text {
        color: #333;
        font-weight: bold;
        font-size: 1rem;
        margin: 0;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const Form = styled(Grid)`
  height: 100vh;

  .form {
    margin: 0;
  }

  .button {
    height: 3.5rem;
    width: 100%;
    margin: 1rem 0;
    background: #333;
    color: #fff;

    border: none;
    border-radius: 0;
    text-transform: none;
    font-weight: bold;

    .progress {
      color: #fff;
    }

    &:hover {
      cursor: pointer;
      background: ${transparentize(0.1, '#333')};
    }
  }
`;

export const Title = styled('div')`
  margin: 0.2rem 0 0.5rem 0;
  font-weight: bold;
`;
