import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';

import styles from './MobileDrawer.module.css';
import UniforteLogo from "../../assets/uniforte.svg";
import { responsiveFontSizes } from '@mui/material';

export function MobileDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{marginTop: '1rem'}}>
        {[
          { text: 'Serviços', href: '#servicos', icon: <BusinessCenterIcon /> },
          { text: 'Quem Somos', href: '#quemsomos', icon: <InfoIcon /> },
          { text: 'Benefícios', href: '#beneficios', icon: <CardGiftcardIcon /> },
          { text: 'Contato', href: '#contato', icon: <ContactsIcon /> }
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className={styles.drawerContainer}>
      <header className={styles.header}>
        <img src={UniforteLogo} alt="Uniforte Logo" className={styles.UniforteLogo} />
        <IconButton onClick={toggleDrawer('right', true)}>
          <MenuIcon />
        </IconButton>
      </header>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
