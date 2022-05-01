import { styled } from '@mui/system';
import { Drawer, ListItem } from '@mui/material';
import { transparentize } from 'polished';

export const Root = styled('div')`
  display: flex;
`;

export const Logo = styled('div')`
  display: flex;
  align-items: 'center';
  margin: 1rem 0 4rem 1rem;
  -webkit-background-clip: 'text';
  -webkit-text-fill-color: 'transparent';
  user-select: none;

  .first {
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700;900&display=swap');
    font-family: 'Mulish', sans-serif;
    font-weight: 900;
    color: #07102d;
  }

  .second {
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700;900&display=swap');
    font-family: 'Mulish', sans-serif;
    font-weight: 900;
    color: #7176af;
  }
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;

  align-items: center;
  font-size: 0.8rem;
`;

interface SelectedProps {
  selected?: boolean;
}

export const DrawerCustom = styled(Drawer)<SelectedProps>`
  width: 220px;
  flex-shrink: 0;
  padding: '1rem';

  .css-12i7wg6-MuiPaper-root-MuiDrawer-paper {
    border-right: 0;
    width: 220px;
    background: #eaae0a;
    /* background: #fbfcfe; */
  }

  .css-1l8j5k8 {
    width: 220px;
    border-right: 0;
    background: #eaae0a;
  }

  .listItem {
    border-right-style: ${(props) => (props.selected ? 'solid' : '')};
    border-color: ${(props) => (props.selected ? '#333' : '')};
    border-width: ${(props) => (props.selected ? '.3rem' : '')};
    color: ${(props) => (props.selected ? '#4b4a59' : '#333')};

    font-weight: bold;

    &:hover {
      cursor: pointer;
    }

    .icon {
      color: ${transparentize(0, '#333')};
    }
  }
`;

interface SelectedProps {
  selected?: boolean;
}

export const ListItemSelected = styled(ListItem)<SelectedProps>`
  border-right-style: ${(props) => (props.selected ? 'solid' : '')};
  border-color: ${(props) => (props.selected ? '#333' : '')};
  border-width: ${(props) => (props.selected ? '.3rem' : '')};
  color: ${(props) => (props.selected ? '#4b4a59' : '#6b7c93')};

  font-weight: bold;

  .icon {
    color: ${transparentize(0.3, '#333')};
  }
`;
