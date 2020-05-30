import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  padding: 40px;
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
