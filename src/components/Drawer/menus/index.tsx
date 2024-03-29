import { Link } from 'react-router-dom';
import {
  Typography,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@mui/material';
import { Grid, FileText } from 'react-feather';

interface MenuProps {
  routeSelected: string;
}

export default function Menus({ routeSelected }: MenuProps) {
  return (
    <>
      <ListItem
        className={
          routeSelected === 'dashboard' ? 'listItemSelected' : 'listItem'
        }
        component={Link}
        selected={routeSelected === 'dashboard'}
        to="/dashboard"
      >
        <ListItemIcon>
          <Grid size={20} className="icon" />
        </ListItemIcon>
        <ListItemText>
          <Typography style={{ fontWeight: 'bold' }}>Dashboard</Typography>
        </ListItemText>
      </ListItem>
      <ListItem
        className={
          routeSelected === 'transactions' ? 'listItemSelected' : 'listItem'
        }
        component={Link}
        selected={routeSelected === 'transactions'}
        to="/transactions"
      >
        <ListItemIcon>
          <FileText size={20} className="icon" />
        </ListItemIcon>
        <ListItemText>
          <Typography style={{ fontWeight: 'bold' }}>Transações</Typography>
        </ListItemText>
      </ListItem>
    </>
  );
}
