import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Input as MaterialInput, Button } from '@material-ui/core';

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const Input = styled(MaterialInput).attrs({
  type: 'number',
})`
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;

  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`;

export const ButtonAddPizza = styled(Button).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained',
})`
  text-align: center;
`;

export default Input;
