import styled from 'styled-components/macro';
import { Card as MaterialCard } from '@material-ui/core';

export const Img = styled.img`
  width: 200px;
`;

export const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ checked }) => (checked ? 'black' : '')};
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export default Img;
