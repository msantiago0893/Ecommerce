// Header.tsx
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" onClick={onSidebarToggle} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        ShopSmart
      </Typography>
      <AccountCircleIcon />
    </Toolbar>
  </AppBar>
);

export default Header;
