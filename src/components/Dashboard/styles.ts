import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 6rem;
  margin-top: 4rem;
`;

export const Main = styled.div`
  height: 100vh;
  min-width: calc(100vw - 220px);

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

export const Tile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  justify-content: center;
`;

interface MainTileProps {
  background?: string;
  hasBorder?: boolean;
}

export const Box = styled.div<MainTileProps>`
  height: 32rem;
  width: 50%;

  background: ${(props) => (props.background ? props.background : '#fff')};

  border: ${(props) => (props.hasBorder ? '1px solid #f1f1f1' : '')};
`;

export const BoxHeader = styled.div`
  height: 3.5rem;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 2rem;
`;

interface MainTitleTitleProps {
  isTitle?: boolean;
}

export const Title = styled.h1<MainTitleTitleProps>`
  font-weight: 600;
  font-size: ${({ isTitle }) => (isTitle ? '1.5rem' : '1rem')};
  user-select: none;
  transition: 0.3s;

  margin: 0;

  &:hover {
    cursor: ${({ isTitle }) => (isTitle ? '' : 'pointer')};
    transition: 0.3s;
    color: ${({ isTitle }) => (isTitle ? '' : transparentize(0.3, '#333'))};
  }
`;

export const TransactionTile = styled.div`
  height: 5rem;
  padding: 0 1rem;
  transition: 0.5s;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    transition: 0.5s;
    background: #f1f1f1;
  }
`;

export const TransactionTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const TransactionCreated = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  color: #c9c9c9;

  user-select: none;

  &:hover {
    cursor: default;
  }
`;

interface TransactionAvatarProps {
  color: string;
}

export const TransactionAvatar = styled.div<TransactionAvatarProps>`
  height: 2.5rem;
  width: 2.5rem;
  background: ${({ color }) => color};
  border-radius: 50%;

  display: flex;

  justify-content: center;
  align-items: center;

  font-weight: bold;
  user-select: none;

  &:hover {
    cursor: default;
  }
`;

interface TransactionValueProps {
  isGreater: boolean;
}
export const TransactionValue = styled.div<TransactionValueProps>`
  font-weight: 600;
  font-size: 1rem;
  color: ${({ isGreater }) => (isGreater ? '#33cc95' : '#ff5252')};

  user-select: none;

  &:hover {
    cursor: default;
  }
`;
