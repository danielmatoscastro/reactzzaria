import React, { Fragment, useState } from 'react';
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { HOME } from 'routes';
import { useAuth } from 'hooks';
import MainLogo from 'components/MainLogo';
import { LogoContainer, LinkLogo } from './style';

function CommonHeader() {
  const [anchorElement, setAnchorElement] = useState(null);
  const { userInfo: { user: { firstName } }, logout } = useAuth();

  const handleOpenMenu = (e) => setAnchorElement(e.target);
  const handleClose = () => setAnchorElement(null);


  return (
    <Fragment>
      <LogoContainer>
        <LinkLogo to={HOME}>
          <MainLogo />
        </LinkLogo>
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
    </Fragment>
  );
}

export default CommonHeader;
