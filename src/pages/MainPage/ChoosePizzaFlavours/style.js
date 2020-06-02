import styled from 'styled-components/macro';
import { Card as MaterialCard } from '@material-ui/core';

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
