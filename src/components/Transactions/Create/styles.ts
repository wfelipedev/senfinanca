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
  margin: 0.5rem 0;
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
