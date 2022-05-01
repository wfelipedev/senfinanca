import {
  Typography,
  CssBaseline,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@mui/material';
import * as S from '../../styles/drawer';
import Menus from './menus';
import { BarChart2, LogOut } from 'react-feather';
import DialogSignout from '../Dialogs/Signout';
import { useState } from 'react';

interface DrawerProps {
  children: JSX.Element;
}

export default function DrawerCustom({ children }: DrawerProps) {
  const routeSelected = window.location.toString().split('/').slice(-1)[0];

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleMenus = () => {
    return <Menus routeSelected={routeSelected} />;
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      <S.Root>
        <CssBaseline />
        <S.DrawerCustom variant="permanent">
          <S.Logo>
            <S.Row>
              <BarChart2 color="#333" />
              <h1 style={{ color: '#333' }}>senfinance</h1>
            </S.Row>
          </S.Logo>
          <List>
            {handleMenus()}
            <ListItem className="listItem" onClick={openModal}>
              <ListItemIcon>
                <LogOut size={20} className="icon" />
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontWeight: 'bold' }}>Sair</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </S.DrawerCustom>

        <main style={{ backgroundColor: '#f6f7fb' }}>{children}</main>
      </S.Root>

      <DialogSignout isVisible={isVisible} closeModal={closeModal} />
    </>
  );
}
