import { styled } from '@mui/system';
import { Drawer } from '@mui/material';
import { transparentize } from 'polished';

export const Root = styled('div')`
  display: flex;

  main {
    background: #f6f7fb;
  }
`;

export const Logo = styled('div')`
  display: flex;
  align-items: 'center';
  margin: 1rem 0 4rem 1rem;
  background-clip: 'text';
  -webkit-background-clip: 'text';
  -webkit-text-fill-color: 'transparent';
  user-select: none;

  .first {
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&display=swap');
    /*  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700;900&display=swap');
    font-family: 'Mulish', sans-serif; */
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

  h1 {
    color: #333;
  }
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
    /* background: #eaae0a; */
    background: #fbfcfe;
  }

  // heroku styling
  .css-1l8j5k8 {
    width: 220px;
    border-right: 0;
    background: #fbfcfe;
  }

  .listItemSelected {
    border-right-style: solid;
    border-color: #333;
    border-width: 0.3rem;
    color: #4b4a59;

    font-weight: bold;

    &:hover {
      cursor: pointer;
    }

    .icon {
      color: ${transparentize(0, '#333')};
    }
  }

  .listItem {
    color: #333;

    font-weight: bold;

    &:hover {
      cursor: pointer;
    }

    .icon {
      color: ${transparentize(0, '#333')};
    }
  }
`;
