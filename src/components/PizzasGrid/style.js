import styled from 'styled-components/macro';
import { Grid } from '@material-ui/core';

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  padding: ${({ theme }) => theme.spacing(5, 5, 0)}
`;

export default PizzasGrid;
