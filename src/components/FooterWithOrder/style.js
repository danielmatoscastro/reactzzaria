import styled from 'styled-components/macro';
import { Grid, Button as MaterialButton } from '@material-ui/core';

export const OrderContainer = styled(Grid).attrs({
  item: true,
})`
  flex-grow: 1;
`;

export const ButtonsContainer = styled(Grid).attrs({
  item: true,
})`
  display: flex;
  align-items: center;
`;

export const Button = styled(MaterialButton).attrs({
  variant: 'contained',
})`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;
