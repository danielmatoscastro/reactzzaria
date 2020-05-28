import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';
import { ReactComponent as Logo } from './logoReactzzaria.svg';

export const Container = styled.div`
  padding: 40px;
`;

export const MainLogo = styled(Logo)`
  width: 100%;
`;

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true,
})`
  text-transform: none;
  font-size: 22px;
  padding: 15px;
  max-width: 480px;
`;
