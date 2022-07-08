import { LoadingButton } from '@mui/lab';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const CloseIcon = styled('div')`
  &:hover {
    cursor: pointer;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  h1 {
    margin: 0 0 0 0.3rem;
  }
`;

interface ActionProps {
  isEdit?: boolean;
}

export const ActionButtons = styled('div')<ActionProps>`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .form {
    margin: 0;
  }

  .cancel {
    height: 3rem;
    width: 7rem;
    background: #fff;
    color: #333;
    font-weight: bold;
    border: 1px solid #f1f1f1;
    border-radius: 0;
    margin-right: 1rem;

    transform: 0.5s;

    text-transform: none;

    &:hover {
      color: #333;
      background: rgba(109, 110, 171, 0.2);
      transform: 0.5s;
      border: 1px solid #ffffff;
    }
  }

  .save {
    height: 3rem;
    width: 7rem;
    background: #333;
    color: #fff;
    font-weight: bold;
    border-radius: 0;

    text-transform: none;

    .progress {
      color: #fff;
    }

    &:hover {
      cursor: pointer;
      background: ${transparentize(0.1, '#333')};
    }
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
