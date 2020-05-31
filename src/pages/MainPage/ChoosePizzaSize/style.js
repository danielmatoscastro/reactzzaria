import styled from 'styled-components/macro';
import {
  Grid,
  Divider,
  Typography,
  CardActionArea,
} from '@material-ui/core';


export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  padding: 40px 40px 0;
`;

export const StyledDivider = styled(Divider)`
  margin: 20px 0;
  width: 100%;
`;

export const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-width: 250px;
`;

export const Pizza = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  z-index: 1;

  &::before, &::after {
    content: '';
    background-color: #ccc;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    width: 160px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 160px;
  }
`;

export const PizzaText = styled(Typography).attrs({
  variant: 'h5',
})`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: white;
`;
