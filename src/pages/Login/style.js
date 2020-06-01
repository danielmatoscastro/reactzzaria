import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`;

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true,
})`
  text-transform: none;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  padding: ${({ theme }) => theme.spacing(2)}px;
  max-width: 480px;
`;
