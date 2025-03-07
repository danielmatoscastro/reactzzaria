import styled from 'styled-components/macro';
import { Typography } from '@material-ui/core';

export const Pizza = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.palette.common.white};
  z-index: 1;

  &::before, &::after {
    content: '';
    background-color: ${({ theme }) => theme.palette.grey.A100};
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
  background-color: ${({ theme }) => theme.palette.common.white};
`;
