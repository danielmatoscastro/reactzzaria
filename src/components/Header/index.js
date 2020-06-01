import React, { useState } from 'react';
import {
  AppBar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useAuth } from 'hooks';
import { StyledToolbar, LogoContainer, StyledMainLogo } from './style';


function Header() {
  const [anchorElement, setAnchorElement] = useState(null);
  const { userInfo: { user: { firstName } }, logout } = useAuth();

  const handleOpenMenu = (e) => setAnchorElement(e.target);
  const handleClose = () => setAnchorElement(null);

  return (
    <AppBar>
      <StyledToolbar>
        <LogoContainer>
          <StyledMainLogo />
        </LogoContainer>

        <Typography color="inherit">
          {`Olá ${firstName} =)`}
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

export default Header;
