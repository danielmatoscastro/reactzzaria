import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Card as MaterialCard, Grid, Button as MaterialButton } from '@material-ui/core';

export const Img = styled.img`
  width: 200px;
`;

export const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ checked, theme }) => (checked ? theme.palette.primary.main : '')};
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export const Footer = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey[400]};
  padding: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`;

export const OrderContainer = styled(Grid).attrs({
  item: true,
})`
  flex-grow: 1;
`;

export const Button = styled(MaterialButton).attrs({
  variant: 'contained',
  component: Link,
})`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;
