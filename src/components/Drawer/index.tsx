import { useState } from 'react';
import {
  Typography,
  CssBaseline,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@mui/material';
import { BarChart2, LogOut } from 'react-feather';
import Menus from './menus';
import DialogSignout from '../Dialogs/Signout';
import * as S from './styles';

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
              <h1>senfinance</h1>
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

        <main>{children}</main>
      </S.Root>

      <DialogSignout isVisible={isVisible} closeModal={closeModal} />
    </>
  );
}
