import styled from 'styled-components/macro';
import { Grid } from '@material-ui/core';

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  padding: 40px 40px 0;
`;

export default PizzasGrid;
