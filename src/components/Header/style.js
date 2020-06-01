import styled from 'styled-components/macro';
import { Toolbar } from '@material-ui/core';
import MainLogo from 'components/MainLogo';

export const StyledToolbar = styled(Toolbar)`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
`;

export const StyledMainLogo = styled(MainLogo)`
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`;
