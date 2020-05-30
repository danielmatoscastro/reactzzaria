import React, { useState, useContext } from 'react';
import {
  AppBar, IconButton, Typography, Menu, MenuItem,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { AuthContext } from 'contexts/Auth';
import { StyledToolbar, LogoContainer, StyledMainLogo } from './style';

function MainPage() {
  const [anchorElement, setAnchorElement] = useState(null);
  const { userInfo, logout } = useContext(AuthContext);

  const handleOpenMenu = (e) => setAnchorElement(e.target);
  const handleClose = () => setAnchorElement(null);

  return (
    <AppBar>
      <StyledToolbar>
        <LogoContainer>
          <StyledMainLogo />
        </LogoContainer>

        <Typography color="inherit">
          Olá
          {' '}
          {userInfo.user.displayName.split(' ')[0]}
          {' '}
          =)
        </Typography>
        <IconButton color="inherit" onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          open={!!anchorElement}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
}
export default MainPage;
