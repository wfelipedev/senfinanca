import styled from 'styled-components';
import { transparentize } from 'polished';
import { LoadingButton } from '@mui/lab';

export const DialogContent = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 10rem;

  background: #e8e654;

  h1 {
    color: #333;
    font-weight: bold;
  }
`;

export const DialogButtonContainer = styled('div')`
  display: flex;
  flex-direction: row;
  height: 4rem;
  width: 100%;
  justify-content: center;

  .row {
    display: flex;
    flex-direction: row;

    width: 100%;

    align-items: center;
  }

  .cancel {
    height: 4rem;
    width: 50%;
    border-top: 1px solid #f1f1f1;

    &:hover {
      border: 0px solid #fff;
      background: ${transparentize(0.9, '#333')};
    }
  }

  .save {
    height: 4rem;
    width: 50%;

    &:hover {
      background: ${transparentize(0.1, '#333')};
    }
  }
`;

export const CustomCancelLoadingButton = styled(LoadingButton)`
  height: 3rem;
  background: #fff;
  color: #333;
  font-weight: bold;
  border: 1px solid #f1f1f1;
  border-radius: 0;
  /* margin: 1.5rem 0; */

  transform: 0.5s;

  text-transform: none;

  &:hover {
    color: #333;
    background: rgba(109, 110, 171, 0.2);
    transform: 0.5s;
    border: 1px solid #ffffff;
  }
`;

export const CustomLoadingButton = styled(LoadingButton)`
  height: 3rem;
  background: #333;
  color: #fff;
  font-weight: bold;
  border-radius: 0;
  /* margin: 1.5rem 0; */

  text-transform: none;

  .progress {
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    background: #333;
  }
`;
